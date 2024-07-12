import { Shape } from "./Shape.js";
class Circle extends Shape {
	radio;
	constructor({ radio = 0, ...props }) {
		super(props);
		this.radio = radio;
		console.log(this);
	}
	methodo() {}
}
var a = new Circle({});
