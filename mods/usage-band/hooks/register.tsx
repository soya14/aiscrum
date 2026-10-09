import { atom, read, update } from 'claude-code'
import type { Register } from 'claude-code'

import type { Usage } from '../types'

const last = atom({ plugin: 'usage-band', key: 'last' } as const, null)

const WARN_AT = 80
// Taiwan time (UTC+8, no daylight saving): the module's clock has no time zone of its own.
const UTC_OFFSET_HOURS = 8

const formatReset = (iso?: string) => {
  if (iso === undefined) return undefined
  const ms = Date.parse(iso)
  if (Number.isNaN(ms)) return undefined
  const local = new Date(ms + UTC_OFFSET_HOURS * 3_600_000)
  const hh = String(local.getUTCHours()).padStart(2, '0')
  const mm = String(local.getUTCMinutes()).padStart(2, '0')
  return `${hh}:${mm}`
}

const formatPercent = (value?: number) =>
  value === undefined ? '—' : `${Math.round(value)}%`

const summary = (usage: Usage) => {
  const mark = (value?: number) => (value !== undefined && value > WARN_AT ? '🔴' : '')
  const reset = formatReset(usage.fiveHourResetsAt)
  return [
    `${mark(usage.context)}Context ${formatPercent(usage.context)}`,
    `${mark(usage.fiveHour)}5h ${formatPercent(usage.fiveHour)}${reset ? ` (${reset} 重置)` : ''}`,
    `${mark(usage.weekly)}本週 ${formatPercent(usage.weekly)}`,
  ].join(' · ')
}

export const register: Register = on => {
  on('turn.complete', async ($, e, next) => {
    const { context, rateLimits } = await $.session.usage()
    const fiveHour = rateLimits.find(r => r.kind === 'five_hour')
    const weekly = rateLimits.find(r => r.kind === 'seven_day')
    const usage: Usage = {
      context: context.percent,
      fiveHour: fiveHour?.percentUsed,
      fiveHourResetsAt: fiveHour?.resetsAt,
      weekly: weekly?.percentUsed,
    }
    await update($, last, () => usage)
    // The status line too: not every app draws the band above the prompt.
    $.ui.status(summary(usage))

    return next(e)
  })

  on('ui.render', { component: 'AbovePrompt' }, async ($, e, next) => {
    const usage = await read($, last)

    if (e.props.hasSurvey || usage === null) {
      return next(e)
    }

    const { Box, Text } = $.ui.resolve(e)
    const reset = formatReset(usage.fiveHourResetsAt)
    const item = (key: string, label: string, value?: number, extra?: string) => {
      const isHot = value !== undefined && value > WARN_AT
      return (
        <Text key={key} color={isHot ? 'error' : undefined} dimColor={!isHot}>
          {label} {formatPercent(value)}
          {extra ?? ''}
        </Text>
      )
    }

    return (
      <Box flexDirection="row" gap={2}>
        {item('context', 'Context', usage.context)}
        {item('five-hour', '5h', usage.fiveHour, reset ? ` (${reset} 重置)` : '')}
        {item('weekly', '本週', usage.weekly)}
      </Box>
    )
  })
}
