const ursinhos = [
    {
        id: 1,
        nome: 'Bedtime Bear ',
        descricao:
        'Bedtime Bear is a male bear. He’s always very sleepy and often talks with a yawning, sleepy voice. He likes to help everyone get a good night’s sleep, and wishes everyone sweet dreams. He has aqua blue fur and his belly badge is a blue moon with a star.',
        preco: 100.0,
    },
    {
        id: 2,
        sabor: 'Wish Bear',
        descricao:
        'This light teal bear, with a shooting star symbol on its belly badge, is actually a girl. She likes to help make everyone’s wishes come true. She also has to make it clear that sometimes the only way to make your wishes come true is by hard work. Her best friend is a wishing star called Twinkler.',
        preco: 80.0,
    },
    {
        id: 3,
        sabor: 'Cheer Bear',
        descricao:
        'This girl is one very happy, jolly bear. If somebody is feeling down Cheer Bear will help to try and cheer them up. She is carnation pink with a rainbow symbol on her tummy.',
        preco: 7.0,
    },
];

const findUrsinhosService = () => {
    return ursinhos;
};

const findUrsinhosByIdService = (id) => {
    return ursinhos.find((ursinhos) => ursinhos.id == id);
};

const findUrsinhosByValorService = (valor) => {
    return ursinhos.filter((ursinhos) => ursinhos.preco <= valor);
};
const addUrsinhosService = (ursinhos) =>{
    ursinhos.push(ursinhos);
    return 'ok';
};

const updateUrsinhosService = (id, ursinhosEdited) => {
    ursinhosEdited['id'] = id;
    const ursinhosIndex = ursinhos.findIndex((ursinhos) => ursinhos.id == id);
    ursinhos[ursinhosIndex] = ursinhosEdited;
    return ursinhosEdited;
};

const deleteUrsinhosService = (id) => {
    const ursinhosIndex = ursinhos.findIndex((ursinhos) => ursinhos.id == id);
    return ursinhos.splice(ursinhosIndex, 1);
};

module.exports = {
    findUrsinhosService,
    findUrsinhosByIdService,
    findUrsinhosByValorService,
    addUrsinhosService,
    updateUrsinhosService,
    deleteUrsinhosService
};
