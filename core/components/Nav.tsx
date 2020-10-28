import { FunctionComponent } from 'react'
import Link from 'next/link'

const Nav: FunctionComponent = (): JSX.Element => {
    return (
        <>
            <nav className="p-4 bg-red-400 text-white">
                <Link href="/">
                    <a>Home</a>
                </Link>{' '}
                |{' '}
                <Link href="/about">
                    <a>About</a>
                </Link>
            </nav>
        </>
    )
}

export default Nav