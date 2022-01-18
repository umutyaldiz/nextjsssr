import Script from 'next/script'

const GAScript = () => {
  const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
      />

      <Script strategy="lazyOnload" id="ga-script">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GTM_ID}', {
              page_path: window.location.pathname,
            });
        `}
      </Script>
    </>
  )
}

export default GAScript

export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}