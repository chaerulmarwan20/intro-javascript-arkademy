const getData = async url => {
	if (typeof url !== 'string') {
		return console.log('Url harus bertipe string!');
	} else if (url === '') {
		return console.log('Url tidak boleh kosong!');
	}

	try {
		const result = await fetch(url)
			.then(response => {
				if (!response.ok) {
					throw new Error('Server error!!');
				}
				return response.json();
			})
			.then(response => response);
		result.map(item => {
			console.log(`Name: ${item.name}`);
		});
	} catch (err) {
		console.log(err.message);
	}
};

getData('https://jsonplaceholder.typicode.com/users');