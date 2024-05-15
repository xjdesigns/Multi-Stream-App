import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNewMessageYT } from '../store/youtube'
import { setNewMessageTW } from '../store/twitch'
import { setNewMessageTK } from '../store/tiktok'
import { setNewMessageTT } from '../store/twitter'
import { MOCK_MSG1, MOCK_MSG2, MOCK_MSG3, MOCK_MSG4 } from '../mocks/mock'

const MOCKS = [MOCK_MSG1, MOCK_MSG2, MOCK_MSG3, MOCK_MSG4]

function getRandomIntInclusive() {
  const min = 0
  const max = 3
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

const useMocker = (type = 'youtube', timer = 2000) => {
  const dispatch = useDispatch()
  const isYTSetup = useSelector(state => state.setup.youtube.isSetup)
  const isTWSetup = useSelector(state => state.setup.twitch.isSetup)
  const isTKSetup = useSelector(state => state.setup.tiktok.isSetup)
  const isTTSetup = useSelector(state => state.setup.twitter.isSetup)
  const [timerId, setTimerId] = useState('')

  function start() {
    console.warn(`${type} mock chat started`)
    const id = setInterval(() => {
      console.warn('Timer Running')
      const val = getRandomIntInclusive()
      if (type === 'youtube' && isYTSetup) dispatch(setNewMessageYT(MOCKS[val]))
      if (type === 'twitch' && isTWSetup) dispatch(setNewMessageTW(MOCKS[val]))
      if (type === 'twitch' && isTKSetup) dispatch(setNewMessageTK(MOCKS[val]))
      if (type === 'twitch' && isTTSetup) dispatch(setNewMessageTT(MOCKS[val]))
    }, timer)
    setTimerId(id)
  }

  function stop() {
    console.warn(`${type} mock chat stopped`)
    clearInterval(timerId)
  }

  return {
    start,
    stop
  }
}

export { useMocker }


