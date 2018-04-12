var countdownGenerator = function (x) {
	var arr = ["T-minus 3...","T-minus 2...","T-minus 1...","Blast Off!","Rockets already gone, bub!","Rockets already gone, bub!"];
	var i=0;
	return function(){
		if (x > 0){
			return (arr[i++] );
	 	}
	}
};

var countdown = countdownGenerator(3);
console.log(countdown()); // T-minus 3...
console.log(countdown()); // T-minus 2...
console.log(countdown()); // T-minus 1...
console.log(countdown()); // Blast Off!
console.log(countdown()); // Rockets already gone, bub!
console.log(countdown()); // Rockets already gone, bub!