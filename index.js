import express from "express";
import routes from './src/routers/crmRouter';
import mongoose from 'mongoose';

import bodyParse from 'body-parse';

const app = express();

const PORT = 4000;
//mongoose connection 

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,

});

//body parse connection 
app.use(bodyParser.uslencoded({ extended: true }));
app.use(bodyParse.json());

routes(app);

app.get('/', (req, res) =>
    res.send(`node and express server running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);