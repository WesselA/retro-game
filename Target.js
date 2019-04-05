//dit spawnt de balletjes.
class Target {
	constructor(x, y, r) {
		this.x = x;
		this.y = y;
		this.r = r;
	}
	//dit zorgt ervoor dat als je op de balletjes klikt ze ook daadwerkelijk een functie hebben.
	contains(x, y) {
		let d = dist(x, y, this.x, this.y);
		return d < this.r;
	}
	//laat de balletjes zien.
	show() {
		fill(255);
        ellipse(this.x, this.y, this.r*2)
	}
}

