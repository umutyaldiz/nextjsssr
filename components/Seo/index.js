import Head from "next/head";

const config = process.env.DefaultSeo;
const Seo = ({ title, description }) => {
    const siteTitle = config.title;
    return (
        <Head>
            <title>{`${title} | ${siteTitle}`}</title>
            <meta name="description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={siteTitle} />
            <meta property="twitter:card" content="summary" />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
        </Head>
    );
}

export default Seo;