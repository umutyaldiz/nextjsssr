const CacheControl = (res) => {
    return res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
}
export default CacheControl;