const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
	if (nilaiAwal > nilaiAkhir) {
		return console.log("Nilai akhir harus lebih besar dari nilai awal");
	} else if (typeof nilaiAwal !== "number" && typeof nilaiAwal !== "number") {
		return console.log("Nilai awal dan nilai akhir harus bertipe number");
	} else if (dataArray.length > 5) {
		let result = dataArray.filter(item => {
			return item >= nilaiAwal && item <= nilaiAkhir;
		});
		if (result.length === 0) {
			return console.log("Tidak ada nilai yang terseleksi");
		}
		return console.log(result.sort((a, b) => a - b));
	} else {
		return console.log("Jumlah angka dalam dataArray tidak ada atau kurang dari 5");
	}
}

seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);