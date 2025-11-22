import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Accueil from './pages/Accueil'
import Presentation from './pages/Presentation'
import Adhesion from './pages/Adhesion'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Paiement from './pages/Paiement'
import Admin from './pages/Admin'
import Actualites from './pages/Actualites'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/presentation" element={<Presentation />} />
            <Route path="/adhesion" element={<Adhesion />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/paiement" element={<Paiement />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/actualites" element={<Actualites />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
