import Head from 'next/head'
import Analytics from '@/components/Analytics'
import Layouts from '@/layouts/index'
import { wrapper } from '@/store/store'
import '../styles/tailwind.css'
import { WebVitals } from '@/components/WebVitals'
export function reportWebVitals(metric) {
  WebVitals(metric)
}



function MyApp({ Component, pageProps }) {
  const Layout = Layouts[Component.layout] || Layouts['LayoutMaster'];
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Analytics />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default wrapper.withRedux(MyApp)