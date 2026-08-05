import { useState } from 'react'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import SkillsPage from './pages/SkillsPage/SkillsPage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import ContactPage from './pages/ContactsPage/ContactPage'

function App() {
  return (
    <div className="bg-dominant min-h-screen text-slate-200">
      <Navbar />
      <HomePage />
      <AboutPage />
      <SkillsPage/>
      <ProjectsPage />
      <ContactPage />
    </div>
  )
}

export default App