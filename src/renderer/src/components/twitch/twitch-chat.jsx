import { useSelector, useDispatch } from 'react-redux'
import ChatDisplay from '../chat-display'
import { SlAlert, SlIcon } from '../shoelace'
import { updateOrder } from '../../store/core'
import { reorderLeft, reorderRight } from '../../utils/order.util'

const TWITCH_TYPE = 'twitch'

const TwitchChat = () => {
  const dispatch = useDispatch()
  const isSetup = useSelector(state => state.setup.twitch.isSetup)
  const chatMsgs = useSelector(state => state.twitch.messages)
  const chatUsers = useSelector(state => state.twitch.users)
  const order = useSelector(state => state.core.order)

  const handleMoveLeft = () => {
    const arr = reorderLeft(order, TWITCH_TYPE)
    dispatch(updateOrder({ order: arr }))
  }

  const handleMoveRight = () => {
    const arr = reorderRight(order, TWITCH_TYPE)
    dispatch(updateOrder({ order: arr }))
  }

  return (
    <ChatDisplay
      icon="twitch"
      userCount={chatUsers}
      orderIdx={order.indexOf(TWITCH_TYPE)}
      moveLeft={handleMoveLeft}
      moveRight={handleMoveRight}
    >
      {!isSetup ? (
        <SlAlert variant="warning" open>
          <SlIcon slot="icon" name="exclamation-triangle" />
          Twitch is not setup
        </SlAlert>
      ) : (
        <>
          {chatMsgs.length === 0 && (
            <SlAlert variant="primary" open>
              <SlIcon slot="icon" name="info-circle" />
              No messages
            </SlAlert>
          )}
          {chatMsgs.map((c, idx) => {
            return (
              <div className="msp-cmsg" key={idx}>
                <div className="msp-cmicon" />
                <div className="msp-cmname">
                  {c.name}
                </div>
                <div className="msp-cmmsg">
                  {c.msg}
                </div>
              </div>
            )
          })}
        </>
      )}
    </ChatDisplay>
  )
}

export default TwitchChat
