import { useState, useEffect } from 'react'

import { SlideData } from 'utils/sliderData'
import Team from './team'

const fetcher = async (id, user) => {
  const res = await fetch(`/api/teams/available/${id}`, {
    method: 'DELETE',
  })
  const newUser = await fetch('/api/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: user,
      teamSelected: id,
    }),
  })
  const data = await newUser.json()
  return data
}

export default function SortTeams({ availableTeams, newUser }) {
  const [end, setEnd] = useState(false)
  const [current, setCurrent] = useState(0)
  const [counter, setCounter] = useState(0)
  const [selectedTeam, setSelectedTeam] = useState()
  const teamsLength = 14
  const minNumber = 0
  const length = availableTeams.length

  useEffect(() => {
    if (!end) {
      setCounter((counter) => counter + 1)
      const interval = setInterval(async () => {
        if (current === teamsLength - 1) {
          setCurrent(0)
        } else {
          setCurrent((current) => current + 1)
        }
        if (counter === 68) {
          const randomTeam =
            Math.floor(Math.random() * (length - minNumber)) + minNumber
          setSelectedTeam(availableTeams[randomTeam].id)
          await fetcher(availableTeams[randomTeam].id, newUser)
          setEnd(true)
        }
      }, 100)
      return () => clearInterval(interval)
    }
  }, [current])

  return (
    <>
      {SlideData.map((team, i) => (
        <div key={team.id}>
          {i === current && (
            <div className="flex items-center justify-center flex-col mb-6">
              {end && (
                <span className="text-xl text-black font-bold pb-4">
                  {newUser}
                </span>
              )}
              <Team teamId={!end ? team.id : selectedTeam} />
            </div>
          )}
        </div>
      ))}
    </>
  )
}
