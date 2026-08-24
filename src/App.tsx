import Nav from './components/Nav'
import Hero from './components/Hero'
import GameShowcase from './components/GameShowcase'
import TabletShowcase from './components/TabletShowcase'
import Spirits from './components/Spirits'
import Studio from './components/Studio'
import Team from './components/Team'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
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
