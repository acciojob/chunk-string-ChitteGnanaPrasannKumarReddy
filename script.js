function stringChop(str, size) { 
    if (!str || size <= 0) return [];


    const chunks = [];
    for (let i = 0; i < str.length; i += parseInt(size)) {
        
        chunks.push(str.slice(i, i + parseInt(size)));
    }

    return chunks;
	
	
  // your code here
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));

