// Basic Formulas

// perimeter y area de un quadrilateral 
// quadrilateral regular
console.group('Square');
const squareSide = 5;
const squarePerimeter = squareSide * 4;
const squareArea = squareSide * squareSide;

console.log ({
    squareSide,
    squarePerimeter,
    squareArea,
});

function calculateSquare(squareSide) {
    return {
        squarePerimeter: squareSide * 4,
        squareArea: squareSide * squareSide
    };
}
console.groupEnd('Square');

// triangle regular 
console.group('Triangle');
const triangleSide = 6;
const triangleHeight = ((triangleSide/2) *(3^(1/2)));
const trianglePerimeter = triangleSide * 3;
const triangleArea = (triangleSide * triangleHeight)/2;

console.log ({
    triangleSide,
    triangleHeight,
    trianglePerimeter,
    triangleArea, 
})

function calculateTriangle(triangleSide1, triangleSide2, triangleBase, triangleHeight) {
    return {
        trianglePerimeter: triangleSide1 + triangleSide2 + triangleBase,
        trianglePerimeter: (triangleBase * triangleHeight) / 2,
    };
}
console.groupEnd('Triangle');