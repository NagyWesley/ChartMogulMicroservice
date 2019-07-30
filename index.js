const express = require('express');
const dotenv = require('dotenv');
const users = require('./routes/users')(express);

dotenv.config();

const app = express();

app.use(express.json());
app.use('/users', users);


// app.get('/', (req, res) => res.json({ res: 'good setup' }));


app.listen(process.env.PORT, (err) => {
  if (err) throw err;
  // eslint-disable-next-line no-console
  console.log(`> Ready on http://localhost:${process.env.PORT}`);
});
