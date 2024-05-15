import { useState } from 'react'
import { useSelector } from 'react-redux'
import { SlIconButton } from './shoelace'
import SetupDialog from './setup/setup-dialog'

export const CoreMenu = () => {
  const isYTSetup = useSelector(state => state.setup.youtube.isSetup)
  const isTWSetup = useSelector(state => state.setup.twitch.isSetup)
  const isTKSetup = useSelector(state => state.setup.tiktok.isSetup)
  const isTTSetup = useSelector(state => state.setup.twitter.isSetup)
  const [details, setDetails] = useState(null)
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  const handleYoutubeDetails = () => {
    const details = {
      type: 'Youtube',
      userId: '11111',
      key: 'AA11BB22'
    }
    setDetails(details)
  }

  const handleTwitchDetails = () => {
    const details = {
      type: 'Twitch',
      userId: '11111',
      key: 'AA11BB22'
    }
    setDetails(details)
  }

  const handleTiktokDetails = () => {
    const details = {
      type: 'Tiktok',
      userId: '11111',
      key: 'AA11BB22'
    }
    setDetails(details)
  }

  const handleTwitterDetails = () => {
    const details = {
      type: 'Twitter',
      userId: '11111',
      key: 'AA11BB22'
    }
    setDetails(details)
  }

  const handleCloseDetails = () => {
    setDetails(null)
  }

  return (
    <div className="msp-core-menu">
      <div className="msp-cmenu-actions">
        <div className="msp-cbtn-cont">
          <SlIconButton name="youtube" onClick={handleYoutubeDetails} />
          <div className={`msp-cbtn-icon ${isYTSetup ? 'msp-cbtn-icon--success' : 'msp-cbtn-icon--danger' }`} />
        </div>

        <div className="msp-cbtn-cont">
          <SlIconButton name="twitch" onClick={handleTwitchDetails} />
          <div className={`msp-cbtn-icon ${isTWSetup ? 'msp-cbtn-icon--success' : 'msp-cbtn-icon--danger' }`} />
        </div>

        <div className="msp-cbtn-cont">
          <SlIconButton name="tiktok" onClick={handleTiktokDetails} />
          <div className={`msp-cbtn-icon ${isTKSetup ? 'msp-cbtn-icon--success' : 'msp-cbtn-icon--danger' }`} />
        </div>

        <div className="msp-cbtn-cont">
          <SlIconButton name="twitter" onClick={handleTwitterDetails} />
          <div className={`msp-cbtn-icon ${isTTSetup ? 'msp-cbtn-icon--success' : 'msp-cbtn-icon--danger' }`} />
        </div>
      </div>

      <div className="msp-cmenu-help">
        <SlIconButton name="info-lg" onClick={ipcHandle} />
      </div>

      {details && (
        <SetupDialog details={details} closeAction={handleCloseDetails} />
      )}
    </div>
  )
}

export default CoreMenu
