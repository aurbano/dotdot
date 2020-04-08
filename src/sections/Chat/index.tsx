import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { useGlobalState } from 'store/state'
import Loader from 'components/Loader'

import styles from './index.module.scss'
import Messages from './Messages'
import TextBox from './TextBox'
import OnlineUsers from './OnlineUsers'
import PasswordLock from './PasswordLock'

export default () => {
  const { state } = useGlobalState()

  let chatArea = <Loader />

  if (state.socket.connected) {
    chatArea = (
      <div className={styles.chat}>
        <Container>
          <Row>
            <Col>
              <PasswordLock />
            </Col>
            <Col>
              <OnlineUsers />
            </Col>
          </Row>
        </Container>

        <Messages />
        <TextBox />
      </div>
    )
  }

  return chatArea
}