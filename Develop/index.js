const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes");
const { getLogoInput } = require("./lib/user_input");

async function generateLogo() {
  const answers = await getLogoInput();
  const { text, textColor, shape, shapeColor } = answers;

  let shapeObject;
  if (shape === "circle") {
    shapeObject = new Circle(text, textColor, shapeColor);
  } else if (shape === "triangle") {
    shapeObject = new Triangle(text, textColor, shapeColor);
  } else if (shape === "square") {
    shapeObject = new Square(text, textColor, shapeColor);
  }

  const svgContent = `
    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
      ${shapeObject.generateSVG()}
    </svg>
  `;

  fs.writeFile("./examples/logo.svg", svgContent, (err) => {
    if (err) {
      console.error("Error creating logo.svg:", err);
    } else {
      console.log("Generated logo.svg");
    }
  });
}

generateLogo();
