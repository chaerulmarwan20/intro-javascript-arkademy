const process = () => {
	return new Promise((resolve, reject) => {
		const sisi = document.querySelector('.input-sisi').value;

		if (sisi === '') {
			return reject(new Error('Sisi harus diisi!'));
		} else if (sisi < 1) {
			return reject(new Error('Sisi harus lebih dari 0(nol)!'));
		} else {
			setTimeout(() => {
				const persegiContainer = document.querySelector('.persegi-container');

				const textSisi = document.querySelectorAll('.sisi');
				textSisi.forEach(s => {
					s.innerHTML = sisi;
				});

				const luas = sisi * sisi;
				const keliling = 4 * sisi;

				persegiContainer.classList.remove('d-none');

				return resolve([luas, keliling]);
			}, 500);
		}

	});
}

const btnProses = document.querySelector('.btn-proses');
btnProses.addEventListener('click', async function() {
	try {
		const formLuas = document.querySelector('.form-luas');
		const formKeliling = document.querySelector('.form-keliling');
		const [luas, keliling] = await process();
		formLuas.value = luas;
		formKeliling.value = keliling;
	} catch (err) {
		const alertContainer = document.querySelector('.alert-container');
		alertContainer.innerHTML = showError(err.message);
	}
});

const btnReset = document.querySelector('.btn-reset');
btnReset.addEventListener('click', function() {
	const luas = document.querySelector('.form-luas');
	const keliling = document.querySelector('.form-keliling');

	luas.value = '';
	keliling.value = '';
	const persegiContainer = document.querySelector('.persegi-container');
	persegiContainer.classList.add('d-none');
});

function showError(message) {
	return /*html*/ `<div class="alert alert-danger alert-dismissible fade show" role="alert">
											<strong>Terjadi Kesalahan!</strong> ${message}
											<button type="button" class="close" data-dismiss="alert" aria-label="Close">
												<span aria-hidden="true">&times;</span>
											</button>
										</div>`;
}