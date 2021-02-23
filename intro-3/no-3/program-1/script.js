const process = () => {
	return new Promise((resolve, reject) => {
		const barang = ["baju", "celana", "sepatu", "tas", "topi"];

		const namaBarang = document.querySelector('.nama-brg').value;
		const jmlBarang = document.querySelector('.jml-brg').value;
		if (namaBarang === '' || jmlBarang === '') {
			return reject(new Error('Nama & jumlah barang tidak boleh kosong!'));
		} else if (barang.includes(namaBarang.toLowerCase()) === false) {
			return reject(new Error('Barang tidak ada!'));
		} else if (jmlBarang < 1) {
			return reject(new Error('Jumlah barang harus lebih dari nol(0)!'));
		} else {
			setTimeout(() => {
				const [harga, total] = getCount(namaBarang, jmlBarang);
				const diskon = getDiscount(total);
				const bayar = total - diskon;

				const modalTitle = document.querySelector('.modal-title');
				modalTitle.innerHTML = 'Total Pembayaran!';

				const dataModal = showTotal(namaBarang, harga, jmlBarang, total, diskon, bayar);
				return resolve(dataModal);
			}, 500);
		}
	});
}

const btnProses = document.querySelector('.btn-proses');
btnProses.addEventListener('click', async function() {
	const modalBody = document.querySelector('.modal-body');
	try {
		const result = await process();
		modalBody.innerHTML = result;
	} catch (err) {
		const modalTitle = document.querySelector('.modal-title');
		modalTitle.innerHTML = `Terjadi Kesalahan!`;
		modalBody.innerHTML = showError(err.message);
	}
});

const getCount = (namaBarang, jmlBarang) => {
	let harga = null;
	let total = null;
	if (namaBarang.toLowerCase() === 'baju') {
		harga = 40000;
		total = harga * jmlBarang;
	} else if (namaBarang.toLowerCase() === 'celana') {
		harga = 50000;
		total = harga * jmlBarang;
	} else if (namaBarang.toLowerCase() === 'sepatu') {
		harga = 70000;
		total = harga * jmlBarang;
	} else if (namaBarang.toLowerCase() === 'tas') {
		harga = 80000;
		total = harga * jmlBarang;
	} else if (namaBarang.toLowerCase() === 'topi') {
		harga = 20000;
		total = harga * jmlBarang;
	}
	return [harga, total];
}

const getDiscount = (total) => {
	let diskon = null;
	if (total >= 200000) {
		diskon = 0.05 * total;
	} else {
		diskon = 0;
	}
	return diskon;
}

function showError(message) {
	return /*html*/ `<div class="alert alert-danger" role="alert">
                      <strong>${message}</strong>
                    </div>`;
}

function showTotal(namaBarang, harga, jmlBarang, total, diskon, bayar) {
	return /*html*/ `<div class="container-fluid">
                      <div class="row">
                        <div class="col-md">
                          <ul class="list-group">
                            <li class="list-group-item">
                              <h4>${namaBarang}</h4>
                            </li>
                            <li class="list-group-item"><strong>Harga : </strong> Rp. ${harga}</li>
                            <li class="list-group-item"><strong>Jumlah Beli : </strong> ${jmlBarang}</li>
                            <li class="list-group-item"><strong>Total : </strong> Rp. ${total}</li>
                            <li class="list-group-item"><strong>Diskon : </strong> Rp. ${diskon}</li>
                            <li class="list-group-item"><strong>Bayar : </strong> Rp. ${bayar}</li>
                          </ul>
                        </div>
                      </div>
                    </div>`;
}