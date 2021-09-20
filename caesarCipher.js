let caesarCipher = function (str, shiftBy) {
	let newStr = "",
		isLowerCase = 0;
	if (shiftBy > 26) {
		shiftBy = shiftBy % 26;
	}
	for (let i = 0; i < str.length; i++) {
		if (str[i] !== "!") {
			//Character code after shift
			let decrypt = str.charCodeAt(i) + shiftBy;

			if (str.charCodeAt(i) <= 122 && str.charCodeAt(i) >= 97) {
				isLowerCase = true;
			} else if (str.charCodeAt(i) <= 90 && str.charCodeAt(i) >= 65) {
				isLowerCase = false;
			}

			if (isLowerCase) {
				if (decrypt > 122) {
					decrypt = 96 + decrypt - 122;
				} else if (decrypt < 97) {
					decrypt = 123 - (97 - decrypt);
				}
			} else {
				if (decrypt > 90) {
					decrypt = 64 + decrypt - 90;
				} else if (decrypt < 65) {
					decrypt = 91 - (65 - decrypt);
				}
			}
			newStr += String.fromCharCode(decrypt);
		} else {
			newStr += str[i];
		}
	}
	return newStr;
};

module.exports = caesarCipher;
