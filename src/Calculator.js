const Calculator = function() {
	this.num = 2;
	this.printNum = () => {
		return `The value of 'num' is ${this.num}`;
	};
	this.multiplyByX = x => {
		return (this.num) * x;
	};
	this.multiplyByXAndSumY = (x, y) => {
		return this.multiplyByX(x) + y;
	};
	this.whoIsThis = () => {
		return this;
	};
	return this;
};

const calc = Calculator();

const CalculatorObj = {
	num: 2,
	printNum: () => {
		return `The value of 'num' is ${num}`;
	},
	multiplyByX: x => {
		return num * x;
	},
	multiplyByXAndSumY: (x, y) => {
		return multiplyByX(x) + y;
	},
	whoIsThis: () => {
		return this;
	}
};