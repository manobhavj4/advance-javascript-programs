const first = () => {
	const greet ="Hi";
	const second = () =>{
		const name = "bobby";
		alert(greet);
	}
	return second;
}
const newFunc = first();
newFunc();



//curring function having two different arguments

const multiply = (a,b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyby5 = curriedMultiply(5);
curriedMultiply(5)(6);
multiplyby5(4);   //(5*4)