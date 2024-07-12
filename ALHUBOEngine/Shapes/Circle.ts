import { Shape, Datos } from "./Shape";

interface Circle_data extends Datos {
	radio?: number; //radio
}

class Circle extends Shape {
	radio: number;
	constructor({ radio = 0, ...props }: Circle_data) {
		super(props);
		this.radio = radio;
		console.log(this);
	}

	methodo() {}
}

var a = new Circle({});
