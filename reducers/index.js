let hardCodedDecks = {
    '94gwknx0otqx9y5hhlsct': {
        title: 'Star Wars',
        id: '94gwknx0otqx9y5hhlsct',
        cards: [
            {
                question: 'Who composed the main Star Wars theme?',
                answer: 'John Williams',
            },
            {
                question: 'What is Chewbacca’s weapon of choice?',
                answer: 'Bowcaster',
            },
            {
                question: 'Who is Rey’s grandfather?',
                answer: 'Emperor Palpatine',
            },
        ],
    },
    k5e65lzj9tghyotx9mi9: {
        title: 'Halo',
        id: 'k5e65lzj9tghyotx9mi9',
        cards: [
            {
                question: 'Who built the Halo devices?',
                answer: 'The Forerunners',
            },
            {
                question: "What is Master Chief's real name",
                answer: 'Jhon ',
            },
            {
                question: 'What is Installation 00 better known as?',
                answer: 'The Ark',
            },
            {
                question: "What are Master Chief's final words in Halo 3",
                answer: 'Wake me when you need me',
            },
        ],
    },
};

const decks = (state = hardCodedDecks, action) => {
    console.log('reducer called');
    switch (action.type) {
        case 'ADD_DECK':
            state[action.deck.id] = action.deck;
            return Object.assign({}, state);
        case 'DELETE_DECK':
            delete state[action.id];
            return Object.assign({}, state);
        case 'ADD_CARD':
            console.log('add should be added !!!!!');
            state[action.deck].cards.push(action.card);
            return Object.assign({}, state);
        case 'REMOVE_CARD':
            console.log(
                'card in index ',
                action.id,
                ' should be deleted from deck:',
                action.deck
            );
            state[action.deck].cards.splice(action.id, 1);
            return Object.assign({}, state);

        default:
            return state;
    }
};

export default decks;
