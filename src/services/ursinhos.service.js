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
        nome: 'Wish Bear',
        descricao:
        'This light teal bear, with a shooting star symbol on its belly badge, is actually a girl. She likes to help make everyone’s wishes come true. She also has to make it clear that sometimes the only way to make your wishes come true is by hard work. Her best friend is a wishing star called Twinkler.',
        preco: 20.0,
    },
    {
        id: 3,
        nome: 'Cheer Bear',
        descricao:
        'This girl is one very happy, jolly bear. If somebody is feeling down Cheer Bear will help to try and cheer them up. She is carnation pink with a rainbow symbol on her tummy.',
        preco: 30.0,

        id: 4,
        nome: 'Birthday Bear',
        descricao:
        'This yellow, furry bear wants everybody to have a happy birthday. Birthday Bear just loves to play games, and he goes to lots of parties. He has a pink cupcake as his belly badge.',
        preco: 40.0,

        id: 5,
        nome: 'Tenderheart Bear',
        descricao:
        'Tenderheart is a male bear, who was often thought of as the face of the franchise. In the 1980s Care Bear films he was the leader of the other bears too. His original colour is brown, but later on he became orange. On his belly is a big red heart. He is also sometimes considered as the ‘evil-looking bear, with his cute but frowning eyes. Tenderheart Bear likes to help others show and express their feelings, and always encourages people to be as caring as possible.',
        preco: 50.0,

        id: 6,
        nome: 'Good Luck Bear',
        descricao:
        'This male bear likes to spread good luck wherever he goes. With his green fur and lucky green leaf clover as his belly badge, he tries to bring luck to everybody. In his first appearance on the TV programme, he spoke with an Irish accent. This later changed to an American accent, before reverting back to an Irish one again! Maybe we should call him Confused Bear…',
        preco: 60.0,

        id: 7,
        nome: 'Grumpy Bear',
        descricao:
        'Naturally, this bear is a man! He has indigo blue fur and a huge rain cloud on his belly. Grumpy Bear is rarely happy, but he teaches people that it’s ok to be grumpy from time to time – just don’t let your grumpiness go too far. This cuddly male bear does truly value all of his friendships, and occasionally he smiles too!',
        preco: 70.0,

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
