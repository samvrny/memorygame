document.addEventListener('DOMContentLoaded', () => {
    
    //put game pictures and back in an array
    const pictures = [
        {
            name: 'blueorange',
            img: './images/blueorange.png'
        },
        {
            name: 'blueorange',
            img: './images/blueorange.png'
        },
        {
            name: 'eggs',
            img: './images/eggs.png'
        },
        {
            name: 'eggs',
            img: './images/eggs.png'
        },
        {
            name: 'monkeys',
            img: './images/monkeys.png'
        },
        {
            name: 'monkeys',
            img: './images/monkeys.png'
        },
        {
            name: 'rose',
            img: './images/rose.png'
        },
        {
            name: 'rose',
            img: './images/rose.png'
        },
        {
            name: 'leaves',
            img: './images/leaves.png'
        },
        {
            name: 'leaves',
            img: './images/leaves.png'
        },
        {
            name: 'hotballons',
            img: './images/hotballons.png'
        },
        {
            name: 'hotballons',
            img: './images/hotballons.png'
        }
    ]

    //make game board
    const gameBox = document.getElementById('grid')

    function loadGame() {
        for(let i = 0; i < pictures.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', 'images/blueback.png')
            card.setAttribute('data-id', i);
            // card.addEventListener('click', flipCard)
            gameBox.appendChild(card)
        }
    }

    //load the game
    loadGame();
})