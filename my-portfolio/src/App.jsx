import './App.css'
import Layout from './layout/Layout'
import About from './sections/About'
import Contact from './sections/contact/Contact.jsx';
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

const App = () => {
  return (
    <Layout>
    
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
    
    
  )
}

export default App
