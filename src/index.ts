import express,{Application} from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import errorHandler from './middleware/errorHandler';

const app:Application = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(cors());

app.use('/', (req, res) => {
  res.send('Hello world');
})

const port: number = 3000;

app.listen(port, () => console.log(`Server in running on port ${port}...`));

app.use(errorHandler);
