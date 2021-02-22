const angka = 5956560159466056;

const divideAndSort = (nums) => {
	if (typeof nums !== 'number') {
		return console.log('Parameter harus diisi dengan tipe data number!');
	}

	const pecah = nums.toString().split('0');
	// * [ '595656', '159466', '56' ]
	const urutkan = pecah.map(item => {
		return Array.from(item).sort().join('');
		// * [ [5,9,5,6,5,6], [1,5,9,4,6,6], [5,6] ]
		// * [ [5,5,5,6,6,9], [1,4,5,6,6,9], [5,6]' ]
		// * [ 555669, 145669, 56 ]
	});
	const gabungkan = urutkan.join('');
	// * 55566914566956
	const konversi = Number(gabungkan);
	return console.log(konversi);
}

divideAndSort(angka);