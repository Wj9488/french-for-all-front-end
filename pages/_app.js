import '@/styles/globals.css'
import Layout from "../components/Layout"
import GoogleAnalytics from '@bradgarropy/next-google-analytics'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <GoogleAnalytics measurementId='G-6GYHFFYH7H'/>
    </Layout>
  )
}
