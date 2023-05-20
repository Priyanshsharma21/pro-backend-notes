const buffer = new Buffer.from("Priyansh") // default utf-8

console.log(buffer.toJSON())
console.log(buffer.toString()) //priyansh

// we will see a object with data - proyansh in buffer - binary form
// data: [
//     80, 114, 105, 121,
//     97, 110, 115, 104
//   ]

// this is hexadecimal pr base16 of number - convert bunary to hax

