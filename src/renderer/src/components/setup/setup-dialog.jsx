import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SlDialog, SlButton, SlButtonGroup, SlInput } from '../shoelace'
import {
  createSetupYoutube,
  createSetupTwitch,
  createSetupTiktok,
  createSetupTwitter,
  removeSetup
} from '../../store/setup'

const SetupDialog = ({ details = {}, closeAction }) => {
  const { type } = details
  const dispatch = useDispatch()
  const isSetup = useSelector(state => state.setup[type.toLowerCase()].isSetup ?? false)
  const [isLoading, setIsLoading] = useState(false)
  const [currentDetails, setCurrentDetails] = useState(details)

  const updateDetails = (val, key) => {
    setCurrentDetails(prevState => {
      return {
        ...prevState,
        [key]: val
      }
    })
  }

  const updateSetup = () => {
    if (type === 'Youtube') dispatch(createSetupYoutube())
    if (type === 'Twitch') dispatch(createSetupTwitch())
    if (type === 'Tiktok') dispatch(createSetupTiktok())
    if (type === 'Twitter') dispatch(createSetupTwitter())
  }

  const handleSave = () => {
    setIsLoading(true)
    setTimeout(() => {
      updateSetup()
      closeAction()
      setIsLoading(false)
    }, 3000)
  }

  const handleRemove = type => {
    setIsLoading(true)
    setTimeout(() => {
      dispatch(removeSetup({ type: type.toLowerCase() }))
      closeAction()
      setIsLoading(false)
    }, 3000)
  }

  return (
    <SlDialog label={`${currentDetails?.type ?? ''} Stream Setup`} open={open} onSlAfterHide={() => closeAction()}>
      <form>
        <div className="msp-fcontrol">
          <SlInput
            label="User Id"
            value={currentDetails?.userId ?? ''}
            onSlInput={ev => updateDetails(ev.target.value, 'userId')}
            disabled={isLoading}
          />
        </div>

        <div className="msp-fcontrol">
          <SlInput
            label="API Key"
            type="password"
            password-toggle
            value={currentDetails?.key ?? ''}
            onSlInput={ev => updateDetails(ev.target.value, 'key')}
            disabled={isLoading}
          />
        </div>

        {isSetup && (
          <div>
            <SlButton
              variant="danger"
              size="small"
              onClick={() => handleRemove(type)}
              loading={isLoading}
            >
              Remove
            </SlButton>
          </div>
        )}
      </form>

      <div slot="footer">
        <SlButtonGroup>
          <SlButton onClick={() => closeAction()} disabled={isLoading}>
            Close
          </SlButton>
          <SlButton variant="success" onClick={handleSave} loading={isLoading}>
            Save
          </SlButton>
        </SlButtonGroup>
      </div>
    </SlDialog>
  )
}

export default SetupDialog
