const cekHariKerja = (day) => {
	return new Promise((resolve, reject) => {
		const checkDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu'];
		if (typeof day !== 'string') {
			return reject(new Error('Inputan salah, harap masukkan data bertipe string!'));
		} else if (day === '') {
			return reject(new Error('Inputan salah, string tidak boleh kosong!'));
		} else if (checkDay.includes(day) === false) {
			return reject(new Error('Inputan salah, harap masukkan nama hari!'));
		}

		setTimeout(() => {
			const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
			let cek = dataDay.find((item) => {
				return item === day;
			});
			if (cek) {
				resolve(`Hari ${cek} adalah hari kerja.`);
			} else {
				reject(new Error(`Hari ${day} bukan hari kerja.`));
			}
		}, 3000);
	});
}

// then
// catch
cekHariKerja('minggu')
	.then(res => console.log(res))
	.catch(err => console.log(err.message));
/**
 * Penjelasan then catch
 * then berfungsi untuk menangkap atau memproses hasil dari resolve
 * sedangkan, catch berfungsi untuk menangkap atau memproses hasil dari reject
 */

// try
// catch
const print = async () => {
	try {
		const result = await cekHariKerja('senin');
		console.log(result);
	} catch (err) {
		console.log(err.message);
	}
}
/**
 * Penjelasan try catch
 * try berfungsi untuk menangkap atau memproses hasil dari resolve
 * sedangkan, catch berfungsi untuk menangkap atau memproses hasil dari reject
 */
print();