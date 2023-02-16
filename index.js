import express from 'express';
<<<<<<< HEAD
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

mongoose
    .connect('mongodb+srv://admin:123456w@cluster0.adltjnx.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error', err))


const app = express();

app.use(express.json());

=======

const app = express();

>>>>>>> master
app.get('/', (req, res) => {
    res.send('Hello World!');
});

<<<<<<< HEAD
app.post('/auth/login', (req, res) => {
    console.log(req.body)

    const token = jwt.sign({
        email: req.body.email,
        fullName: 'Вася Пупкин'
    }, 'secret123');
    res.json({
        success: true,
        token
    });
});

=======
>>>>>>> master
app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server OK');
<<<<<<< HEAD
});
=======
})
>>>>>>> master
