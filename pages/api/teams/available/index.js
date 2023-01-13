import { dbConnect } from 'utils/connectMongo'
import AvailableTeams from 'models/availableTeams'

dbConnect()

export default async function handler(req, res) {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const teams = await AvailableTeams.find()
        return res.status(200).json(teams)
      } catch (error) {
        return res.status(500).json({ msg: error.message })
      }

    default:
      return res.status(400).json({ msg: 'this method is not supported' })
  }
}
