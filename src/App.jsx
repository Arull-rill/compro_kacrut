import Grain from './components/Grain.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Navbar from './components/Navbar.jsx'
import Marquee from './components/Marquee.jsx'
import Footer from './components/Footer.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Music from './sections/Music.jsx'
import Members from './sections/Members.jsx'
import Story from './sections/Story.jsx'
import Gallery from './sections/Gallery.jsx'
import Follow from './sections/Follow.jsx'
import Contact from './sections/Contact.jsx'
import { band } from './data/band.js'

export default function App() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:bg-gold focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:text-ink"
      >
        Lewati ke konten
      </a>

      <Grain />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <Marquee items={band.marquee} />
        <About />
        <Music />
        <Members />
        <Story />
        <Gallery />
        <Follow />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
