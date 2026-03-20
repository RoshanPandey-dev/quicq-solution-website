import { useState, useEffect, useRef } from 'react'
import { useLocation, useNavigate, Routes, Route } from 'react-router-dom'
import gsap from 'gsap'
import './PageTransition.css'

export default function PageTransition({ children }) {
  const location = useLocation()
  const navigate = useNavigate()
  const [displayLocation, setDisplayLocation] = useState(location)
  const isTransitioning = useRef(false)
  const overlayRef = useRef(null)
  const pathRef = useRef(null)
  const logoRef = useRef(null)

  // SVG Path Data for morphing transition (bottom to top, then top to bottom)
  // pathStart: flat at bottom
  const pathStart = "M 0 100 V 100 Q 50 100 100 100 V 100 z"
  // pathMid: curved upwards, reaching middle of screen
  const pathMid = "M 0 100 V 50 Q 50 0 100 50 V 100 z"
  // pathEnd: flat at top, covering entire screen
  const pathEnd = "M 0 100 V 0 Q 50 0 100 0 V 100 z"
  
  // pathOutStart: flat at top, covering entire screen
  const pathOutStart = "M 0 0 V 100 Q 50 100 100 100 V 0 z"
  // pathOutMid: curved downwards, reaching middle of screen
  const pathOutMid = "M 0 0 V 50 Q 50 100 100 50 V 0 z"
  // pathOutEnd: flat at bottom, revealing screen
  const pathOutEnd = "M 0 0 V 0 Q 50 0 100 0 V 0 z"

  useEffect(() => {
    // Intercept clicks on links manually to trigger transition before navigating
    // This is a common pattern for global page transitions in React Router
    const handleLinkClick = (e) => {
      const target = e.target.closest('a')
      if (!target) return
      
      const href = target.getAttribute('href')
      if (!href || !href.startsWith('/') || href.startsWith('#') || target.target === '_blank') return

      // Parse href to separate pathname and hash
      const hashIndex = href.indexOf('#')
      const targetPath = hashIndex >= 0 ? (href.substring(0, hashIndex) || '/') : href
      const hash = hashIndex >= 0 ? href.substring(hashIndex) : ''

      // If it's a hash link on the current page, let the browser handle scrolling
      if (targetPath === location.pathname && hash) return

      // Only intercept cross-page navigation
      if (targetPath !== location.pathname) {
        e.preventDefault()
        if (isTransitioning.current) return
        triggerTransition(targetPath, hash)
      }
    }

    document.addEventListener('click', handleLinkClick)
    return () => document.removeEventListener('click', handleLinkClick)
  }, [location.pathname])

  const triggerTransition = (targetPath, hash = '') => {
    isTransitioning.current = true
    
    // Ensure overlay is visible and blocks interaction
    gsap.set(overlayRef.current, { pointerEvents: 'auto', zIndex: 9999 })
    
    const tl = gsap.timeline({
      onComplete: () => {
        // Halfway point: Content is covered. Update location visually, then navigate.
        navigate(targetPath + hash)
        setDisplayLocation({ pathname: targetPath, hash: hash, search: '', state: null })

        if (hash) {
          // Delay briefly to let the new page render, then scroll to hash element
          setTimeout(() => {
            const el = document.getElementById(hash.replace('#', ''))
            if (el) el.scrollIntoView({ behavior: 'instant' })
          }, 50)
        } else {
          window.scrollTo(0, 0)
        }
        
        // Brief pause to show the logo, then reveal
        setTimeout(() => {
          revealNewPage()
        }, 500)
      }
    })

    // Prepare logo
    gsap.set(logoRef.current, { opacity: 0, y: 30 })

    // Animate SVG path IN (Curve up then flatten at top)
    tl.set(pathRef.current, { attr: { d: pathStart } })
      .to(pathRef.current, {
        duration: 0.6,
        attr: { d: pathMid },
        ease: "power4.in"
      })
      .to(pathRef.current, {
        duration: 0.4,
        attr: { d: pathEnd },
        ease: "power2.out"
      })
      
    // Fade and slide branding up
    tl.to(logoRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "power3.out"
    }, "-=0.2")
  }

  const revealNewPage = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        isTransitioning.current = false
        gsap.set(overlayRef.current, { pointerEvents: 'none', zIndex: -1 })
      }
    })

    // Fade logo out first
    tl.to(logoRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: "power2.in"
    })

    // Animate SVG path OUT (Curve down then flatten at bottom)
    tl.set(pathRef.current, { attr: { d: pathOutStart } }, "-=0.1")
      .to(pathRef.current, {
        duration: 0.6,
        attr: { d: pathOutMid },
        ease: "power4.in"
      })
      .to(pathRef.current, {
        duration: 0.4,
        attr: { d: pathOutEnd },
        ease: "power2.out"
      })
  }

  // Update display location whenever the actual location changes (post-transition)
  useEffect(() => {
    if (location.pathname !== displayLocation.pathname && !isTransitioning.current) {
      // If location changed without clicking a link (e.g., browser back button)
      setDisplayLocation(location)
    }
  }, [location, displayLocation])

  return (
    <>
      <div className="transition-overlay" ref={overlayRef}>
        <svg
          className="transition-svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            ref={pathRef}
            className="transition-path"
            d={pathStart}
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <div className="transition-logo-container" ref={logoRef}>
          <img src="/images/logo.png" alt="Quicq Solution" className="transition-logo-img" />
          <span className="transition-logo-text">
            Quicq<span className="logo-accent"> Solution</span>
          </span>
        </div>
      </div>
      {/* We intercept the routing context for our children so they display the old location during the animation */}
      <div className="page-wrapper">
        <Routes location={displayLocation}>
          {children.props.children}
        </Routes>
      </div>
    </>
  )
}
