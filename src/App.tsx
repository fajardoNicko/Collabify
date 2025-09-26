import './App.css'
import Header from './components/header'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Projects from './pages/projects';
import Tasks from './pages/tasks';
import Sidebar from './components/sidebar';
import Activity from './components/sidebar-pages/activity';
import DirectMessages from './components/sidebar-pages/direct-messages';


function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/sidebar-pages/direct-messages" element={<DirectMessages />} />
        <Route path="/sidebar-pages/activity" element={<Activity />} />


        <Route path="/projects" element={<Projects />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </Router>
  )
}

export default App
