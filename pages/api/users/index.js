import { dbConnect } from 'utils/connectMongo'
import UserPlayOff from 'models/user'

dbConnect()

export default async function handler(req, res) {
  const { method, body } = req

  switch (method) {
    case 'GET':
      try {
        const users = await UserPlayOff.find()
        return res.status(200).json(users)
      } catch (error) {
        return res.status(500).json({ msg: error.message })
      }

    case 'POST':
      try {
        const newUser = new UserPlayOff(body)
        const saveUser = await newUser.save()
        return res.status(200).json(saveUser)
      } catch (error) {
        return res.status(500).json({ msg: error.message })
      }

    default:
      return res.status(400).json({ msg: 'this method is not supported' })
  }
}
