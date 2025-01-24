// Ambil semua elemen video
const videos = document.querySelectorAll('.video-player');

// Fungsi untuk memuat jumlah viewer dari LocalStorage
function loadViewers(videoId) {
    let savedViewers = localStorage.getItem(videoId);
    if (savedViewers === null) {
        savedViewers = 0; // Jika tidak ada data, set ke 0
        localStorage.setItem(videoId, savedViewers); // Simpan data awal ke LocalStorage
    }
    return parseInt(savedViewers); // Pastikan mengembalikan angka
}

// Fungsi untuk menyimpan jumlah viewer ke LocalStorage
function saveViewers(videoId, count) {
    localStorage.setItem(videoId, count); // Perbarui data di LocalStorage
}

// Iterasi setiap video
videos.forEach((video) => {
    const videoId = video.getAttribute('data-id'); // Ambil ID unik video
    const viewCountElement = document.getElementById(`view-count-${videoId}`); // Elemen counter viewer

    // Muat jumlah viewer dari LocalStorage
    let viewers = loadViewers(videoId);
    viewCountElement.textContent = viewers;

    // Tambahkan event listener untuk video saat diputar
    video.addEventListener('play', () => {
        if (!video.hasAttribute('data-viewed')) { 
            viewers++; // Tambah 1 viewer
            viewCountElement.textContent = viewers; // Perbarui tampilan viewer
            saveViewers(videoId, viewers); // Simpan jumlah viewer ke LocalStorage
            video.setAttribute('data-viewed', 'true'); // Tandai bahwa viewer sudah dihitung
        }
    });

    // Tambahkan event listener untuk keluar dari fullscreen (opsional)
    video.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement) {
            video.removeAttribute('data-viewed'); // Reset agar bisa dihitung lagi di sesi berikutnya
        }
    });
});

// Fungsi untuk memperbesar video
function enterFullscreen(videoId) {
    const video = document.querySelector(`video[data-id="${videoId}"]`); // Pilih video berdasarkan data-id
    if (video.requestFullscreen) {
        video.requestFullscreen(); // Browser modern
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen(); // Firefox
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen(); // Chrome dan Safari
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen(); // IE/Edge
    }
}
