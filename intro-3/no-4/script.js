const getData = async url => {
	if (typeof url !== 'string') {
		return console.log('Url harus bertipe string!');
	} else if (url === '') {
		return console.log('Url tidak boleh kosong!');
	}

	try {
		const result = await fetch(url)
		const user = await result.json();
		user.map(item => {
			console.log(item.name);
		});
	} catch (err) {
		console.log(err.message);
	}
};

getData('https://jsonplaceholder.typicode.com/users');