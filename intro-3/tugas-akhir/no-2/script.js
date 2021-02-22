function reverse_words() {
	let str = prompt("Masukkan kalimat");
	if (str !== '' && str !== null) {
		let split = str.split(' ');
		let result = '';
		for (let i = split.length - 1; i >= 0; i--) {
			result += split[i] + ' ';
		}
		document.body.innerHTML = result;
	} else {
		alert("Tidak boleh kosong");
		return reverse_words();
	}
}
reverse_words();