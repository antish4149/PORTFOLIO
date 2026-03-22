// App.jsx — Root component: composes all sections
import Navbar      from './components/Navbar'
import Hero        from './components/Hero'
import About       from './components/About'
import Skills      from './components/Skills'
import Projects    from './components/Projects'
import Experience  from './components/Experience'
import Contact     from './components/Contact'
import Footer      from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      {/* Sticky navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Page sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating scroll-to-top */}
      <ScrollToTop />
    </>
  )
}
