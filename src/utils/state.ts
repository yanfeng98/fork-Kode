import { cwd } from 'process'
import { PersistentShell } from './PersistentShell'

export function getCwd(): string {
  return PersistentShell.getInstance().pwd()
}

// DO NOT ADD MORE STATE HERE OR BORIS WILL CURSE YOU
const STATE: {
  originalCwd: string
} = {
  originalCwd: cwd(),
}

export async function setCwd(cwd: string): Promise<void> {
  await PersistentShell.getInstance().setCwd(cwd)
}

export function setOriginalCwd(cwd: string): void {
  STATE.originalCwd = cwd
}

export function getOriginalCwd(): string {
  return STATE.originalCwd
}