const express = require('express');
const cors = require('cors');

// Create an Express application
const app = express();

// Configure CORS middleware
app.use(cors());

app.get('/', (req, res) => {
   res.send('Hello World!');
 });
 
 // Start the server
 const PORT = process.env.PORT || 3000;
 app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
 });

