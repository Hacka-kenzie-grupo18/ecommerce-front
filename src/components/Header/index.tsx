import { useEffect, useState } from 'react'
import DeskHeader from './Desk'
import MobileHeader from './Mobile'
import NavBarHeader from './NavBar'

const Header = () => {
  const [isScreenSmall, setIsScreenSmall] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 760px)')
    setIsScreenSmall(mediaQuery.matches)

    const mediaQueryListener = (event: MediaQueryListEvent) => {
      setIsScreenSmall(event.matches)
    }

    mediaQuery.addListener(mediaQueryListener)

    return () => {
      mediaQuery.removeListener(mediaQueryListener)
    }
  }, [])

  return (
    <>
      {isScreenSmall ? (
        <MobileHeader />
      ) : (
        <div>
          <DeskHeader />
          <NavBarHeader />
        </div>
      )}
    </>
  )
}

export default Header
