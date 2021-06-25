/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
	var result = 0;
	while (num > 0) {
		if (num % 2 === 0) {
			num /= 2;
			result++;
		} else {
			num -= 1;
			result++;
		}
	}
	return result;
};