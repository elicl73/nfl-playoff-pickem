import { dbConnect } from 'utils/connectMongo'
import UserPlayOff from 'models/user'

export default async function handler(req, res) {
  await dbConnect()
  const {
    method,
    query: { user },
  } = req

  switch (method) {
    case 'GET':
      try {
        const resUser = await UserPlayOff.findOne({ name: user })
        if (!resUser) return res.status(404).json({ msg: 'Usuario nuevo' })
        return res.status(200).json(resUser)
      } catch (error) {
        return res.status(500).json({ msg: error.message })
      }

    default:
      return res.status(400).json({ msg: 'this method is not supported' })
  }
}
