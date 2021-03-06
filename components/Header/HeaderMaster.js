import Link from 'next/link';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';


const Header = ({ Header }) => {
    const router = useRouter();
    return (
        <header className="sticky top-0 left-0 w-full bg-gray-800 z-50">
            <div className="container mx-auto">
                <nav>
                    <div className="flex items-center h-12 space-x-4">
                        <Link href="/">
                            <a title="anasayfa" className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                                Anasayfa
                            </a>
                        </Link>
                        {
                            Header.nav.data.map(nav => {
                                return (
                                    <Link key={nav.attributes.name} href={nav.attributes.url} >
                                        <a title={nav.attributes.name} className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${router.asPath.match(nav.attributes.url) ? "bg-gray-700" : ""}`}>
                                            {nav.attributes.name}
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

export default connect((state) => state)(Header)