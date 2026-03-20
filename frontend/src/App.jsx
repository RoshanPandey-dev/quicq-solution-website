import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SmoothScroller from './components/SmoothScroller'
import PageTransition from './components/PageTransition'
import WelcomePopup from './components/WelcomePopup'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function App() {
  return (
    <SmoothScroller>
      <ScrollToTop />
      <Navbar />
      <WelcomePopup />
      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageTransition>
      <Footer />
    </SmoothScroller>
  )
}

export default App
