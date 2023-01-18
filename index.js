document.addEventListener('DOMContentLoaded', () => {
    
    //put game pictures and back in an array
    const pictures = [
        {
            name: 'blueorange',
            img: 'images/blueorange.png'
        },
        {
            name: 'blueorange',
            img: 'images/blueorange.png'
        },
        {
            name: 'eggs',
            img: 'images/eggs.png'
        },
        {
            name: 'eggs',
            img: 'images/eggs.png'
        },
        {
            name: 'monkeys',
            img: 'images/monkeys.png'
        },
        {
            name: 'monkeys',
            img: 'images/monkeys.png'
        },
        {
            name: 'rose',
            img: 'images/rose.png'
        },
        {
            name: 'rose',
            img: 'images/rose.png'
        },
        {
            name: 'leaves',
            img: 'images/leaves.png'
        },
        {
            name: 'leaves',
            img: 'images/leaves.png'
        },
        {
            name: 'hotballoons',
            img: 'images/hotballoons.png'
        },
        {
            name: 'hotballoons',
            img: 'images/hotballoons.png'
        }
    ]

    //make game board
    const gameBox = document.getElementById('grid')
    let chosenCards = [];
    let chosenCardsId = [];
    let wonCards = [];

    function loadGame() {
        for(let i = 0; i < pictures.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', 'images/blueback.png')
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard)
            gameBox.appendChild(card)
        }
    }

    function checkMatch() {
        let cardsInQuestion = document.querySelectorAll('img');
        const cardOneId = chosenCardsId[0];
        const cardTwoId = chosenCardsId[1];
        if(chosenCards[0] === chosenCards[1]) {
            console.log('MATCH BIATCH!!')
            cardsInQuestion[cardOneId].removeAttribute('src');
            cardsInQuestion[cardTwoId].removeAttribute('src');
            wonCards.push(chosenCards)
        } else {
            cardsInQuestion[cardOneId].setAttribute('src', 'images/blueback.png')
            cardsInQuestion[cardTwoId].setAttribute('src', 'images/blueback.png')
        }
        chosenCards = [];
        chosenCardsId = [];
    }

    function flipCard() {
        let cardId = this.getAttribute('data-id');
        chosenCards.push(pictures[cardId].name);
        chosenCardsId.push(cardId);
        this.setAttribute('src', pictures[cardId].img)

        if(chosenCards.length === 2) {
            setTimeout(checkMatch, 750)
        }
    }

    //load the game
    loadGame();
})