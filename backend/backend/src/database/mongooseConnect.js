import mongoose from 'mongoose';




const conntectDb = async (req, res) => {


  const URI = process.env.URI || "mongodb+srv://abhisheksathala296:abhishek@cluster0.nirrk.mongodb.net/";

  try {

    const connectInstance = await mongoose.connect(URI)

    if (connectInstance) {
      return console.log(`N -Connected to mongoDB: ${connectInstance.connection.host}`);
    }



  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to connect to the database', success: false, message: error.message });
    process.exit(1);
  }

}


export default conntectDb