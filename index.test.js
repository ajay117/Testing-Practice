const capitalize = require("./modules/capitalize");
const reverseString = require("./modules/reverseString");
const calculator = require("./modules/calculator");
const caesarCipher = require("./modules/caesarCipher");

test("Returns the string with first character capitalized", () => {
	expect(capitalize("hi")).toBe("Hi");
	expect(capitalize("Bye")).toBe("Bye");
	expect(capitalize("hello")).toBe("Hello");
	expect(capitalize("computer")).toBe("Computer");
	expect(capitalize("program")).toBe("Program");
});

test("Takes a string and returns it reversed", () => {
	expect(reverseString("ih")).toBe("hi");
	expect(reverseString("eyB")).toBe("Bye");
	expect(reverseString("retupmoc")).toBe("computer");
	expect(reverseString("margorp")).toBe("program");
	expect(reverseString("tpircSavaJ")).toBe("JavaScript");
});

test("Calculator object checking basic operations", () => {
	expect(calculator.add(5, 5)).toBe(10);
	expect(calculator.add(1006, 10)).toBe(1016);
	expect(calculator.add(59, 7)).toBe(66);

	expect(calculator.subtract(10, 5)).toBe(5);
	expect(calculator.subtract(50, 4)).toBe(46);
	expect(calculator.subtract(100, 40)).toBe(60);

	expect(calculator.divide(100, 5)).toBe(20);
	expect(calculator.divide(15, 3)).toBe(5);
	expect(calculator.divide(100, 40)).toBeCloseTo(2.5);

	expect(calculator.multiply(10, 5)).toBe(50);
	expect(calculator.multiply(50, 4)).toBe(200);
	expect(calculator.multiply(100, 40)).toBe(4000);
});

test("Check Caesar Cipher Algorithm", () => {
	expect(caesarCipher("Fg", 2)).toBe("Hi");
	expect(caesarCipher("Czggj", 5)).toBe("Hello");
	expect(caesarCipher("nqxg", -28)).toBe("love");
	expect(caesarCipher("WLYRFLRP", 15)).toBe("LANGUAGE");
	expect(caesarCipher("Oazsdmfgxmfuaze!!!", -12)).toBe("Congratulations!!!");
});
