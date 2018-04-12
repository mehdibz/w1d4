// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (item in arr){
      if (arr[item] === "Waldo") {
      found(item);   // execute callback
    }
  }
}

function actionWhenFound(index) {
  console.log("Found Waldo at index "+ index +"!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);