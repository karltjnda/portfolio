import Head from 'next/head'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Projects from './components/Projects'
import About from './components/About'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Karl
        </title>
        <meta name='description' content='I hope this tutorial is helpful for you' />
      </Head>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </>
  )
}
