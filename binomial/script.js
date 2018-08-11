const textField = $('.text-field');
const textBox = $('.text-box');
const paragraph = document.querySelector('.desc');

const MAX_POWER = 27;

paragraph.textContent = 'Only works for expressions up to the power of ' + MAX_POWER +' coz of integer overflow issues :(';

var exp = "";
var power = 0;
var firstExp = "";
var operator = '';
var secondExp = "";

function factorial(n) {
	if (n <= 1) return 1;
	return n * factorial(n-1);;
}

function comb(n, r) {
	return factorial(n)/(factorial(r)*factorial(n-r));
}

function powerup(n, what, yes) {
	if (n == 0) return '';
	var ans = "";
	for (var i = 0;i<what.length;i++) {
		if (yes) {
			if (i == 0) {
				whatToAdd = what[i];
				if (operator == '-' && n%2 == 1) var whatToAdd = '-' + what[i];
				ans += '(' + (whatToAdd + '^' + n)  + ')';
			} else {
				ans += '(' + (what[i] + '^' + n)  + ')';
			}

		} else {
			ans += '(' + (what[i] + '^' + n)  + ')';
		}

	}

	return ans;
}

textField.keyup(function(event){
	if (event.keyCode == 13) {
		exp = textField.val();
		var isPower = false;
		var hasOpening = false;
		var hasClosing = false;
		var hasOperator = false;


		for (var i = 0;i<exp.length;i++) {
			if (exp[i] == '(') {
				if (!hasOpening) hasOpening = true;
				else break;
				continue;
			} 

			if (!hasOperator) {
				if (!hasOpening) continue;
				if ('0123456789abcdefghijklmnopqrstuvwxyz'.indexOf(exp[i]) !== -1) {
					firstExp += exp[i];
					continue;
				} 
				if (exp[i] == '+' || exp[i] == '-') {
					operator = exp[i];
					hasOperator = true;
					continue;
				}

				if (exp[i] == ' ') continue;
			}

			if (hasOperator && !hasClosing) {
				if ('0123456789abcdefghijklmnopqrstuvwxyz'.indexOf(exp[i]) !== -1) {
					secondExp += exp[i];
				}
				if (exp[i] == '+' || exp[i] == '-') {
					operator = exp[i];
					if (!hasOperator) hasOperator = true;
					else break;
					continue;
				}
				if (exp[i] == ' ') continue;

				if (exp[i] == ')') {
					if (!hasClosing) hasClosing = true;
					else break;
					continue;
				}
			} else {
				if (exp[i] == ' ') continue;
				if (exp[i] == '^') {
					isPower = true;
					continue;
				} else if (isPower && '0123456789'.indexOf(exp[i]) !== -1) {
					power *= 10;
					power += parseInt(exp[i]) 
					continue;
				} else break;
			}


			if (power > MAX_POWER) break;


		}
		if (power > MAX_POWER) {
			alert("We can't process that much!!!");
			power = 0;
			textField.val('');
			textField.blur();
			textBox.text('This will contain the terms for your algebraic expression typed above. Press the Enter Key after you are done typing your algbraic expression!!');
		} else if (!isPower) {
			alert("Please enter a proper algebraic expression");
			textField.val('');
			textField.blur();
			textBox.text('This will contain the terms for your algebraic expression typed above. Press the Enter Key after you are done typing your algbraic expression!!');
		}  else {
			process();
		}
		// console.log(power);
		// console.log(firstExp);
		// console.log(operator);
		// console.log(secondExp);

		firstExp = "";
		secondExp = "";
		power = 0;
	}
});

function process() {
	var finalStr = "";
	for (var i = 0;i<=power;i++) {
		var coefficent = comb(power, i);
		var firstStr = powerup(i, firstExp, false);
		var secondStr = powerup(power-i, secondExp, true);

		// if (i == 0) console.log("DEBUG: " + secondStr);
		if (coefficent === 1) {
			console.log((i+1).toString() + 'th term: ' +firstStr + '' + secondStr + '\n');
			finalStr += ((i+1).toString() + 'th term: ' +firstStr + '' + secondStr + '\n');
		} else {
			if (i < power) {
				console.log((i+1).toString() + 'th term: ' + coefficent.toString() + firstStr+ '' + secondStr + '\n');
				finalStr += ((i+1).toString() + 'th term: ' +coefficent.toString() + firstStr + '' + secondStr + '\n');
			} else {
				console.log((i+1).toString() + 'th term: ' + coefficent.toString() + firstStr+ '' + secondStr);
				finalStr += ((i+1).toString() + 'th term: ' +coefficent.toString() + firstStr + '' + secondStr);
			}

		}


	}

	textBox.text(finalStr);
}


