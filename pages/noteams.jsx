//import { useState } from 'react'
import useSWR from 'swr'

import Team from 'components/team'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()
  return data
}

export default function NoTeams() {
  const { data, error } = useSWR('/api/users/', fetcher)
  //const [users, setUsers] = useState('')

  if (error) return 'Error'
  if (!data) return 'Loading.....'

  console.log(data)

  return (
    <div className="flex flex-col justify-center items-center m-2 bg-white">
      {data.map((user) => (
        <div
          key={user.teamId}
          className={`flex items-center gap-6 border-2 border-gray-500 rounded-md w-5/6 m-1 ${
            user.disqualified && 'bg-gray-800 text-white opacity-30'
          }`}
        >
          <div className="pl-2 w-1/3">
            <Team teamId={user.teamSelected} smallSize={true} />
          </div>
          <span className="text-xs font-bold">{user.name}</span>
        </div>
      ))}
    </div>
  )
}
