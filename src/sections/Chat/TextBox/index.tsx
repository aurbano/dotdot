import React, { useContext, useRef } from 'react'
import { Form } from 'react-bootstrap'
import { useImmer } from 'use-immer'
import classNames from 'classnames'

import { SocketContext } from 'util/socketProvider'
import styles from './index.module.scss'
import { VALID_USERNAME } from '../../../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import useGlobalState from 'store/state'
import { EVENTS } from 'store/types'

type State = {
  message: string
  private: boolean
  to: string | null
  isCommand: boolean
}

type Props = {
  onFocus?: () => void
  onBlur?: () => void
}

export default ({ onFocus, onBlur }: Props) => {
  const { state, dispatch } = useGlobalState()
  const [localState, setState] = useImmer<State>({
    message: '',
    private: false,
    to: null,
    isCommand: false,
  })
  const draftTimer = useRef<any>(null)

  const { socket } = useContext(SocketContext)

  const askForHelp = () => {
    dispatch({
      type: 'help_message',
    })
  }

  const handleSubmit = (e: React.ChangeEvent<any>) => {
    e.preventDefault()

    if (localState.message.length < 1 || localState.message.trim().length < 1) {
      return
    }

    sendMessage(localState.message)

    setState((draft) => {
      draft.message = ''
      draft.private = false
      draft.isCommand = false
    })
  }

  const sendMessage = (message: string, draft: boolean = false) => {
    if (!draft && (message.length < 1 || message.trim().length < 1)) {
      return
    }

    if (message === '/help') {
      return askForHelp()
    }

    let type = EVENTS.MESSAGE
    if (localState.isCommand) {
      type = EVENTS.COMMAND
    }
    socket?.emit(type, {
      message,
      attributes: {
        draft,
        private: localState.private,
        to: localState.to,
      },
    })
  }

  const onType = (e: React.ChangeEvent<any>) => {
    e.preventDefault()

    clearTimeout(draftTimer.current)

    const value: string = e.currentTarget.value

    // special messages
    let isCommand = false
    let isPM = false
    let to: string | null = null

    if (value[0] === '/') {
      isCommand = true
    } else if (value[0] === '@') {
      const words = value.split(' ')
      isPM = true
      if (
        words.length > 0 &&
        words[0][0] === '@' &&
        VALID_USERNAME.test(words[0].substr(1))
      ) {
        to = words[0].substr(1)
      }
    }

    setState((draft) => {
      draft.message = value
      draft.private = isPM
      draft.to = to
      draft.isCommand = isCommand
    })

    if (isPM || isCommand) {
      return
    }

    if (state.draftTimer > 0) {
      draftTimer.current = setTimeout(() => {
        sendMessage(value, true)
      }, state.draftTimer)
    }
  }

  let icon: IconProp = 'question-circle'
  if (localState.isCommand) {
    icon = 'code'
  } else if (localState.private) {
    icon = 'lock'
  }

  const onIconClick = () => {
    if (icon !== 'question-circle') {
      return
    }
    askForHelp()
  }

  return (
    <Form
      noValidate
      onSubmit={handleSubmit}
      className={classNames(styles.textBox, 'container', {
        [styles.private]: localState.private,
        [styles.command]: localState.isCommand,
      })}
    >
      <Form.Group controlId="chatForm.message">
        <Form.Control
          as="input"
          type="text"
          placeholder="Type a message..."
          autoFocus
          onChange={onType}
          onFocus={onFocus}
          onBlur={onBlur}
          value={localState.message}
        />
        <div className={styles.textIcon} onClick={onIconClick}>
          <FontAwesomeIcon icon={icon} />
        </div>
      </Form.Group>
    </Form>
  )
}