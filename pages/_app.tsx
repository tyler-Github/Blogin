import type { AppProps } from 'next/app'

import Layout from '../components/Layout'

import '@startersites/styles/css/blog.css'
import 'styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
