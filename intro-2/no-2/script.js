const name = [
	"Abigail", "Alexandra", "Alison", "Amanda",
	"Angela", "Bella", "Carol", "Caroline",
	"Carolyn", "Deirdre", "Diana", "Elizabeth",
	"Ella", "Faith", "Olivia", "Penelope"
];

const limitName = (result, limit, pesan = null) => {
	let arr = [];
	for (let i = 0; i < limit; i++) {
		if (result[i] === undefined) {
			break;
		}
		arr.push(result[i]);
	}
	if (pesan != null) {
		console.log(arr);
		console.log(pesan);
	} else {
		console.log(arr);
	}
}

const searchName = (keyword, limit, limitName) => {
	const result = name.filter(n => n.toLowerCase().includes(keyword));
	if (result.length === 0) {
		return console.log("Tidak ada nama yang cocok");
	} else {
		if (limit > result.length) {
			limitName(result, limit, `Dari ${limit} data yang diminta, hanya ${result.length} yang ditemukan`);
		} else {
			limitName(result, limit);
		}
	}
}

searchName("an", 3, limitName);