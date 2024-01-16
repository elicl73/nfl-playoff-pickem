import { useState } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'

import SortTeams from 'components/sortteams'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()
  return data
}

export default function Pickem() {
  const { data, error } = useSWR('/api/teams/available', fetcher)
  const [user, setUser] = useState('')
  const [registeredUser, setRegisteredUser] = useState(false)
  const [start, setStart] = useState(false)
  const router = useRouter()

  const handleChange = (event) => {
    setRegisteredUser(false)
    setUser(event.target.value)
  }

  const toggleRunning = async (event) => {
    event.preventDefault()
    const res = await fetch(`/api/users/${user}`, {
      method: 'GET',
    })
    if (res.status === 200) {
      setRegisteredUser(true)
    } else {
      setStart(true)
    }
  }

  if (error) return 'Error'
  if (!data) return 'Loading.....'

  const length = data.length

  return (
    <>
      <div className="flex items-center justify-center flex-col m-4">
        <form
          className={`${start ? 'invisible' : length === 0 && 'invisible'}`}
          onSubmit={toggleRunning}
        >
          <div className="relative mb-6">
            <input
              type="text"
              name="user"
              id="input-user"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-black bg-transparent rounded-lg border border-gray-700 appearance-none focus:border-blue-700 focus:outline-none focus:ring-0 peer"
              placeholder=""
              value={user}
              onChange={handleChange}
            />
            <label
              htmlFor="input-user"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-100 px-2 peer-focus:px-2 peer-focus:text-blue-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Nombre o apodo
            </label>
            {registeredUser && (
              <span className="text-xs text-red-500 py-1">
                * El nombre <b>{user}</b> está duplicado utiliza otro nombre
              </span>
            )}
          </div>
          <button
            disabled={!user}
            className={`text-center mr-3 font-medium rounded-lg text-sm px-5 py-2.5 w-full ${
              user
                ? 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
                : 'bg-gray-400 text-gray-500'
            }`}
          >
            Empezar
          </button>
        </form>
        <div>
          {start && (
            <>
              {length > 0 && <SortTeams availableTeams={data} newUser={user} />}
            </>
          )}
          {length === 0 && (
            <div>
              <p>¡ Ya se seleccionarón todos los equipos !</p>
              <button
                type="button"
                onClick={() => router.push('/noteams')}
                className="mt-6 mx-auto text-center mr-3 font-medium rounded-lg text-sm px-5 py-2.5 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Ver Resultados
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
