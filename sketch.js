//maak variabelen aan
let targets = [];
let interval;
let counter = 0;
let score;
let button;
let windowWidth;
let windowHeight;
let started = false;
//
function setup() {
	//dit laat de scherm zien van het spelletje
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
  	createCanvas(windowWidth, windowHeight);

  	//startknop, puntenteller en puntenverberger
	button = createButton('start');
	score = createP(counter);
	score.hide();
}
//hier word bepaalt waar en dat de balletjes komen.
function timeIt() {
	let x = random(width);
	let y = random(height);
	let target = new Target(x, y, 35);
	targets.push(target);
}
//als er word geklikt met de muis wordt deze functie uitgevoerd.
function mouseClicked() {
	if (started === false) {
		startGame();
	} else {
        let found = false;
        for (let i = targets.length - 1; i >= 0; i--) {
            if (targets[i].contains(mouseX, mouseY)) {
                found = true;
                targets.splice(i, 1);
                counter = counter + 1;
                break;
            }
        }
        if (!found) {
            counter = counter - 10;
        }
    }
}

//dit is een functie die word uitgevoerd als je de game hebt gestart.
function startGame() {
    counter = 0;
    started = true;
    interval = setInterval(timeIt, 500);
    button.hide();
    score.show();
}

//dit is een functie die de website opnieuw laadt als je hebt verloren.
function stopGame() {
	location.reload();
}

//dit is een functie die de aantal ballen telt. Als het meer als 6 is heb je verloren en wordt de pagina gereload. Ook kan je hier de achtergrond kleur wijzigen.
function draw() {
	background(0, 0, 255);
	if (counter >= 0 && targets.length >= 0 && targets.length <= 6) {
		for (let i = 0; i < targets.length; i++) {
			targets[i].show();
		}
	} else {
		stopGame();
	}
	score.html(counter);
} 
