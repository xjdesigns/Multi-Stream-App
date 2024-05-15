import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { initializeCore } from '../store/core'
import { initializeSetup, setStatus } from '../store/setup'
import { LOADED_STATUS } from '../constants/constants'

export function useAppHooks({ isTest = false } = {}) {
  const dispatch = useDispatch()
  const [appHasLoaded, setAppHasLoaded] = useState(false)
  const [appData, setAppData] = useState(null)

  // On Boot App runs twice due to React.StrictMode in dev only
  useEffect(() => {
    if (!appHasLoaded && !isTest) {
      setAppHasLoaded(true)
      window.electron.ipcRenderer.send('APP_IS_READY')
    }
  }, [appHasLoaded, isTest])

  useEffect(() => {
    if (!appData && !isTest) {
      window.electron.ipcRenderer.once('APP_LOADED', (_, args) => {
        if (args && !appData) {
          setAppData(args)
          const { core, setup } = args
          if (core) dispatch(initializeCore({ core }))
          if (setup) dispatch(initializeSetup({ setup }))
          if (!setup) dispatch(setStatus({ status: LOADED_STATUS }))
        } else {
          window.electron.ipcRenderer.removeAllListeners('APP_IS_READY')
          window.electron.ipcRenderer.removeAllListeners('APP_LOADED')
        }
      })
    }

    if (isTest) dispatch(setStatus({ status: LOADED_STATUS }))
  }, [appData, isTest])
}
