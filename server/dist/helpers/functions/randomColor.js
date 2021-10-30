"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomColor = void 0;
const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};
exports.getRandomColor = getRandomColor;
//# sourceMappingURL=randomColor.js.map