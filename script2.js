//Ambil semua video dari file index2.html
let video = Array.from(document.querySelectorAll('[data-duration]'));



//filter video hanya javascript saja
//textContent.includes adalah hanya mencari text dengan tulisan Javascript di file index2.html
let videos = video.filter(a => a.textContent.includes("Javascript"))

//ubah menit pada video menjadi detik

.map(a => {
	//dataset.[nama atribut di index2.html] adalah untuk mengambil isi dari atribut duration
	let waktu = a.dataset.duration;
	let split = waktu.split(':').map(a => parseInt(a));

	return split[0] * 60 + split[1];
	
})

.reduce((a,b) => a+b);

//hitung jam, menit, detik

/*Math.floor untuk menghasilkan bilangan kebawah contoh 3.8 maka akan dibulatkan menjadi 3
//Math.seil untuk menghasilkan bilangan keatas contoh 3.1 maka akan dibulatkan menjadi 4
//Math.rounded untuk menghasilkan bilangan terdekat contoh 3.4 maka akan dibulatkan menjadi 3, 
3.6 maka akan dibulatkan menjadi 4 */ 

let jam = Math.floor(videos / 3600);
videos = videos - jam * 3600;
let menit = Math.floor(videos / 60);
let detik = videos - menit * 60;

//tampilkan jam menit dan detik pada index2.html 

let total = document.querySelector('#total');
total.append(`${jam} jam ${menit} menit ${detik} detik`);

let jumlah_video = video.length;
let jumlah = document.querySelector('#jumlah_video');
jumlah.append(`${jumlah_video} video`);

