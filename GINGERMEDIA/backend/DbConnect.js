const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;
app.use(cors());
app.use(bodyParser.json());
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Skp@3887',
  database: 'Gingermedia',
});

connection.connect();

app.post('/api/registration', (req, res) => {
  const { data } = req.body;
  const query = 'INSERT INTO registration (name,email,password,mobile) VALUES (?, ?, ?, ?)';

  connection.query(query, [data.name, data.email,data.password,data.mobile], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    } else {
      res.json({ message: 'Data inserted successfully' });
    }
  });
});

// api for get details start
app.get('/api/registration/:field/:value', (req, res) => {
    const { field, value } = req.params;
     const query = `SELECT * FROM registration WHERE ${field} = ?`;
    connection.query(query, [value], (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
      } else {
        res.json(results);
      }
    });
  });
//   api for get details end

//api for insert additional details
app.post('/api/details', (req, res) => {
    const { data } = req.body;
    const query = 'INSERT INTO Details (reg_id,Age,Gender,Nationality,state,qualification,address) VALUES (?, ?, ?, ?, ?, ?, ?)';
    connection.query(query, [data.reg_id, data.Age,data.Gender,data.Nationality,data.state,data.qualification,data.address], (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
      } else {
        res.json({ message: 'Data inserted successfully' });
      }
    });
  });
  //api end for insert additional details

  //get details table detail start
  app.get('/api/details/:field/:value', (req, res) => {
    const { field, value } = req.params;
     const query = `SELECT * FROM Details WHERE ${field} = ?`;
    connection.query(query, [value], (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
      } else {
        res.json(results);
      }
    });
  });
//get details table detail start

//api for update
app.put('/api/registration/update', async (req, res) => {
    try {
      const { Data } = req.body;
     
      const query = `UPDATE Details SET name = ?, mobile = ?, password = ? WHERE reg_id = ?`;
      const values = [Data.name, Data.mobile, Data.password, Data.reg_id];
  
      const [updateResult] = await pool.execute(query, values);
  
      if (updateResult.affectedRows === 0) {
        res.status(404).json({ message: 'No registration found with the provided ID.' });
      } else {
        res.json({ message: 'updated successfully' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error.' });
    }
  });
//api for update end
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
