import { Link } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import { ScrollManager } from './PageMeta.jsx'

export default function Layout({ children }) {
  return (
    <>
      <ScrollManager />
      <div className="ribbon">
        🎉 Registrations OPEN for our founding batches — Early Bird discount for the first 40 enrolments.{' '}
        <Link to="/#programs" style={{ textDecoration: 'underline', fontWeight: 800 }}>
          Claim yours →
        </Link>
      </div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
