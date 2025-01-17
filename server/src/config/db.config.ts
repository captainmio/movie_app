import mongoose from "mongoose";

const connectMongoDb = async () => {
  try {
    mongoose.connect(`${process.env.DATABASE_URL}`)
    console.log('Mongoose connected successfully')
  } catch(err: any) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

export default connectMongoDb;