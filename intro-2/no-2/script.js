const name = [
	"Abigail", "Alexandra", "Alison", "Amanda",
	"Angela", "Bella", "Carol", "Caroline",
	"Carolyn", "Deirdre", "Diana", "Elizabeth",
	"Ella", "Faith", "Olivia", "Penelope"
];

const proses = (params, batas) => {
	const hasil = name.filter(n => n.toLowerCase().includes(params));
	let arr = [];
	for (let i = 0; i < batas; i++) {
		arr.push(hasil[i]);
	}
	console.log(arr);
}

const searchName = (keyword, jumlah, callback) => {
	callback(keyword, jumlah);
}

searchName("an", 3, proses);