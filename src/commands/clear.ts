import { Command } from '@commands'
import { getMessagesSetter } from '@messages'
import { getContext } from '@context'
import { getCodeStyle } from '@utils/style'
import { clearTerminal } from '@utils/terminal'
import { getOriginalCwd, setCwd } from '@utils/state'
import { Message } from '@query'
import { resetReminderSession } from '@services/systemReminder'
import { resetFileFreshnessSession } from '@services/fileFreshness'

const clear = {
  type: 'local',
  name: 'clear',
  description: 'Clear conversation history and free up context',
  isEnabled: true,
  isHidden: false,
  async call(_, context) {
    clearConversation(context)
    return ''
  },
  userFacingName() {
    return 'clear'
  },
} satisfies Command

export async function clearConversation(context: {
  setForkConvoWithMessagesOnTheNextRender: (
    forkConvoWithMessages: Message[],
  ) => void
}) {
  await clearTerminal()
  getMessagesSetter()([])
  context.setForkConvoWithMessagesOnTheNextRender([])
  getContext.cache.clear?.()
  getCodeStyle.cache.clear?.()
  await setCwd(getOriginalCwd())

  // Reset reminder and file freshness sessions to clean up state
  resetReminderSession()
  resetFileFreshnessSession()
}

export default clear
