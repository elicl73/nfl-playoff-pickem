import { dbConnect } from 'utils/connectMongo'
import Team from 'models/team'

export default async function handler(req, res) {
  await dbConnect()
  const {
    method,
    query: { id },
  } = req

  switch (method) {
    case 'GET':
      try {
        const team = await Team.findOne({ id })
        if (!team) return res.status(404).json({ msg: 'Equipo no encontrado' })
        return res.status(200).json(team)
      } catch (error) {
        return res.status(500).json({ msg: error.message })
      }

    default:
      return res.status(400).json({ msg: 'this method is not supported' })
  }
}
