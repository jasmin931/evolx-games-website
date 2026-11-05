
import { useEffect } from 'react'

import Nav from './components/Nav'
import Hero from './components/Hero'
import GameShowcase from './components/GameShowcase'
import TabletShowcase from './components/TabletShowcase'
import Spirits from './components/Spirits'
import Studio from './components/Studio'
import Team from './components/Team'
import Footer from './components/Footer'
import Awards from './components/Awards'
import Supporter from './components/Supporter'

import LudaroPage from './pages/LudaroPage'
import LegalPage from './pages/LegalPage'

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'

  useEffect(() => {
    const titles: Record<string, string> = {
      '/games/ludaro': 'Ludaro | EvolX Games',
      '/accessibility': 'Accessibility | EvolX Games',
      '/terms': 'Terms & Conditions | EvolX Games',
      '/privacy-policy': 'Privacy Policy | EvolX Games'
    }

    document.title =
      titles[path] ?? 'EvolX Games — Play Outside The Lines'
  }, [path])

  if (path === '/games/ludaro') {
    return <LudaroPage />
  }

  if (path === '/accessibility') {
    return <LegalPage kind="accessibility" />
  }

  if (path === '/terms') {
    return <LegalPage kind="terms" />
  }

  if (path === '/privacy-policy') {
    return <LegalPage kind="privacy-policy" />
  }

  // Original EvolX homepage – preserve existing sections
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Supporter />
        <Awards />
        <GameShowcase />
        <TabletShowcase />
        <Spirits />
        <Studio />
        <Team />
      </main>
      <Footer />
    </>
  )
}
