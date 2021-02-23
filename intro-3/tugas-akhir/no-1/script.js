function palindrom(str) {
	if (str !== '' && str !== null && str.length > 2) {
		let result = '';
		for (let i = str.length - 1; i >= 0; i--) {
			result += str[i];
		}
		str = str.toLowerCase();
		result = result.toLowerCase();
		if (str === result) {
			return console.log('Palindrom');
		} else {
			return console.log('Bukan Palindrom');
		}
	} else {
		return console.log("Panjang karakter minimal 3!");
	}
}
palindrom("malam");
palindrom("pagi");