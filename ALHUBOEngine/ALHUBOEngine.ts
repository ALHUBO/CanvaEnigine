enum shape_type {
	none = "none",
	circle = "circle",
	rectangle = "rectangle",
	connection = "connection",
}

interface props_int {
	container?: string; //QuerySelector del contenedor
	canvas?: string; //id del canvas
	fps?: number; //frames por segundo de refresco
	bgc_1?: string; //color esquina inferior izquierda para degradado
	bgc_2?: string; //color esquina superior derecha para degradado
	grid?: boolean; //muestra grid
	width?: number; //si es mayor que 1 es pixeles | si esta entre 1 y 0 es porcentaje de pantalla
	height?: number;
}

interface coordenadas_int {
	x: number;
	y: number;
}

interface shapeId_int {
	type: shape_type;
	id: number;
}

interface properties_ctrl_int {
	fps: number; //fps convertido a milisegundos
	container: string;
}
interface properties_int {
	fps: number; //frames por segundo actual
	width: number;
	height: number;
	background: object;
	ctrl: properties_ctrl_int;
}
interface data_shapes_int {
	circles: object;
	rectangles: object;
}
interface data_int {
	shapes: data_shapes_int;
	nodes: object;
	connections: object;
}
interface ctrl_int {
	drag: boolean | shapeId_int;
	hilo: null | number;
	ctx: null | CanvasRenderingContext2D;
	selected: shapeId_int;
	mouse: coordenadas_int;
}
class ALHUBOEngine {
	canvas: string | HTMLCanvasElement | null = document.getElementById(
		"miCanvas"
	) as HTMLCanvasElement;
	properties: properties_int;
	data: data_int;
	ctrl: ctrl_int;
	constructor({
		container = "body", //QuerySelector del contenedor
		canvas = "ALHUBOEngine_canvas", //id del canvas
		fps = 60, //frames por segundo de refresco
		bgc_1 = "#69a100", //color esquina inferior izquierda para degradado
		bgc_2 = "#1c2b00", //color esquina superior derecha para degradado
		grid = true, //muestra grid
		width = 1, //si es mayor que 1 es pixeles | si esta entre 1 y 0 es porcentaje de pantalla
		height = 1,
	}: props_int) {
		this.canvas = canvas; //id canvas [Cuando esta detenido] | canvas [Cuando esta corriendo]
		this.properties = {
			//propiedades del engine
			fps: fps, //frames por segundo actual
			width: width,
			height: height,
			background: {
				//fondo del canvas
				color: {
					//colores para el degradado
					lvl0: bgc_1, //color esquina inferior izquierda para degradado
					lvl1: bgc_2, //color esquina superior derecha para degradado
				},
				grid: grid, //muestra grid?
			},
			ctrl: {
				//propiedades de control
				fps: 1000 / fps, //fps convertido a milisegundos
				container: container, //query delector del contenedor del engine
			},
		};
		this.data = {
			//conetenido del canvas
			shapes: {
				//formas simples
				circles: {},
				rectangles: {},
			},
			nodes: {},
			connections: {},
		};
		this.ctrl = {
			//variables de control
			drag: false, //esta arrastrando algo
			hilo: null, //hilo del engine
			ctx: null, //contexto 2d del canvas
			selected: { type: shape_type.none, id: -1 }, //
			mouse: {
				//ultimo click
				x: 0,
				y: 0,
			},
		};

		const self = this;
		console.log(this);
		window.addEventListener("resize", function () {
			self.resize();
		});
	}

	start() {
		const self = this;
		//no tiene que haber un hilo o el canvas creado
		if (
			self.ctrl.hilo === null &&
			typeof self.canvas == "string" &&
			!document.querySelector(`#${self.canvas}`)
		) {
			//crea el canvas
			const cnvs = document.createElement("canvas");
			cnvs.id = self.canvas;
			cnvs.width = 800;
			cnvs.height = 800;
			self.canvas = cnvs;
			document
				.querySelector(self.properties.ctrl.container)!
				.appendChild(cnvs);
			self.ctrl.ctx = self.canvas.getContext("2d");
			self.ctrl.ctx!.globalCompositeOperation = "source-over";

			//lo redimensiona
			self.resize();

			//eventos del mouse en el canvas
			self.canvas.addEventListener("mousedown", function (e) {
				var mouse = {
					x: e.clientX - self.canvas!.offsetLeft,
					y: e.clientY - self.canvas!.offsetTop,
				};

				let shape = self.clickShapes(mouse);

				if (shape.data.draggable) self.ctrl.drag = shape;

				if (typeof self.ctrl.drag == "object") {
					self.ctrl.selected.type = self.ctrl.drag.type;
					self.ctrl.selected.id = self.ctrl.drag.id;
				} else {
					self.ctrl.selected.type = shape_type.none;
					self.ctrl.selected.id = -1;
				}
				// if (
				// 	typeof self.ctrl.drag == "object" &&
				// 	self.ctrl.drag.k == "circle"
				// ) {
				// 	self.ctrl.mouse.x =
				// 		self.data.shapes.circles[self.ctrl.drag.id].x;
				// 	self.ctrl.mouse.y =
				// 		self.data.shapes.circles[self.ctrl.drag.id].y;
				// } else if (self.ctrl.drag.k == "circle") {
				// 	self.ctrl.mouse.x = mouse.x;
				// 	self.ctrl.mouse.y = mouse.y;
				// }
			});

			self.canvas.addEventListener("mousemove", function (e) {
				var mouse = {
					x: e.clientX - self.canvas!.offsetLeft,
					y: e.clientY - self.canvas!.offsetTop,
				};
				self.isClickeable(mouse);
				self.moveShape(mouse, self.ctrl.drag);
			});

			self.canvas.addEventListener("mouseup", function () {
				if (typeof self.ctrl.drag == "object") {
					self.ctrl.drag = false;

					if (
						typeof self.ctrl.drag == "object" &&
						self.ctrl.drag.type == shape_type.circle
					) {
						let circle =
							self.data.shapes.circles[self.ctrl.drag.id];
						circle.x = self.ctrl.mouse.x;
						circle.y = self.ctrl.mouse.y;
					}
				}
			});

			//inicia hilo de refresco
			self.ctrl.hilo = setInterval(() => {
				self.main();
			}, self.properties.ctrl.fps);
			console.log("Se inicio correctamente ALHUBOEngine.");
		} else console.log("ALHUBOEngine ya esta corriendo.");
	}

	resize() {}
	clickShapes(mouse: coordenadas_int) {}
	isClickeable(mouse: coordenadas_int) {}
	moveShape(mouse: coordenadas_int, shape: shapeId_int | boolean) {}
	main() {}
}

//window.ALHUBOEngine = ALHUBOEngine;
