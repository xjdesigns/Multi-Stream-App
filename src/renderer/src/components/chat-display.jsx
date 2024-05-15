import { SlButton, SlButtonGroup, SlIcon } from './shoelace'

const ChatDisplay = ({
    icon,
    userCount = 0,
    orderIdx = 0,
    moveLeft,
    moveRight,
    children 
}) => {
  const handleMoveLeft = () => {
    moveLeft && moveLeft()
  }

  const handleMoveRight = () => {
    moveRight && moveRight()
  }

  return (
    <div className={`msp-cdisplay msp-cdisplay--${orderIdx}`}>
      <div className="msp-c-header">
        <div className={`msp-c-icon ${icon}`}>
          <SlIcon slot="prefix" name={icon} />
        </div>

        <div className="msp-c-actions">
          <SlButtonGroup>
            <SlButton size="small">
              <SlIcon slot="prefix" name="gear-wide-connected"/>
            </SlButton>
            <SlButton size="small" onClick={handleMoveLeft}>
              <SlIcon slot="prefix" name="arrow-left"/>
            </SlButton>
            <SlButton size="small" onClick={handleMoveRight}>
              <SlIcon slot="prefix" name="arrow-right"/>
            </SlButton>
          </SlButtonGroup>
        </div>
      </div>

      <div className="msp-c-info">
        <div className="msp-c-users">
          <div>
            <SlIcon name="person-circle" />
          </div>
          <div>
            {userCount}
          </div>
        </div>
      </div>

      <div className="msp-message-display">
        <div className="msp-message-inner">
          {children}
        </div>
      </div>
    </div>
  )
}

export default ChatDisplay
