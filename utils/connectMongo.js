import { connect, connection, set } from 'mongoose'

const conn = {
  isConnected: false,
}

export async function dbConnect() {
  if (conn.isConnected) {
    return
  }

  set('strictQuery', true)
  const db = await connect(process.env.MONGODB_URL)
  conn.isConnected = db.connections[0].readyState
  console.log(connection.db.databaseName)
}

connection.on('connected', () => {
  console.log('Mongodb is connected')
})

connection.on('error', (err) => {
  console.log(err)
})
