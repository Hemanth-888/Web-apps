const mainDiv=document.getElementById("memory-game")

let cards=[
  {id:1,image: "./asset/dog.avif",},
  {id:2,image: "./asset/cat.jpg",},
  {id:3,image: "./asset/hamster.jpg",},
  {id:4,image: "./asset/rabbit.jpg",},
  {id:5,image: "./asset/cat.jpg",},
  {id:6,image: "./asset/hamster.jpg",},
  {id:7,image: "./asset/dog.avif",},
  {id:8,image: "./asset/rabbit.jpg",},
];
let flippedCards=[];
let matched=0;

function createCard(id,image){
  const card=document.createElement('div')
  card.classList.add('card')
  //createed div elemnt containg classname=card
  const cardFront=document.createElement('div')
  const cardBack=document.createElement('div')
  // cardFront.style.backgroundImage=`url('./asset/front.jpg')`
  cardFront.textContent='🐶'
  cardBack.style.backgroundImage=`url(${image})`

  card.append(cardFront,cardBack)
  card.addEventListener('click',()=>
    {
    flipCard(card,id);
  })
  return card;

}
cards.forEach((c)=>
{
  mainDiv.appendChild(createCard(c.id,c.image))

})

function resetCards() {
  cards.forEach(card => {
      card.classList.remove('flipped', 'matched');
  });
}

let flipCard=(card,id)=>{
  // if(flippedCards.length<2)
  // {
  //   card.classList.add('flip')
  //   flippedCards.push({card,id})
  // }

  if (flippedCards.length === 2 || card.classList.contains('flipped') || card.classList.contains('matched')) {
    return;
}

card.classList.add('flipped');
card.textContent = cardValue;
flippedCards.push({ card, cardValue });

if (flippedCards.length === 2) {
    checkMatch();
}


}

function checkMatch() {
  const [firstCard, secondCard] = flippedCards;

  if (firstCard.cardValue === secondCard.cardValue) {
      firstCard.card.classList.add('matched');
      secondCard.card.classList.add('matched');
      matched += 2;
  }

  setTimeout(() => {
      resetCards();
      flippedCards = [];
      if (matched === cards.length) {
          alert('You win!');
      }
  }, 1000);
}


createCard();