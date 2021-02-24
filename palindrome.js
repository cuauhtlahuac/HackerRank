let text1 = 'anita lava la tina';

function esPalindromo(word) {
	let wordNoSpaces = word.replaceAll(' ', '');
	let firstWord = wordNoSpaces.split('');
	let secondtWord = [ ...firstWord ].reverse();

	return JSON.stringify(firstWord) === JSON.stringify(secondtWord);
}

esPalindromo(text1);
