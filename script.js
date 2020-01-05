let RandomArray = [1,5,6,7,8,4,3,2,6,9,0,7];


/* filter adalah untuk membuat array baru dari hasil penyaringan array yang lama.
contoh saya akan membuat array baru dari array RandomArray yang nilainya lebih
besar dari 5 */
let FilterArray = RandomArray.filter(function(a){
	return a > 5;
});

console.log(FilterArray);


//jika ditulis dengan bentuk Arrow Function akan lebih singkat
let FilterArray2 = RandomArray.filter(a => a > 5);

console.log(FilterArray2);

/* Map adalah elemen array yg gunanya untuk memetakan setiap elemen array.
Contoh nya saya akan mengalikan 2 setiap elemen array pada array RandomArray */
let MapArray = RandomArray.map(function(a){
	return	a * 2;
});

console.log(MapArray);

//jika ditulis dengan bentuk Arrow Function
let MapArray2 = RandomArray.map(a => a * 2);

console.log(MapArray2);

/* Reduce adalah untuk melakukan aksi pada seluruh elemen array nya.
contoh saya akan menjumlahkan seluruh elemen array pada array RandomArray, 
berbeda dengan filter dan map, reduce mempunyai 2 argument, contoh argument (akumulasi)
pertama, saat pertama jumlah akumulasi adalah 0, dan argument kedua (arraySaatIni) adalah
1, jika argument kedua (arraySaatIni) pindah ke array index kedua yaitu 5, maka argument
pertama (akumulasi) akan pindah ke array index pertama yaitu 1, begitu seterusnya */
let ReduceArray = RandomArray.reduce(function(akumulasi, arraySaatIni){
	return	akumulasi + arraySaatIni
});

console.log(ReduceArray);

//jika ditulis dengan bentuk Arrow Function
let ReduceArray2 = RandomArray.reduce((akum, arraySaatIni) => akum + arraySaatIni);

console.log(ReduceArray2);

