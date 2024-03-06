function stringChop(str, size) {
  // your code here
	for(let i=0;i<str.length;i++)
		{
			let result=[]
			for(let j=0;j<size && i<str.length;j++)
				{
					let char=char+str[i];
					i++;
				}
			result.push(char);
		}
	
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
