const express = require('express');
const port = 3000;
const app = express();

    app.use(express.json());
    const ursinhos = [
        {
            id: 1,
            nome: 'Bedtime Bear ',
            descricao:
            'Bedtime Bear is a male bear. He’s always very sleepy and often talks with a yawning, sleepy voice. He likes to help everyone get a good night’s sleep, and wishes everyone sweet dreams. He has aqua blue fur and his belly badge is a blue moon with a star.',
            //foto:''
            preco: 100.0,
        },
        {
            id: 2,
            nome: 'Wish Bear',
            descricao:
            'This light teal bear, with a shooting star symbol on its belly badge, is actually a girl. She likes to help make everyone’s wishes come true. She also has to make it clear that sometimes the only way to make your wishes come true is by hard work. Her best friend is a wishing star called Twinkler.',
            preco: 20.0,
        },
    ];
    app.get('ursinhos/all-ursinhos', (req, res) => {
        res.send(ursinhos);
    });

    app.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}`);
    });
