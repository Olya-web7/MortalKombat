// ## Task #0

const player1 = {
  name: "Panda",
  hp: 7,
  img: "beautiful panda",
  weapon: ["knife", "fork", "gun"],
  attack: function () {
    console.log(player1.name + "Fight...");
  },
};
console.log(player1.name + " Fight...");

// ## Task #1

function createPlayer(character, name, progressbar) {
  const $player1 = document.createElement("div");
  $player1.classList.add("player1");

  const $progressbar = document.createElement("div");
  $progressbar.classList.add("progressbar");
  $player1.appendChild($progressbar);

  const $life = document.createElement("div");
  $life.classList.add("life");
  $progressbar.appendChild($life);
  $life.style.width = "100%";

  const $name = document.createElement("div");
  $name.classList.add("name");
  $progressbar.appendChild($name);

  const $character = document.createElement("div");
  $character.classList.add("character");
  $player1.appendChild($character);

  const $p = document.createElement("p");
  $p.innerText = "Panda";

  const $img = document.createElement("img");
  $img.src = "http://reactmarathon-api.herokuapp.com/assets/liukang.gif";

  $character.appendChild($img);
  $name.appendChild($p);
}

// ## Task #2

createPlayer("player1", "Panda", 70);
createPlayer("player2", "Eagle", 90);

$arenas.appendChild($player1);
$arenas.appendChild($player2);

// ## Task #3 (*)

createPlayer('player1', player1 {name: "Panda",
hp: 7,
img: "beautiful panda"});
