function double(x) {
  return x * 2;
}

function square(x) {
  return x * x;
}

// Compose them
function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
}

const doubleThenSquare = compose(square, double);
console.log(doubleThenSquare(3)); // (3 * 2)^2 = 36
