class P {
	constructor(pl) {
		this.pl = pl;
	}
	
	d() {
		console.log("baja boligrafo")
	}
	u() {
		console.log("levanta boligrafo")
	}
	
	w(n) {
		n = n || 1;
		console.log("dibuja hacia el oeste ", n);
	}
	n(n) {
		n = n || 1;
		console.log("dibuja hacia el noreste ", n);
	}
	e(n) {
		n = n || 1;
		console.log("dibuja hacia el este ", n);
	}
	s(n) {
		n = n || 1;
		console.log("dibuja hacia el sur ", n);
	}
}

new P(2).d().w().n().e().s().u()