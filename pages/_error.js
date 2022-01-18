import Link from "next/link"

function Error({ statusCode }) {
    return (
        <div className="container">
            <div className="flex flex-col items-start justify-start md:justify-center md:items-center md:flex-row md:space-x-6 md:mt-24">
                <div className="pt-6 pb-8 space-x-2 md:space-y-5">
                    <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 md:text-8xl md:leading-14 md:border-r-2 md:px-6">
                        {statusCode}
                    </h1>
                </div>
                <div className="max-w-md">
                    <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
                        Üzgünüz, bu sayfayı bulamadık.
                    </p>
                    <Link href="/" passHref>
                        <button className="inline px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-lg shadow focus:outline-none focus:shadow-outline-blue hover:bg-red-700">
                            Anasayfa
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps({ res, err }) {
    console.log(res.statusCode);
    //const statusCode = res.statusCode;
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return {
        props: {
            statusCode:statusCode
        }
    }
}

export default Error