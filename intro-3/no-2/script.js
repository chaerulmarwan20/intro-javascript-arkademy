const getMonth = (callback) => {
	if (typeof callback !== 'function') {
		return console.log('Callback harus berupa function!');
	}

	setTimeout(() => {
		let error = false;
		let month = ['January', 'February', 'March', 'April', 'May', 'Juni', 'July', 'August', 'September', 'October', 'November', 'Desember'];
		if (!error) {
			callback(null, month);
		} else {
			callback(new Error('Sorry Data Not Found', []));
		}
	}, 500);
}

getMonth((err, month) => {
	if (err) {
		console.log(err.message);
	} else {
		month.map(item => {
			console.log(item);
		});
	}
});