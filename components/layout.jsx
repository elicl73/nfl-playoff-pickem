import Head from 'next/head'

import { Navbar } from './navbar'

export default function Layout({ children, title = '' }) {
  return (
    <>
      <Head>
        <meta name="description" content="Quiniela semanal de la NFL" />
        <title>{`NFL Playoff Quiniela ${title}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-72 mx-auto h-screen rounded-l border-2 shadow-lg bg-gray-100">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
      </div>
    </>
  )
}
