import Image from 'next/image'
import Link from 'next/link'

import useSWR from 'swr'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()
  return data
}

export const Navbar = () => {
  const { data, error } = useSWR('/api/teams/available', fetcher)
  let lengthString = ''

  if (error) return 'Error'
  if (!data) return

  const length = data.length
  if (length < 10) {
    lengthString = `0${length}`
  } else {
    lengthString = `${length}`
  }

  return (
    <nav className="flex items-center justify-between flex-wrap bg-black py-4 px-2 gap-x-20">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href={'/'}>
          <Image width={80} height={80} alt="" src="/picklogo.png" />
        </Link>
      </div>
      <div id="menu" className="flex-grow flex items-center w-auto">
        <div>
          <span className="inline-block text-sm leading-none font-bold text-white border-white mt-0 select-none">
            Equipos
          </span>
          <span className=" relative font-bold text-xs -left-3 -top-4 p-1 text-white bg-red-700 rounded-full">
            {lengthString}
          </span>
        </div>
      </div>
    </nav>
  )
}
