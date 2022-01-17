import Head from 'next/head'
import Analytics from '@/components/Seo'
import LayoutMaster from '@/layouts/index'
import LayoutCategory from '@/layouts/LayoutCategory'

import { wrapper } from '@/store/store'

import '../styles/tailwind.css'

const layouts = {
  LayoutMaster,
  LayoutCategory
};

function MyApp({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || layouts['LayoutMaster'];

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