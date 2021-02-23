function reverse_words(str) {
	if (str !== '' && str !== null) {
		let split = str.split(' ');
		let result = '';
		for (let i = split.length - 1; i >= 0; i--) {
			result += split[i] + ' ';
		}
		return console.log(result);
	} else {
		return console.log("Tidak boleh kosong!");
	}
}
reverse_words("Saya belajar Javascript");