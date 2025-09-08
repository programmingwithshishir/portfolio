import { useState } from 'react'
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import SkillsPage from './pages/SkillsPage/SkillsPage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import ContactPage from './pages/ContactsPage/ContactPage'
function App() {
  return (
    <>
      <HomePage />
      <AboutPage />
      <SkillsPage/>
      <ProjectsPage />
      <ContactPage />
    </>
  )
}

export default App