import { getGlobalConfig } from './config'

export type ThemeNames = 'dark' | 'light' | 'light-daltonized' | 'dark-daltonized'

export interface Theme {
  bashBorder: string
  kode: string
  noting: string
  permission: string
  secondaryBorder: string
  text: string
  secondaryText: string
  suggestion: string
  success: string
  error: string
  warning: string
  primary: string
  secondary: string
  diff: {
    added: string
    removed: string
    addedDimmed: string
    removedDimmed: string
  }
}

const lightTheme: Theme = {
  bashBorder: '#FF6E57',
  kode: '#FFC233',
  noting: '#222222',
  permission: '#e9c61aff',
  secondaryBorder: '#999',
  text: '#000',
  secondaryText: '#666',
  suggestion: '#32e98aff',
  success: '#2c7a39',
  error: '#ab2b3f',
  warning: '#966c1e',
  primary: '#000',
  secondary: '#666',
  diff: {
    added: '#69db7c',
    removed: '#ffa8b4',
    addedDimmed: '#c7e1cb',
    removedDimmed: '#fdd2d8',
  },
}

const lightDaltonizedTheme: Theme = {
  bashBorder: '#FF6E57',
  kode: '#FFC233',
  noting: '#222222',
  permission: '#3366ff',
  secondaryBorder: '#999',
  text: '#000',
  secondaryText: '#666',
  suggestion: '#3366ff',
  success: '#006699',
  error: '#cc0000',
  warning: '#ff9900',
  primary: '#000',
  secondary: '#666',
  diff: {
    added: '#99ccff',
    removed: '#ffcccc',
    addedDimmed: '#d1e7fd',
    removedDimmed: '#ffe9e9',
  },
}

const darkTheme: Theme = {
  bashBorder: '#FF6E57',
  kode: '#FFC233',
  noting: '#222222',
  permission: '#b1b9f9',
  secondaryBorder: '#888',
  text: '#fff',
  secondaryText: '#999',
  suggestion: '#b1b9f9',
  success: '#4eba65',
  error: '#ff6b80',
  warning: '#ffc107',
  primary: '#fff',
  secondary: '#999',
  diff: {
    added: '#225c2b',
    removed: '#7a2936',
    addedDimmed: '#47584a',
    removedDimmed: '#69484d',
  },
}

const darkDaltonizedTheme: Theme = {
  bashBorder: '#FF6E57',
  kode: '#FFC233',
  noting: '#222222',
  permission: '#99ccff',
  secondaryBorder: '#888',
  text: '#fff',
  secondaryText: '#999',
  suggestion: '#99ccff',
  success: '#3399ff',
  error: '#ff6666',
  warning: '#ffcc00',
  primary: '#fff',
  secondary: '#999',
  diff: {
    added: '#004466',
    removed: '#660000',
    addedDimmed: '#3e515b',
    removedDimmed: '#3e2c2c',
  },
}

export function getTheme(overrideTheme?: ThemeNames): Theme {
  const config = getGlobalConfig()
  switch (overrideTheme ?? config.theme) {
    case 'light':
      return lightTheme
    case 'light-daltonized':
      return lightDaltonizedTheme
    case 'dark-daltonized':
      return darkDaltonizedTheme
    default:
      return darkTheme
  }
}
