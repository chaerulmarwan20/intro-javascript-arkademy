function palindrom() {
	let str = prompt("Masukkan kata");
	if (str !== '' && str !== null && str.length > 2) {
		let result = '';
		for (let i = str.length - 1; i >= 0; i--) {
			result += str[i];
		}
		str = str.toLowerCase();
		result = result.toLowerCase();
		if (str === result) {
			document.body.innerHTML = 'Palindrom';
		} else {
			document.body.innerHTML = 'Bukan Palindrom';
		}
	} else {
		alert("Panjang karakter minimal 3");
		return palindrom();
	}
}
palindrom();