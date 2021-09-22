function analyze(arr) {
	let obj = {};
	obj.average = arr.reduce((prev, curr) => prev + curr, 0) / arr.length;
	obj.min = arr.sort(function (a, b) {
		return a - b;
	})[0];
	obj.max = arr.sort(function (a, b) {
		return b - a;
	})[0];
	obj.length = arr.length;
	return obj;
}

module.exports = analyze;
