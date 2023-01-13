import Image from 'next/image'
import useSWR from 'swr'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()
  return data
}

export default function Team({ teamId }) {
  const { data, error } = useSWR(`/api/teams/${teamId}`, fetcher)

  if (error) return ''
  if (!data) return

  return (
    <>
      <Image src={`${data.logo}`} width={105} height={105} alt="" />
      <span className="font-bold">{data.shortDisplayName}</span>
    </>
  )
}
