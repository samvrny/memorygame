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

    pictures.sort(() => 0.5 - Math.random())

    //make game board, and get the scoreboards id
    const gameBox = document.getElementById('grid');
    const scoreDisplay = document.getElementById('result');

    //set arrays to save the players chosen cards to, so they can be checked for a match
    let chosenCards = [];
    let chosenCardsId = [];
    let wonCards = [];

    //loads up the initial game board
    function loadGame() {
        for(let i = 0; i < pictures.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', 'images/blueback.png')
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard)
            gameBox.appendChild(card)
        }
    }

    //checks if the two chosen cards are a match or not. If so, remove them from the board, and if not, place them back face down
    function checkMatch() {
        let cardsInQuestion = document.querySelectorAll('img');
        const cardOneId = chosenCardsId[0];
        const cardTwoId = chosenCardsId[1];
        if(chosenCards[0] === chosenCards[1]) {
            cardsInQuestion[cardOneId].setAttribute('src', 'images/bgwhite.png');
            cardsInQuestion[cardTwoId].setAttribute('src', 'images/bgwhite.png');
            cardsInQuestion[cardOneId].removeEventListener('click', flipCard)
            cardsInQuestion[cardTwoId].removeEventListener('click', flipCard)
            wonCards.push(chosenCards)
        } else {
            cardsInQuestion[cardOneId].setAttribute('src', 'images/blueback.png')
            cardsInQuestion[cardTwoId].setAttribute('src', 'images/blueback.png')
        }
        chosenCards = [];
        chosenCardsId = [];
        scoreDisplay.textContent = wonCards.length;
        if(wonCards.length === pictures.length / 2) {
            scoreDisplay.textContent = 'Hooray, you won!'
        }
    }

    //flip the card over when the player clicks on it
    function flipCard() {
        let cardId = this.getAttribute('data-id');
        chosenCards.push(pictures[cardId].name);
        chosenCardsId.push(cardId);
        this.setAttribute('src', pictures[cardId].img)

        if(chosenCards.length === 2) {
            setTimeout(checkMatch, 500)
        }
    }

    //call to load the game
    loadGame();
})