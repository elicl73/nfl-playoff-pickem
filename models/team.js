import { Schema, model, models } from 'mongoose'

const teamSchema = new Schema({
  id: String,
  location: String,
  name: String,
  displayName: String,
  shortDisplayName: String,
  logo: String,
})

export default models.Team || model('Team', teamSchema)
