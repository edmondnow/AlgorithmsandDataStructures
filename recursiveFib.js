


// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(n) {
  let f = [1, 1];

  function helper() {
    f.push(f[f.length - 1 ]+  f[f.length - 2]);
    if(n === 3) return;
    helper(n--);
  }

  helper();

  return f[f.length-1]
}


module.exports = {fib}