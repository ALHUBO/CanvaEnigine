export class Shape {
    //!-------------[ Posición ]--------------
    x; //posicion x
    y; //posicion y
    properties;
    control;
    constructor({ x = 0, //posicion x
    y = 0, //posicion y
    background = true, backgroundColor1 = "rgba(0, 0, 0, 0.5)", backgroundColor2 = "rgba(0, 0, 0, 0.1)", backgroundDirection = 3, border = false, borderColor = "#030106", borderStyle = 0, borderWidth = 2, shadow = false, //shadow
    shadowColor = "rgba(0, 0, 0, 0.5)", shadowOffsetX = 5, shadowOffsetY = 5, shadowBlur = 10, draggable = false, //draggable
    cursorStyle = "default", //pointer
    clickable = false, inputable = false, highlightable = false, //highlightable
    highlight = false, highlightBackground = false, highlightBackgroundColor1 = "rgba(0, 0, 0, 0.7)", highlightBackgroundColor2 = "rgba(0, 0, 0, 0.7)", highlightBackgroundDirection = 3, highlightBorder = true, highlightBorderColor = "#f8a200", highlightBorderStyle = 0, highlightBorderWidth = 2, highlightShadow = true, highlightShadowBlur = 10, highlightShadowColor = "#f8a20047", highlightShadowOffsetX = 5, highlightShadowOffsetY = 5, disabeld = false, disabeldBackground = true, disabeldBackgroundColor1 = "rgba(150, 150, 150, 0.3)", disabeldBackgroundColor2 = "rgba(150, 150, 150, 0.3)", disabeldBackgroundDirection = 3, disabeldBorder = true, disabeldBorderColor = "#cecece", disabeldBorderStyle = 0, disabeldBorderWidth = 2, disabeldShadow = true, disabeldShadowBlur = 10, disabeldShadowColor = "rgba(150, 150, 150, 0.3)", disabeldShadowOffsetX = 5, disabeldShadowOffsetY = 5, connectOffsetX = 0, connectOffsetY = 0, }) {
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
