import mongoose from "mongoose";

const connectMongoDb = async () => {
  try {
    mongoose.connect('mongodb+srv://vizdummy21:TtoeeQBxty1X61t0@movieappdb.scbko.mongodb.net/?retryWrites=true&w=majority&appName=movieAppDB')
  } catch(err: any) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

export default connectMongoDb;