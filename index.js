import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import user_info from './routes/user_info.js';

const PORT = process.env.PORT || 7000;

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to Github API');
})

app.use('/user_info', user_info);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../client/build'));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(PORT, () => console.log(`Server running on port :${PORT}`))