import Image from 'next/image'
import useSWR from 'swr'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()
  return data
}

export default function Team({ teamId, smallSize = false }) {
  const { data, error } = useSWR(`/api/teams/${teamId}`, fetcher)
  let wSize = 105
  let hSize = 105
  if (smallSize) {
    wSize = 25
    hSize = 25
  }

  if (error) return ''
  if (!data) return

  return (
    <div className="flex flex-col items-center">
      <Image src={`${data.logo}`} width={wSize} height={hSize} alt="" />
      <span className={`font-bold ${smallSize && 'text-xs'}`}>
        {data.shortDisplayName}
      </span>
    </div>
  )
}
