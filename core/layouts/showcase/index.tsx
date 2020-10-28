import React, { FunctionComponent } from 'react'
import Head from 'next/head'
import { Nav } from '@/components'

interface Props {
    children: React.ReactNode
    title?: string,
}

const Showcase: FunctionComponent<Props> = ({ title, children }) => {
    return (
        <>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <meta charSet='utf-8' />

                <title>{title || 'Welcome'}</title>
            </Head>

            <header>
                <Nav />
            </header>

            <main className={`w-full my-0 mx-auto block bg-blue-300`}>
                {children}
            </main>
        </>
    )
}


export default Showcase