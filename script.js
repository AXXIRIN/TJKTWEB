const text = 'Teknik Jaringan Komputer dan Telekomunikasi (TJKT) merupakan sebuah program keahlian dinamis yang dirancang untuk mempersiapkan tenaga ahli profesional di bidang teknologi informasi dan komunikasi. Jurusan ini berfokus pada penguasaan kompetensi mutakhir yang meliputi perakitan perangkat keras, instalasi sistem operasi, pembangunan infrastruktur jaringan lokal maupun luas, hingga pemeliharaan sistem telekomunikasi global.Siswa tidak hanya diajarkan cara menghubungkan antar-komputer, tetapi juga dibekali kemampuan mendalam untuk merancang, mengelola, dan mengamankan lalu lintas data demi terciptanya infrastruktur digital yang stabil, efisien, dan aman dari berbagai ancaman siber.';
let index = 0;
const speed ="5"
function typing() {
  if (index < text.length) {
   document.getElementById("typing").textContent += 
   text[index];
   index++;
   setTimeout(typing, speed);
  }
}
typing();