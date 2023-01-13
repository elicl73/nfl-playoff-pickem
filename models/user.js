import { Schema, model, models } from 'mongoose'

const userPlayOffSchema = new Schema(
  {
    name: {
      type: String,
      require: [true, 'Please enter your name'],
      unique: [true, 'Account already exists'],
      trim: true,
    },
    teamSelected: {
      type: String,
      require: [true, 'Please enter a team'],
      unique: [true, 'Team already selected'],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

export default models.UserPlayOff || model('UserPlayOff', userPlayOffSchema)
