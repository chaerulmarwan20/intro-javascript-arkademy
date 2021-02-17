const name = [
	"Abigail", "Alexandra", "Alison", "Amanda",
	"Angela", "Bella", "Carol", "Caroline",
	"Carolyn", "Deirdre", "Diana", "Elizabeth",
	"Ella", "Faith", "Olivia", "Penelope"
];

const filter = (result, limit) => {
	let arr = [];
	for (let i = 0; i < limit; i++) {
		arr.push(result[i]);
	}
	console.log(arr);
}

const process = (keyword, limit, filter) => {
	const result = name.filter(n => n.toLowerCase().includes(keyword));
	filter(result, limit);
}

const searchName = (keyword, limit, callback) => {
	callback(keyword, limit, filter);
}

searchName("an", 3, process);