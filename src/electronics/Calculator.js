const Calculator = {
	num: 2,
	printNum: function() {
		return `The value of 'num' is ${this.num}`;
	},
	multiplyByX: function(x) {
		return this.num * x;
	},
	multiplyByXAndSumY: function(x, y) {
		return this.multiplyByX(x) + y;
	},
	whoIsThis: function() {
		return this;
	}
};

export default Calculator;
