function firstNonRepeatedChar(str) {
 let cons = {}
 for (let i = 0; i < str.length; i++) {
	 if (cons[str[i]] !== undefined) {
		 // obj["a"]
		obj [str[i]] += 1;
	 } else {
		 cons[str[i]] = 1;
	   } 
	}
	for (let i = 0; i < str.length; i++) {
		if (cons[str[i]] == 1) {
			return str[i];
		}
	}

	return null;
 }
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));