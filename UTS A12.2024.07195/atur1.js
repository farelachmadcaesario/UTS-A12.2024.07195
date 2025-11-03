// Membungkus dalam DOMContentLoaded agar rapi dan tidak mengotori global scope
document.addEventListener('DOMContentLoaded', function() {
  
  function showTime() {
    const now = new Date();
    // Menambahkan 'id-ID' agar formatnya Bahasa Indonesia
    const time = now.toLocaleTimeString('id-ID'); 
    
    // Selalu cek apakah elemennya ada sebelum mengubahnya
    const clockElement = document.getElementById("clock");
    if (clockElement) {
      // Menghapus spasi ekstra di awal
      clockElement.textContent = time;
    }
  }

  // Panggil sekali saat halaman dimuat
  showTime();
  
  // Panggil setiap detik
  setInterval(showTime, 1000);

});
// Kurung kurawal '}' ekstra di file asli Anda sudah dihapus.