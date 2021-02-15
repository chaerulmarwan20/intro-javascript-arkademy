const bahasaIndonesia = 80;
const bahasaInggris = 89;
const mtk = 80;
const ipa = 69;

function hitungNilai(indo, inggris, mtk, ipa) {
	if (indo === "" || inggris === "" || mtk === "" || ipa === "") {
		return console.log('Semua nilai harus diisi!');
	} else if (indo === null || inggris === null || mtk === null || ipa === null) {
		return console.log('Semua nilai harus diisi!');
	} else if (indo === undefined || inggris === undefined || mtk === undefined || ipa === undefined) {
		return console.log('Semua nilai harus diisi!');
	} else {
		const rataRata = (indo + inggris + mtk + ipa) / 4;
		let grade = '';

		if (rataRata >= 90 && rataRata <= 100) {
			grade = 'A';
			return console.log(`Rata-rata = ${rataRata}\nGrade = ${grade}`);
		} else if (rataRata >= 80 && rataRata < 90) {
			grade = 'B';
			return console.log(`Rata-rata = ${rataRata}\nGrade = ${grade}`);
		} else if (rataRata >= 70 && rataRata < 80) {
			grade = 'C';
			return console.log(`Rata-rata = ${rataRata}\nGrade = ${grade}`);
		} else if (rataRata >= 60 && rataRata < 70) {
			grade = 'D';
			return console.log(`Rata-rata = ${rataRata}\nGrade = ${grade}`);
		} else if (rataRata >= 0 && rataRata < 60) {
			grade = 'E';
			return console.log(`Rata-rata = ${rataRata}\nGrade = ${grade}`);
		} else {
			return console.log(`Pastikan kamu sudah memasukkan nilai dengan benar!`);
		}
	}
}

hitungNilai(bahasaIndonesia, bahasaInggris, mtk, ipa);