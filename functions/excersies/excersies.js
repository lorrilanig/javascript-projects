//RECTANGLES
function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += '#'; 
    }
    return line;
};
//console.log(makeLine(5));

//SQUARE 
function makeSquare(size) {
    let square = '';
    for (let i = 0; i < size; i++){
        square += makeLine(size) + '\n';       
    }
    return square;
};
//console.log(makeSquare(5));

//WIDTH AND HEIGHT RECTANGLE

function makeRectangle(width, height) {
    rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += (makeLine(width) + '\n');
    }
    return rectangle;
};
//console.log(makeRectangle(5,3));

//TRIANGLES
function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 0; i < height; i++) {
        stairs += makeLine(i+1) + '\n';
    };
    return stairs.slice(0,-1);
  };
//console.log(makeDownwardStairs(5));