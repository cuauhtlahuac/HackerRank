/*
  Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

  #Example 1: a1 = ["arp", "live", "strong"]

  a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

  returns ["arp", "live", "strong"]

  #Example 2: a1 = ["tarp", "mice", "bull"]

  a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

  returns []

    Notes:
    Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.

    In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.

    Beware: r must be without duplicates.
    Don't mutate the inputs.
*/

function inArray(array1, array2) {
	let isInItList = [];

	array1.forEach(str => {
		const isInIt = findInIt(str, array2);

		if (isInIt) {
			isInItList.push(str);
		}
	});

	return isInItList.sort();
}

function findInIt(str, arr) {
	let splitTwo,
		eureka = false;

	arr.forEach(item => {
		if (eureka) {
			return null;
		} else {
			splitOne = str.split('');
			splitTwo = item.split('');

			if (splitTwo.indexOf(splitOne[0]) >= 0) {
				// Si lo encuentra, pero es el primero
				const index = splitTwo.indexOf(splitOne[0]);

				if (splitOne[1] === splitTwo[index + 1]) {
					let indexOne = 2;

					if (indexOne === splitOne.length) {
						eureka = true;
					} else {
						let indexTwo = index + 2;
						for (indexOne; indexOne <= splitOne.length; indexOne++) {
							if (splitOne[indexOne] === splitTwo[indexTwo]) {

								if ((indexOne = splitOne.length)) {
									eureka = true;
								}
							}

							indexTwo++;
						}
					}
				}
			}
		}
	});
	return eureka;
}

console.log(
	inArray(
		[ 'arp', 'live', 'strong', 'ect' ],
		[ 'lively', 'live', 'harp', 'sharp', 'armstrong', 'perfect' ],
	),
);
