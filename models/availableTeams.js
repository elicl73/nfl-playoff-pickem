import { Schema, model, models } from 'mongoose'

const availableTeamsSchema = new Schema({
  id: String,
})

export default models.AvailableTeams ||
  model('AvailableTeams', availableTeamsSchema)
