import Image from 'next/image'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Projects from './components/Projects'
import About from './components/About'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </>
  )
}
