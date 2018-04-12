var words = ["ground", "control", "to", "major", "tom"];



var map = function(word, func){
	
	var arr = [];
	for (item in words) {
		arr.push(func(words[item]));
	}
	return arr;
}


console.log(map(words, function(word) {
  return word.length;
}))

console.log(map(words, function(word) {
  return word.toUpperCase();
}))

console.log(map(words, function(word) {
  return word.split('').reverse().join('');
}))