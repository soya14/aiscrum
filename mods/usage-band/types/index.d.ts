export type Usage = {
  context?: number
  fiveHour?: number
  fiveHourResetsAt?: string
  weekly?: number
}

declare module 'claude-code' {
  interface PluginState {
    'usage-band': { last: Usage | null }
  }
}
