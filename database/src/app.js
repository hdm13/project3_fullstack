import express from 'express';
import cors from 'cors'
const app = express();
import knex from 'knex';
import knexfile from '../knexfile.js';
const myknex = knex(knexfile.development);
const port = 8080;

app.use(cors())
app.use(express.json());

//*Home Page*//

app.get('/member_info', (req, res) => {
    myknex.select('*')
        .from('member_info')
        .then(data => res.send(data))
});

app.get('/navy_fitness_standards', (req, res) => {
    myknex.select('*')
        .from('navy_fitness_standards')
        .then(data => res.send(data))
});

app.get('/user_scores', (req, res) => {
    myknex.select('*')
        .from('user_scores')
        .then(data => res.send(data))
});

app.get('/user_weight', (req, res) => {
    myknex.select('*')
        .from('user_weight')
        .then(data => res.send(data))
});

app.post('/member_info', (req, res) => {
    myknex('member_info').insert(req.body)
        .then(data => res.send({ message: 'account created' }))
        .catch(err =>
            res.status(404).json({
                message:
                    'The data you are looking for could not be found. Please try again'
            }))       
});

//*User Page*//
app.patch('/conf/:id', (req, res) => {
    const { id } = req.params;
    knex('nfl_conf')
        .where({ id: id })
        .update(req.body)
        .then(data => res.send({ message: 'Your team has been modified!' }))
        .catch(err =>
            res.status(404).json({
                message:
                    'The data you are looking for could not be found. Please try again'
            }))
})

app.post('/user_weight', (req, res) => {
    myknex('user_weight').insert(req.body)
        .then(data => res.send({ message: 'weight updated' }))
        .catch(err =>
            res.status(404).json({
                message:
                    'The data you are looking for could not be found. Please try again'
            }))
});

app.patch('/user_weight/:id', (req, res) => {
    const { id } = req.params;
    myknex('user_weight')
        .where({ id: id })
        .update(req.body)
        .then(data => res.send({ message: 'weight updated' }))
        .catch(err =>
            res.status(404).json({
                message:
                    'The data you are looking for could not be found. Please try again'
            }))
});

app.post('/user_scores/', (req, res) => {
    myknex('user_scores').insert(req.body)
        .then(data => res.send({ message: 'scores updated' }))
        .catch(err =>
            res.status(404).json({
                message:
                    'The data you are looking for could not be found. Please try again'
            }))
});

app.patch('/user_scores/:id', (req, res) => {
    const { id } = req.params;
    myknex('user_scores')
        .where({ id: id })
        .update(req.body)
        .then(data => res.send({ message: 'scores updated' }))
        .catch(err =>
            res.status(404).json({
                message:
                    'The data you are looking for could not be found. Please try again'
            }))
});

app.patch('/member_info/:id', (req, res) => {
    const { id } = req.params;
    myknex('member_info')
        .where({ id: id })
        .update(req.body)
        .then(data => res.send({ message: 'info updated' }))
        .catch(err =>
            res.status(404).json({
                message:
                    'The data you are looking for could not be found. Please try again'
            }))
});

app.delete('/member_info/:id', (req, res) => {
    myknex('member_info')
        .where({ id: req.body.id })
        .del()
        .then(res.send('member deleted'))
})

app.listen(port, () => {
    console.log(`express and knex running at port: ${port}`);
});



export default app;