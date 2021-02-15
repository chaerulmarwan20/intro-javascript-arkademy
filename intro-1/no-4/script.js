// A
let data = {
	id: 1,
	name: "Leanne Graham",
	username: "Bret",
	email: "Sincere@april.biz",
	address: {
		street: "Kulas Light",
		suite: "Apt. 556",
		city: "Gwenborough",
		zipcode: "92998-3874",
	},
	phone: "1-770-736-8031 x56442",
	website: "hildegard.org"
};

let data2 = {
	...data,
	name: "Chaerul Marwan",
	email: 'chaerulmarwan20@gmail.com',
	hobby: "Futsal"
};

console.log(data);
console.log(data2);

// B
let {
	street,
	city
} = data.address;

console.log(street);
console.log(city);