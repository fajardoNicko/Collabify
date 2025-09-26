import { useState } from 'react'
import './App.css'
import Header from './components/header'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Projects from './pages/projects';
import Tasks from './pages/tasks';

function App() {

  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
