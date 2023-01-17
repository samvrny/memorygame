document.addEventListener('DOMContentLoaded', () => {
    
    //put game pictures and back in an array
    const pictures = [
        {
            name: 'blueorange',
            img: require('./images/blueorange.png')
        },
        {
            name: 'eggs',
            img: require('./images/eggs.png')
        },
        {
            name: 'monkeys',
            img: require('./images/monkeys.png')
        },
        {
            name: 'rose',
            img: require('./images/rose.png')
        },
        {
            name: 'leaves',
            img: require('./images/leaves.png')
        },
        {
            name: 'hotballons',
            img: require('./images/hotballons.png')
        }
        // {
        //     //picture back image
        //     name: 'blueback',
        //     img: require('./images/blueback.png')
        // }
    ]

    //make game board
    const gameBox = document.querySelector('.grid')

    function loadGame() {
        for(let i = 0; i < pictures.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('data-id', i);
            // card.addEventListener('click', flipcard)
            gameBox.appendChild(card)
        }
    }
})