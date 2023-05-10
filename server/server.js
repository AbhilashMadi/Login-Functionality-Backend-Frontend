import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connect from './database/connection.js';
import router from './router/route.js';

const app = express();

/* Middlewares */
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powerd-by'); //less hackers know about stack

const port = process.env.PORT || 8080;
const host = process.env.HOST ||'localhost';

/* HTTP GET request */
app.get('/', (req, res) => {
  res.status(201)
    .json('HTTP GET Request');
})

/** API Routes */
app.use('/v1', router);

/* start server when database is successfully connected */
connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`Server connected to http://localhost:${port}')`);
      })
    } catch (error) {
      console.log('Failed to connect to the server 😭');
    }
  })
  .catch((error) => {
    console.log("Invalid database connection...!");
  })

