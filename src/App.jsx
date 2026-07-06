import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Jalandhar from './pages/Jalandhar.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jalandhar" element={<Jalandhar />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}
