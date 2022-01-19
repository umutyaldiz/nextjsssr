import Head from 'next/head'
import Analytics from '@/components/Analytics'
import Layouts from '@/layouts/index'
import { wrapper } from '@/store/store'
import '../styles/tailwind.css'
import { WebVitals } from '@/components/WebVitals'
import { GetNav } from '@/store/header/actions'
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

MyApp.getInitialProps = wrapper.getInitialAppProps(store => async ({ Component, ctx }) => {
  await store.dispatch(GetNav())
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  return { pageProps };
})

export default wrapper.withRedux(MyApp)