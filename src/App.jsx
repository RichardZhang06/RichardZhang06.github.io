import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import DemoPage from './pages/DemoPage'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Main portfolio page */}
          <Route path="/" element={
            <>
              <Navbar />
              <main className="main-content">
                <Hero />
                <About />
                <Projects />
                <Contact />
              </main>
            </>
          } />
          
          {/* Demo pages */}
          <Route path="/demos/:projectId" element={<DemoPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App