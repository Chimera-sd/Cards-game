const cards = document.querySelectorAll('.card');
// variables
let flibbedCard = false,
    firstCard,
    secondCard,
    lockBoard = false;
function flipped() {
    if(lockBoard) return;
    this.classList.toggle('flip');
    if(!flibbedCard){
        // first card
        flibbedCard = true;
        firstCard = this;
        return;
    }
    //second card
    flibbedCard = false;
    secondCard = this;
    //match
    checkForMatch();    
}    
function checkForMatch(){
    //match
    let match =firstCard.dataset.card === secondCard.dataset.card; 
    match ? diableCards () : unFlipCards();
}
function diableCards (){
    firstCard.removeEventListener('click',flipped);
    secondCard.removeEventListener('click',flipped);
}
function unFlipCards(){
    /*  to defened the logical bug 
    if more than two cards is clicked */
    lockBoard = true;
    setTimeout(() =>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    },1500);
    
}
function resetBoard(){
    [flibbedCard , lockBoard]=[false , false];
    [firstCard , secondCard]=[null,null];
}
(function arrang(){
    cards.forEach(card =>{
        let number = Math.floor(Math.random()*20);
        card.style.order = number ;
    })
})();

cards.forEach(card => card.addEventListener('click',flipped));