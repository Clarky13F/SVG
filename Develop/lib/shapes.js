class Shape {

  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }

  setText(newText) {
    this.text = newText;
  }

  setColor(textColor, shapeColor) {
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }

  render() { }
}

class Circle extends Shape {
  render() {
    return `
        <circle cx="200" cy="150" r="85" fill="${this.shapeColor}" />
        <text x="200" y="160" font-size="72" fill="${this.textColor}" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
    `;
  }
}

class Triangle extends Shape {
  render() {
    return `
      <polygon points="200,40 350,260 50,260" fill="${this.shapeColor}" />
      <text x="200" y="200" font-size="72" fill="${this.textColor}" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
    `;
  }
}

class Square extends Shape {
  render() {
    return `
      <rect x="100" y="60" width="200" height="200" fill="${this.shapeColor}" />
      <text x="200" y="160" font-size="72" fill="${this.textColor}" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
    `;
  }
}

module.exports = { Circle, Triangle, Square };