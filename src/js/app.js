// import Module1 from "./Module1";
// import Module2 from "./Module2";

// const m1Instance = new Module1();
// const m2Instance = new Module2();

// console.log("M1 text is -- ", m1Instance.data);
// console.log("M2 text is -- ", m2Instance.data);

import style from "../css/style.scss";
import Module1 from "./Module1";

const module1 = new Module1();

document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('select[id="textDropdown"]').onchange=changeEventHandler;
    updateTextContents("1");
},false);

function changeEventHandler(event) {
	const selectedValue = event.target.value;
	updateTextContents(selectedValue);
}

function updateTextContents(selectedValue){
	const textAreaElement = document.getElementById("textContents");
	let data;
	switch (selectedValue) {
		case "1":
			data = module1.data;
			break;
		case "2":
			data = require("./Module2");
			break;
		case "3":
			data = require("./Module3").data;
			break;
	}
	textAreaElement.value = data;
}
