const printSegitiga = 5;

function tampilkanSegitiga(params) {
	let hasil = "";
	if (typeof params === "number") {
		for (let i = params; i > 0; i--) {
			for (let j = 1; j <= i; j++) {
				hasil += j + ' ';
			}
			hasil += "\n";
		}
	} else {
		hasil = "Data harus number";
	}
	return console.log(hasil);
}

tampilkanSegitiga(printSegitiga);