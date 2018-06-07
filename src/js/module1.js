class Module1 {
	constructor() {
		this.contents = "Module 1 data";
	}

	get data() {
		return this.contents;
	}
}

module.exports = Module1;