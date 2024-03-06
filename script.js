function stringChop(str, size) {
  // your code here
	let result = [];

  // Check for null or empty string
  if (str === null || str.length === 0) {
    return result;
  }

  for (let i = 0; i < str.length; i += size) {
    let chunk = '';
    for (let j = 0; j < size && i + j < str.length; j++) {
      chunk += str[i + j];
    }
    result.push(chunk);
  }

  return result;
	
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
