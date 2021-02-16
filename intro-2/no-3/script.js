const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
	if (nilaiAwal > nilaiAkhir) {
		return console.log("Nilai akhir harus lebih besar dari nilai awal");
	} else if (dataArray.length > 5) {
		let result = dataArray.filter(item => {
			return item >= nilaiAwal && item <= nilaiAkhir;
		});
		return console.log(result.sort((a, b) => a - b));
	} else {
		return console.log("Jumlah angka dalam dataArray tidak ada atau kurang");
	}
}
seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);