import Layout from '../components/Layout'
import { CartProvider } from '../context/CartContext'
import { LanguageProvider } from '../context/LanguageContext'
import { NotificationProvider } from '../context/NotificationContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <CartProvider>
        <NotificationProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NotificationProvider>
      </CartProvider>
    </LanguageProvider>
  )
}

export default MyApp
