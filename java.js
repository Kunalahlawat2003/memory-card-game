const cards = document.querySelectorAll(".card");

let matchedcard = 0;
let cardOne, cardTwo;
let disableDeck = false;

function flipcard(e) {
    let clickedcard = e.target;
    if(clickedcard !== cardOne && !disableDeck){
    clickedcard.classList.add("flip");
    var clickaudio = document.getElementById('select');
        clickaudio.play();

    if(!cardOne){
        return cardOne=clickedcard;
    }
    cardTwo=clickedcard;
    disableDeck=true;
    let cardOneImg = cardOne.querySelector("img").src,
    cardTwoImg = cardTwo.querySelector("img").src;
    matchCards(cardOneImg, cardTwoImg);
}
}

function matchCards(img1, img2){
    if(img1==img2){
        matchedcard++;
        var matchAudio = document.getElementById('match');
        matchAudio.play();


        if (matchedcard == 8){
            setTimeout(() => {
                return shuffle();
            }, 1000);
            
            var audio = document.getElementById('myAudio');
            audio.play();

            var end = Date.now() + (2 * 1000);

// go Buckeyes!
var colors = ['#f83a63', '#0bd5be', '#4f2e8c'];

(function frame() {
  confetti({
    particleCount: 3,
    angle: 60,
    spread: 45,
    origin: { x: 0 },
    colors: colors
  });
  confetti({
    particleCount: 3,
    angle: 120,
    spread: 45,
    origin: { x: 1 },
    colors: colors
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
}());

        }

        cardOne.removeEventListener("click", flipcard);
        cardTwo.removeEventListener("click", flipcard);
        cardOne=cardTwo = "";
        return disableDeck = false;
    }
   
    setTimeout(()=> {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");

        var nonmatch = document.getElementById('nonmatch');
            nonmatch.play();
    }, 400);

    setTimeout(()=> {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne=cardTwo = "";
        disableDeck = false;
    }, 1200);
}

function shuffle() {
    matchedcard = 0;
    cardOne = cardTwo = "";
    disableDeck = false;
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.sort(() => Math.random() > 0.5 ? 1: -1);
    cards.forEach((card, index) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector("img");
        imgTag.src = `img/img-${arr[index]}.png`;
        card.addEventListener("click", flipcard);
    });
}

shuffle();

cards.forEach(card => {
    card.addEventListener("click", flipcard);
});

document.addEventListener('DOMContentLoaded', function() {
    // Get reference to the nav-brand link
    var navBrandLink = document.querySelector('.nav-brand');

    // Get reference to the credit card element by its ID
    var creditCard = document.getElementById('credit');

    // Add click event listener to the nav-brand link
    navBrandLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior (optional)

        // Toggle the visibility of the credit card
        creditCard.classList.toggle('show');
    });

    // Optional: Close credit card on click outside
    document.addEventListener('click', function(event) {
        if (!creditCard.contains(event.target) && event.target !== navBrandLink) {
            creditCard.classList.remove('show');
        }
    });

});
