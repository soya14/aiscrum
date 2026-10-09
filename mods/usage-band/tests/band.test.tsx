import type { SessionUsage } from 'claude-code'
import { expect, test } from 'claude-code/testing'

const BAND = {
  component: 'AbovePrompt',
  props: {
    hasSurvey: false,
    isWorking: false,
    maxRows: 3,
    bodyColumns: 80,
    scroll: { offset: 0, bodyRows: 0 },
    view: {},
  },
} as const

const USAGE: SessionUsage = {
  startedAt: 0,
  context: { window: 200_000, tokens: 50_000, percent: 25 },
  rateLimits: [
    { kind: 'five_hour', percentUsed: 85.5, resetsAt: '2026-10-09T06:30:00Z' },
    { kind: 'seven_day', percentUsed: 40 },
  ],
}

test('band shows usage after a turn and turns items past 80% red', async ($, on) => {
  on('ui.render', ($, e) => {
    const { Box } = $.ui.resolve(e)
    return <Box />
  })
  on('session.usage', () => ({ value: USAGE }))
  on('turn.complete', () => ({ text: 'done' }))
  const statuses: (string | undefined)[] = []
  on('ui.status', (_$, e) => {
    statuses.push(e.text)
    return { value: undefined }
  })

  for (const surface of ['terminal', 'desktop'] as const) {
    const before = await $.ui.mount({ plugin: 'usage-band', surface, ...BAND })
    expect(await before.find({ key: 'context' })).toBeUndefined()
    await before.unmount()
  }

  await $.turn.complete({ answer: 'done', durationMs: 1, isAborted: false, turnId: 't1', reason: 'answer' })

  expect(statuses.at(-1)).toBe('Context 25% · 🔴5h 86% (14:30 重置) · 本週 40%')

  for (const surface of ['terminal', 'desktop'] as const) {
    const ui = await $.ui.mount({ plugin: 'usage-band', surface, ...BAND })
    const context = await ui.find({ type: 'Text', text: /^Context/ })
    const fiveHour = await ui.find({ type: 'Text', text: /^5h/ })
    const weekly = await ui.find({ type: 'Text', text: /^本週/ })
    expect(context?.text).toBe('Context 25%')
    expect(context?.props.color).toBeUndefined()
    expect(fiveHour?.text).toBe('5h 86% (14:30 重置)')
    expect(fiveHour?.props.color).toBe('error')
    expect(weekly?.text).toBe('本週 40%')
    await ui.unmount()
  }
})
