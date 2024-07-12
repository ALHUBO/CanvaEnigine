export interface Datos {
	//!-------------[ Posición ]--------------
	x?: number; //posicion x
	y?: number; //posicion y

	//!--------------[ BackGround ]-------------------
	background?: boolean;
	backgroundColor1?: string;
	backgroundColor2?: string;
	backgroundDirection?: number;

	//!------------------[ Border ]----------------------
	border?: boolean;
	borderColor?: string;
	borderStyle?: number;
	borderWidth?: number;

	//!------------------[ Shadow ]----------------------
	shadow?: boolean; //shadow
	shadowColor?: string;
	shadowOffsetX?: number;
	shadowOffsetY?: number;
	shadowBlur?: number;

	//!-----------------[ Tipo ]-----------------------
	draggable?: boolean; //draggable
	clickable?: boolean;
	inputable?: boolean;

	//!---------------[ No se ]---------------
	cursorStyle?: string; //pointer

	//!-----------------[ Highlight ]-------------------------
	highlightable?: boolean; //highlightable
	highlight?: boolean;
	//TODO-------------[ Backgorund ]------------------
	highlightBackground?: boolean;
	highlightBackgroundColor1?: string;
	highlightBackgroundColor2?: string;
	highlightBackgroundDirection?: number;
	//TODO-------------[ Border ]------------------
	highlightBorder?: boolean;
	highlightBorderColor?: string;
	highlightBorderStyle?: number;
	highlightBorderWidth?: number;
	//TODO-------------[ Shadow ]------------------
	highlightShadow?: boolean;
	highlightShadowBlur?: number;
	highlightShadowColor?: string;
	highlightShadowOffsetX?: number;
	highlightShadowOffsetY?: number;

	//!----------------[ Disabled ]--------------------
	disabeld?: boolean;
	//TODO-------------[ Backgorund ]------------------
	disabeldBackground?: boolean;
	disabeldBackgroundColor1?: string;
	disabeldBackgroundColor2?: string;
	disabeldBackgroundDirection?: number;
	//TODO-------------[ Border ]------------------
	disabeldBorder?: boolean;
	disabeldBorderColor?: string;
	disabeldBorderStyle?: number;
	disabeldBorderWidth?: number;
	//TODO-------------[ Shadow ]------------------
	disabeldShadow?: boolean;
	disabeldShadowBlur?: number;
	disabeldShadowColor?: string;
	disabeldShadowOffsetX?: number;
	disabeldShadowOffsetY?: number;

	//!-------------[ Coneccions ]-------------------
	connectOffsetX?: number;
	connectOffsetY?: number;
}

export class Shape {
	//!-------------[ Posición ]--------------
	x: number; //posicion x
	y: number; //posicion y

	properties: object;
	control: object;

	constructor({
		x = 0, //posicion x
		y = 0, //posicion y
		background = true,
		backgroundColor1 = "rgba(0, 0, 0, 0.5)",
		backgroundColor2 = "rgba(0, 0, 0, 0.1)",
		backgroundDirection = 3,
		border = false,
		borderColor = "#030106",
		borderStyle = 0,
		borderWidth = 2,
		shadow = false, //shadow
		shadowColor = "rgba(0, 0, 0, 0.5)",
		shadowOffsetX = 5,
		shadowOffsetY = 5,
		shadowBlur = 10,
		draggable = false, //draggable
		cursorStyle = "default", //pointer
		clickable = false,
		inputable = false,
		highlightable = false, //highlightable
		highlight = false,
		highlightBackground = false,
		highlightBackgroundColor1 = "rgba(0, 0, 0, 0.7)",
		highlightBackgroundColor2 = "rgba(0, 0, 0, 0.7)",
		highlightBackgroundDirection = 3,
		highlightBorder = true,
		highlightBorderColor = "#f8a200",
		highlightBorderStyle = 0,
		highlightBorderWidth = 2,
		highlightShadow = true,
		highlightShadowBlur = 10,
		highlightShadowColor = "#f8a20047",
		highlightShadowOffsetX = 5,
		highlightShadowOffsetY = 5,
		disabeld = false,
		disabeldBackground = true,
		disabeldBackgroundColor1 = "rgba(150, 150, 150, 0.3)",
		disabeldBackgroundColor2 = "rgba(150, 150, 150, 0.3)",
		disabeldBackgroundDirection = 3,
		disabeldBorder = true,
		disabeldBorderColor = "#cecece",
		disabeldBorderStyle = 0,
		disabeldBorderWidth = 2,
		disabeldShadow = true,
		disabeldShadowBlur = 10,
		disabeldShadowColor = "rgba(150, 150, 150, 0.3)",
		disabeldShadowOffsetX = 5,
		disabeldShadowOffsetY = 5,
		connectOffsetX = 0,
		connectOffsetY = 0,
	}: Datos) {
		this.x = x;
		this.y = y;
		this.properties = {
			background: {
				active: background,
				grad1: backgroundColor1,
				grad2: backgroundColor2,
				direction: backgroundDirection,
			},
			border: {
				ative: border,
				color: borderColor,
				style: borderStyle,
				width: borderWidth,
			},
			shadow: {
				active: shadow,
				blur: shadowBlur,
				color: shadowColor,
				offset: {
					x: shadowOffsetX,
					y: shadowOffsetY,
				},
			},
		};
		this.control = {
			connection: {
				offset: {
					x: connectOffsetX,
					y: connectOffsetY,
				},
			},
			childrens: {},
			tipo: {
				draggable: draggable,
				clickable: clickable,
				inputable: inputable,
			},

			highlightable: {
				enable: highlightable,
				active: highlight,
				properties: {
					background: {
						active: highlightBackground,
						grad1: highlightBackgroundColor1,
						grad2: highlightBackgroundColor2,
						direction: highlightBackgroundDirection,
					},
					border: {
						ative: highlightBorder,
						color: highlightBorderColor,
						style: highlightBorderStyle,
						width: highlightBorderWidth,
					},
					shadow: {
						active: highlightShadow,
						blur: highlightShadowBlur,
						color: highlightShadowColor,
						offset: {
							x: highlightShadowOffsetX,
							y: highlightShadowOffsetY,
						},
					},
				},
			},
			disabled: {
				active: disabeld,
				properties: {
					background: {
						active: disabeldBackground,
						grad1: disabeldBackgroundColor1,
						grad2: disabeldBackgroundColor2,
						direction: disabeldBackgroundDirection,
					},
					border: {
						ative: disabeldBorder,
						color: disabeldBorderColor,
						style: disabeldBorderStyle,
						width: disabeldBorderWidth,
					},
					shadow: {
						active: disabeldShadow,
						blur: disabeldShadowBlur,
						color: disabeldShadowColor,
						offset: {
							x: disabeldShadowOffsetX,
							y: disabeldShadowOffsetY,
						},
					},
				},
			},
			cursorStyle: cursorStyle,
		};
	}
}
