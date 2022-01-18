import GAScript from "./Gtm"

const isProduction = process.env.NODE_ENV === 'production'

const Analytics = () => {
    return (
        <>
            {isProduction && process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID && <GAScript />}
        </>
    )
}

export default Analytics