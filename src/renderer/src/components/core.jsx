import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import Donations from './donations/donations'
import YoutubeChat from './youtube/youtube-chat'
import TwitchChat from './twitch/twitch-chat'
import TiktokChat from './tiktok/tiktok-chat'
import TwitterChat from './twitter/twitter-chat'
import { SlSpinner, SlAlert, SlIcon } from './shoelace'
import { LOADING_STATUS, LOADED_STATUS } from '../constants/constants'

const Core = () => {
  const setupStatus = useSelector(state => state.setup.status)
  const isYTSetup = useSelector(state => state.setup.youtube.isSetup)
  const isTWSetup = useSelector(state => state.setup.twitch.isSetup)
  const isTKSetup = useSelector(state => state.setup.tiktok.isSetup)
  const isTTSetup = useSelector(state => state.setup.twitter.isSetup)
  const hasSetupService = useMemo(() => {
    let hasService = false
    if (isYTSetup) hasService = true
    if (isTWSetup) hasService = true
    if (isTKSetup) hasService = true
    if (isTTSetup) hasService = true
    return hasService
  }, [isYTSetup, isTWSetup, isTKSetup, isTTSetup])
  const hideMissing = useSelector(state => state.core.hideMissingSetups)
  const isFullWidth = useSelector(state => state.core.isFullWidth)

  return (
    <div className={`msp-core ${isFullWidth ? 'is-full-width' : ''}`}>
      {setupStatus === LOADING_STATUS && (
        <div className="msp-spinner-full">
          <div>
            <SlSpinner className="msp-spinner--large" />
          </div>
          <p>Initializing App</p>
        </div>
      )}
      {setupStatus === LOADED_STATUS && (
        <>
          <Donations />
          {hasSetupService ? (
            <div className="msp-c-core">
              {(isYTSetup || !hideMissing) && (
                <YoutubeChat />
              )}
              {(isTWSetup || !hideMissing) && (
                <TwitchChat />
              )}
              {(isTKSetup || !hideMissing) && (
                <TiktokChat />
              )}
              {(isTTSetup || !hideMissing) && (
                <TwitterChat />
              )}
            </div>
          ) : (
            <SlAlert open className="msp-core-alert">
              <SlIcon slot="icon" name="info-circle" />
              You have not setup any live streams.
            </SlAlert>
          )}
        </>
      )}
    </div>
  )
}

export default Core
