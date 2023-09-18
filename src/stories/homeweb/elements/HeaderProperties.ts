import { MenuEntryProperties } from './MenuEntry'

export interface HeaderProperties {
  mainLabel: string
  leftMenuEntries: MenuEntryProperties[]
  rightMenuEntries: MenuEntryProperties[]
  rightMenuLabel: string
  onSelectMenuEntry: () => void
}