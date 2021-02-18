const name = [
	"Abigail", "Alexandra", "Alison", "Amanda",
	"Angela", "Bella", "Carol", "Caroline",
	"Carolyn", "Deirdre", "Diana", "Elizabeth",
	"Ella", "Faith", "Olivia", "Penelope"
];

const limitName = (result, limit) => {
	let arr = [];
	for (let i = 0; i < limit; i++) {
		arr.push(result[i]);
	}
	console.log(arr);
}

const filterName = (keyword, limit, limitName) => {
	const result = name.filter(n => n.toLowerCase().includes(keyword));
	limitName(result, limit);
}

const searchName = (keyword, limit, callback) => {
	callback(keyword, limit, limitName);
}

searchName("an", 3, filterName);