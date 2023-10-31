const { Circle, Triangle, Square } = require("./shapes");

test("generateCircle should return SVG content for a circle", () => {
  const circle = new Circle("ABC", "red", "blue");
  const svgContent = circle.generateSVG();
  expect(svgContent).toContain("<circle");
  expect(svgContent).toContain("ABC");
  expect(svgContent).toContain('fill="blue"');
  expect(svgContent).toContain('fill="red"');
});

test("generateTriangle should return SVG content for a triangle", () => {
  const triangle = new Triangle("CBA", "green", "yellow");
  const svgContent = triangle.generateSVG();
  expect(svgContent).toContain("<polygon");
  expect(svgContent).toContain("CBA");
  expect(svgContent).toContain('fill="yellow"');
  expect(svgContent).toContain('fill="green"');
});

test("generateSquare should return SVG content for a square", () => {
  const square = new Square("XYZ", "purple", "orange");
  const svgContent = square.generateSVG();
  expect(svgContent).toContain("<rect");
  expect(svgContent).toContain("XYZ");
  expect(svgContent).toContain('fill="orange"');
  expect(svgContent).toContain('fill="purple"');
});
