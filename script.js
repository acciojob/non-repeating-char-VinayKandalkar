function firstNonRepeatedChar(str) {
 let const = {}
 for (let i = 0; i < str.length; i++) {
	 if (const[str[i]] !== undefined) {
		 // obj["a"]
		obj [str[i]] += 1;
	 } else {
		 const[str[i]] = 1;
	   } 
	}
	for (let i = 0; i < str.length; i++) {
		if (const[str[i]] == 1) {
			return str[i];
		}
	}

	return null;
 }
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));