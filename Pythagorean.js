var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

var result = input.map(function(num) {
						var res;
						
						res = Math.sqrt(Math.pow(Number(num.x),2) + Math.pow(Number(num.y),2));
						return res; 
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);