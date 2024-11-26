let name=["a", "b", "c", "d", "g","x","k"];
//extract
name.pop();
console.log("after extraction :", name);
//insertion
name.push("e");
console.log("after inserting:", name);
//difference between pop and shift method, shift removes first element
name.shift();
console.log("Shift method:" , name);
//difference bw unshift and push// unshidt add new element to the beginning
name.unshift("mallika");
//splice- returns the removed element
name.splice(2,1);
console.log("splice :", name);
//Non- destructive methods
let job=["dev", "tester", "program manager", "UI-dev"];
//concate
let info=name.concat(job);
console.log("concatenated array: ", info);
name.concat("VV");
console.log("updated name array:", name);



