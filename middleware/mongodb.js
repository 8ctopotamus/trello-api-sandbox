import mongoose from 'mongoose'

const connectDB = handler => async (req, res) => {  
  if (mongoose.connections[0].readyState) {
    // use current connection
    return handler(req, res)
  }
  
  // create new connection
  await mongoose.connect(process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/trello-api-sandbox')
  
  return handler(req, res)
}

export default connectDB