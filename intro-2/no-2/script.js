const name = [
	"Abigail", "Alexandra", "Alison", "Amanda",
	"Angela", "Bella", "Carol", "Caroline",
	"Carolyn", "Deirdre", "Diana", "Elizabeth",
	"Ella", "Faith", "Olivia", "Penelope"
];

const limitName = (result, limit) => {
	let arr = [];
	for (let i = 0; i < limit; i++) {
		if (result[i] === undefined) {
			break;
		}
		arr.push(result[i]);
	}
	console.log(arr);
}

const filterName = (keyword, limit, limitName) => {
	const result = name.filter(n => n.toLowerCase().includes(keyword));
	if (result.length === 0) {
		return console.log("Tidak ada nama yang cocok");
	} else {
		limitName(result, limit);
	}
}

const searchName = (keyword, limit, callback) => {
	callback(keyword, limit, limitName);
}

searchName("an", 3, filterName);