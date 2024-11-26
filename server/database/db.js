import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDB Connected')
    } catch (e) {
        console.log('Error occured while connecting to mongodb', e)
    }
}

export default connectDB
