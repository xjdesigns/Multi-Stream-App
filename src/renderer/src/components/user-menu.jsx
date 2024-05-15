import { useSelector, useDispatch } from 'react-redux'
import { closeSettingsMenu,toggleHideMissing, updateFontSize, toggleIsFullWidth } from '../store/core.js'
import { SlButton, SlDrawer, SlSwitch, SlSelect, SlOption } from './shoelace'
import { CORE_FS } from '../constants/constants.js'

const UserMenu = () => {
  const isMenuOpen = useSelector(state => state.core.settingsMenuOpen)
  const hideMissing = useSelector(state => state.core.hideMissingSetups)
  const fontSize = useSelector(state => state.core.fontSize)
  const isFullWidth = useSelector(state => state.core.isFullWidth)
  const dispatch = useDispatch()

  const handleDialogHide = ev => {
    if (ev.target.localName === 'sl-select') return
    dispatch(closeSettingsMenu())
  }

  const handleSelect = ev => {
    const val = ev.target.value
    const doc = document.querySelector('html')
    doc.dataset.size = val
    dispatch(updateFontSize(val))
  }

  return (
    <SlDrawer label="Menu" open={isMenuOpen} onSlAfterHide={handleDialogHide}>
      <div className="msp-fcontrol msp-fcontrol--large">
        User control settings.
      </div>

      <div className="msp-fcontrol msp-fcontrol--large">
        <SlSwitch
          checked={isFullWidth}
          onSlChange={() => dispatch(toggleIsFullWidth())}
        >
          Full Width
        </SlSwitch>
      </div>

      <div className="msp-fcontrol msp-fcontrol--large">
       <SlSwitch
        checked={hideMissing}
        onSlChange={() => dispatch(toggleHideMissing())}
        >
          Hide Missing Setups
        </SlSwitch>
      </div>

      <div className="msp-fcontrol">
        <SlSelect onSlChange={handleSelect} label="Font Size" value={[fontSize]}>
          {CORE_FS.map(cfs => {
            return (
              <SlOption key={cfs.value} value={cfs.value}>{cfs.name}</SlOption>
            )
          })}
        </SlSelect>
      </div>

      <SlButton slot="footer" variant="primary" onClick={() => dispatch(closeSettingsMenu())}>
        Close
      </SlButton>
    </SlDrawer>
  )
}

export default UserMenu
