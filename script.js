const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const newgame = document.querySelector("button");
const game = document.getElementById("game");
let playerlives = 6;
let gameover = "Game Over";
game.classList.add("gameover");

playerLivesCount.textContent = playerlives;

const getData = () => [
  { imgSrc: "./img/img1.jpg", name: "img1.shelby" },
  { imgSrc: "./img/img2.png", name: "img2.micky" },
  { imgSrc: "./img/img3.PNG", name: "img3.rick" },
  { imgSrc: "./img/img4.jpg", name: "img4.love" },
  { imgSrc: "./img/img5.jpg", name: "img5.morty" },
  { imgSrc: "./img/img6.PNG", name: "img6.monkey" },
  { imgSrc: "./img/img7.JPG", name: "img7.ricky" },
  { imgSrc: "./img/img8.jpg", name: "img8.gold" },
  { imgSrc: "./img/img1.jpg", name: "img1.shelby" },
  { imgSrc: "./img/img2.png", name: "img2.micky" },
  { imgSrc: "./img/img3.PNG", name: "img3.rick" },
  { imgSrc: "./img/img4.jpg", name: "img4.love" },
  { imgSrc: "./img/img5.jpg", name: "img5.morty" },
  { imgSrc: "./img/img6.PNG", name: "img6.monkey" },
  { imgSrc: "./img/img7.JPG", name: "img7.ricky" },
  { imgSrc: "./img/img8.jpg", name: "img8.gold" },
];

const randomize = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

const cardGen = () => {
  const cardData = randomize();

  cardData.forEach((item) => {
    const card = document.createElement("div");
    const back = document.createElement("div");
    const face = document.createElement("img");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";

    face.src = item.imgSrc;
    card.setAttribute("name", item.name);
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);
    
    card.addEventListener("click", (e) => {
      card.classList.toggle("toggleCard");
      game.textContent = "";
      checkCard(e);
      newgame.addEventListener('click', restart)
    });
  });
};

const checkCard = (e) => {
  const clickedCard = e.target;
  clickedCard.classList.add("flipped");
  const flippedCrads = document.querySelectorAll(".flipped");

  if (flippedCrads.length === 2) {
    if (
      flippedCrads[0].getAttribute("name") ===
      flippedCrads[1].getAttribute("name")
    ) {
      console.log("match");
      flippedCrads.forEach((card) => {
        card.classList.remove("flipped");
        card.style.pointerEvent = "none";
      });
    } else {
      console.log("wrong");
      flippedCrads.forEach((card) => {
        card.classList.remove("flipped");
        setTimeout(() => {
          card.classList.remove("toggleCard");
        }, 1000);
      });
      playerlives--;
      playerLivesCount.textContent = playerlives;
      if (playerlives === 0) {
        game.textContent = gameover;
        restart();
        
      }
    }
  }
};

const restart = () => {
  let cardData = randomize();
  let faces = document.querySelectorAll(".face");
  let cards = document.querySelectorAll(".card");
  section.style.pointerEvent='none'
  cardData.forEach((item, index) => {
    cards[index].classList.remove("toggleCard");
    setTimeout(() => {
      cards[index].style.pointerEvent = "all";
      faces[index].src = item.imgSrc;
      cards[index].setAttribute("name", item.name);
      section.style.pointerEvent='all'
    }, 1000);
  });
  playerlives = 6;
  playerLivesCount.textContent = playerlives;
};

cardGen();
