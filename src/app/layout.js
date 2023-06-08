import '../../styles/globals.css';
import Head from '../components/Head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <Head/>
      <body>
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
