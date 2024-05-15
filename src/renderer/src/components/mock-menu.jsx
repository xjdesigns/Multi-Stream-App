import { useDispatch, useSelector } from 'react-redux'
import { closeMockMenu } from '../store/core'
import { SlDrawer, SlButton, SlButtonGroup } from './shoelace'
import { useMocker } from '../hooks/mock-hooks'

const MockMenu = () => {
  const dispatch = useDispatch()
  const isMockMenuOpen = useSelector(state => state.core.mockMenuOpen)
  const isYTSetup = useSelector(state => state.setup.youtube.isSetup)
  const isTWSetup = useSelector(state => state.setup.twitch.isSetup)
  const isTKSetup = useSelector(state => state.setup.tiktok.isSetup)
  const isTTSetup = useSelector(state => state.setup.twitter.isSetup)

  const ytMocker = useMocker('youtube', 1000)
  const twitchMocker = useMocker('twitch', 1000)
  const tiktokMocker = useMocker('tiktok', 1200)
  const twitterMocker = useMocker('twitter', 3000)

  return (
    <SlDrawer label="Mocker" open={isMockMenuOpen} onSlAfterHide={() => dispatch(closeMockMenu())}>
      <div className="msp-fcontrol msp-fcontrol--large">
        Mock out responses for chat and donations.
      </div>

      <div className="msp-fcontrol msp-fcontrol--large">
        <SlButtonGroup>
          <SlButton onClick={ytMocker.start} disabled={!isYTSetup}>
            Start Youtube Chat
          </SlButton>
          <SlButton onClick={ytMocker.stop}>
            Stop Youtube Chat
          </SlButton>
        </SlButtonGroup>
      </div>

      <div className="msp-fcontrol msp-fcontrol--large">
        <SlButtonGroup>
          <SlButton onClick={twitchMocker.start} disabled={!isTWSetup}>
            Start Twitch Chat
          </SlButton>
          <SlButton onClick={twitchMocker.stop}>
            Stop Twitch Chat
          </SlButton>
        </SlButtonGroup>
      </div>

      <div className="msp-fcontrol msp-fcontrol--large">
        <SlButtonGroup>
          <SlButton onClick={tiktokMocker.start} disabled={!isTKSetup}>
            Start Tiktok Chat
          </SlButton>
          <SlButton onClick={tiktokMocker.stop}>
            Stop Tiktok Chat
          </SlButton>
        </SlButtonGroup>
      </div>

      <div className="msp-fcontrol msp-fcontrol--large">
        <SlButtonGroup>
          <SlButton onClick={twitterMocker.start} disabled={!isTTSetup}>
            Start Twitter Chat
          </SlButton>
          <SlButton onClick={twitterMocker.stop}>
            Stop Twitter Chat
          </SlButton>
        </SlButtonGroup>
      </div>

      <SlButton slot="footer" variant="primary" onClick={() => dispatch(closeMockMenu())}>
        Close
      </SlButton>
    </SlDrawer>
  )
}

export default MockMenu
