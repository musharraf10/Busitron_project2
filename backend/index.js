// server.js
import { app } from "./app.js";
import connectDb from "./src/database/mongooseConnect.js";
import 'dotenv/config';



const PORT = process.env.PORT || 4000;

connectDb()
    .then(() => {
      app.get("/", (req, res) => {
        res.send("Hello World");
      });

      app.listen(PORT, () => {
        console.log(`🚀 Server is running on port ${PORT}`);
      });
    })
    .catch((err) => {
      console.error("Database connection error:", err);
      process.exit(1);
    });
