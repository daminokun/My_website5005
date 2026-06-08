// Memastikan kod berjalan selepas elemen HTML dimuatkan sepenuhnya
document.addEventListener("DOMContentLoaded", function () {
    
    // 1. Fungsi Interaktif untuk Butang di Halaman Utama (index.html)
    const btnSelamatDatang = document.getElementById("btnSelamatDatang");
    if (btnSelamatDatang) {
        btnSelamatDatang.addEventListener("click", function () {
            alert("Terima kasih datang singgah! website saya simple je.");
        });
    }

    // 2. Fungsi Interaktif untuk Borang Hubungi (contact.html)
    const borangHubungi = document.getElementById("borangHubungi");
    if (borangHubungi) {
        borangHubungi.addEventListener("submit", function (event) {
            // Stop browser dari refresh bila tekan button submit supaya boleh keluar popup
           // event.preventDefault(); 
            
            // Ambil data dari nama dan input kat popup
            const nama = document.getElementById("nama").value;
            
            // tunjuk popup bila tekan submit
            alert("Terima kasih, " + nama + "! Mesej anda berjaya dihantar (Simulasi).");
            
            // lepas tekan submit borang reset kosong
            borangHubungi.reset();
        });
    }
});