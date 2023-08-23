import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import routes from './routes';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/', routes);

const dbPath = process.argv[2] || path.join(__dirname, '..', 'database.csv');
app.set('dbPath', dbPath);

const port = process.env.PORT || 1245;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
