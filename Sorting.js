var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

function Sorting(arr){ arr.sort(function(a, b) {

						if (a.name < b.name) {
						return false;
						}
						if (a.name > b.name) {
						return true;
						}

						if (a.name === b.name) {
							if (a.age < b.age) {
								return true;
							}
						}
					})

		return arr;
}

console.log(Sorting(students));