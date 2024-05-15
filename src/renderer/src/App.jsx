import Header from './components/header'
import Core from './components/core'
import CoreMenu from './components/core-menu'
import UserMenu from './components/user-menu'
import MockMenu from './components/mock-menu'
import { useAppHooks } from './hooks/app-hooks'

function App() {
  useAppHooks()

  return (
    <>
      <Header />
      <div className="msp-core-container">
        <CoreMenu />
        <Core />
      </div>
      <UserMenu />
      <MockMenu />
    </>
  )
}

export default App

