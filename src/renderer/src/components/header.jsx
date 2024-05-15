import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSettingsMenu, toggleMockMenu } from '../store/core.js'
import { SlButton, SlIcon } from './shoelace'

// mock test
import { setNewMessageYT } from '../store/youtube.js'
import { MOCK_MSG1 } from '../mocks/mock.js'

const Header = () => {
  const coreState = useSelector(state => state.core)
  const setupState = useSelector(state => state.setup)
  const savedState = useMemo(() => {
    return {
      core: {
        ...coreState
      },
      setup: {
        ...setupState
      }
    }
  }, [coreState, setupState])
  const dispatch = useDispatch()
  const ipcHandle = () => window.electron.ipcRenderer.send('SAVE_FILE', savedState)
  const ipcHandle2 = () => window.electron.ipcRenderer.send('GET_FILE')

  // useEffect(() => {
  //   window.electron.ipcRenderer.on('SAVED_DATA', (_, args) => {
  //     console.warn('Here is Saved Data', args)
  //   })
  // }, [])

  return (
    <>
      <header className="msp-header">
        <div className="msp-h-title">
          Multi Streaming Platform
        </div>

        <div className="msp-h-actions">
          <SlButton onClick={() => dispatch(ipcHandle2)} size="small" circle>
            <SlIcon name="floppy"/>
          </SlButton>
          <SlButton onClick={() => dispatch(ipcHandle)} size="small" circle>
            <SlIcon name="floppy"/>
          </SlButton>
          {/* <SlButton onClick={() => dispatch(setNewMessageYT(MOCK_MSG1))} size="small" circle>
            <SlIcon name="youtube"/>
          </SlButton> */}
          <SlButton onClick={() => dispatch(toggleMockMenu())} size="small" circle>
            <SlIcon name="menu-button-wide-fill"/>
          </SlButton>
          <SlButton onClick={() => dispatch(toggleSettingsMenu())} size="small" circle>
            <SlIcon name="gear-wide-connected"/>
          </SlButton>
        </div>
      </header>
    </>
  )
}

export default Header
