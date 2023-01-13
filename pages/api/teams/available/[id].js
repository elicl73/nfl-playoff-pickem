import { dbConnect } from 'utils/connectMongo'
import AvailableTeams from 'models/availableTeams'

dbConnect()

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req

  switch (method) {
    case 'DELETE':
      try {
        const deleteAvailableTeam = await AvailableTeams.findOneAndDelete({
          id,
        })
        if (!deleteAvailableTeam)
          return res.status(404).json({ msg: 'Equipo no encontrado' })
        return res.status(204).json()
      } catch (error) {
        return res.status(500).json({ msg: error.message })
      }

    default:
      return res.status(400).json({ msg: 'this method is not supported' })
  }
}
