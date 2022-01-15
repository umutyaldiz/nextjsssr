import Link from 'next/link';
import { useRouter } from 'next/router';
import headerData from "@/data/header";

const HeaderCategory = () => {
    const router = useRouter();
    return (
        <header className="bg-red-500">
            <div className="container">
                <nav>
                    <div className="flex items-center h-12 space-x-4">
                        {
                            headerData.map(nav => {
                                return (
                                    <Link key={nav.name} href={nav.url} >
                                        <a title={nav.name} className={`text-gray-300 hover:bg-red-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${router.asPath == nav.url ? "bg-red-400" : ""}`}>
                                            {nav.name}
                                        </a>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default HeaderCategory;