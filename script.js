document.addEventListener('DOMContentLoaded', () => {

    // =======================================================================
    // !! DATA LAYANAN & SPAREPART - INI HANYA CONTOH KASAR !!
    // !! WAJIB DIGANTI SESUAI LAYANAN, HARGA, & GAMBAR AKTUAL GHANGGA PHONSEL !!
    // =======================================================================
    const serviceData = [
        {
            id: 1,
            category: "Layanan Ganti LCD",
            description: "Penggantian layar LCD/OLED untuk berbagai merek HP. Tersedia berbagai kualitas (Original, OEM, Grade A).",
            // !! Ganti dengan harga awal atau keterangan !!
            priceInfo: "Mulai dari Rp 250.000 (Tergantung Model & Kualitas LCD)",
            // !! Ganti dengan nama file gambar Anda di folder /images !!
            imageUrl: "images/LCD.jpg"
        },
        {
            id: 2,
            category: "Layanan Ganti Baterai",
            description: "Penggantian baterai tanam/biasa yang sudah drop, kembung, atau rusak. Tersedia kualitas Original & OEM.",
            priceInfo: "Mulai dari Rp 150.000 (Tergantung Model & Kualitas Baterai)",
            imageUrl: "images/baterai.jpg"
        },
        {
            id: 3,
            category: "Perbaikan/Ganti Housing",
            description: "Mengganti casing/tulang/bazel HP yang pecah, bengkok, atau lecet parah. Membuat HP tampak baru.",
            priceInfo: "Mulai dari Rp 200.000 (Tergantung Model & Ketersediaan Part)",
            imageUrl: "images/housing.jpeg"
        },
        {
            id: 4,
            category: "Perbaikan/Ganti Kamera",
            description: "Memperbaiki atau mengganti modul kamera depan/belakang yang buram, error, atau tidak berfungsi.",
            priceInfo: "Mulai dari Rp 150.000 (Tergantung Model & Kerusakan)",
            imageUrl: "images/sensor kamera.jpeg"
        },
        {
            id: 5,
            category: "Perbaikan/Ganti Sensor",
            description: "Memperbaiki sensor seperti fingerprint, proximity (layar mati saat telpon), gyroscope, dll.",
            priceInfo: "Mulai dari Rp 100.000 (Tergantung Model & Jenis Sensor)",
            imageUrl: "images/sensor kamera.jpeg" // Bisa pakai gambar sama/berbeda
        },
        {
            id: 6,
            category: "Perbaikan Konektor Charger",
            description: "Memperbaiki port charger yang longgar, tidak bisa charge, atau rusak. Melayani tipe USB Micro, USB-C, Lightning.",
            priceInfo: "Mulai dari Rp 75.000 (Tergantung Model & Tipe Konektor)",
            imageUrl: "images/konektor.jpeg"
        },
        {
            id: 7,
            category: "Perbaikan IC / Mesin",
            description: "Perbaikan tingkat lanjut pada komponen IC di motherboard (misal: IC Power, IC Charger, IC Audio, CPU, EMMC). Melayani kasus mati total, sinyal hilang, dll.",
            priceInfo: "Tergantung Hasil Pengecekan Kerusakan",
            imageUrl: "images/IC HP.jpeg"
        },
        {
            id: 8,
            category: "Software / Flashing",
            description: "Mengatasi masalah software seperti bootloop, hang logo, lupa pola/sandi, FRP, update/downgrade OS.",
            priceInfo: "Mulai dari Rp 100.000 (Tergantung Kasus)",
            imageUrl: "images/ekosistem.jpeg" // Anda perlu gambar ini
        },
        // Tambahkan layanan/part lain di sini jika perlu
        // Contoh: Ganti Speaker, Ganti Tombol, dll.
        // {
        //     id: 9,
        //     category: "Ganti Speaker/Buzzer",
        //     description: "Memperbaiki suara speaker telepon atau musik yang pecah, sember, atau mati.",
        //     priceInfo: "Mulai dari Rp 80.000",
        //     imageUrl: "images/speaker-generic.jpg" // Anda perlu gambar ini
        // },

    ];
    // =======================================================================
    // AKHIR BAGIAN DATA CONTOH
    // =======================================================================

    const serviceListContainer = document.getElementById('service-list-container');

    // Fungsi untuk render card layanan/sparepart
    function renderServices(services) {
        if (!serviceListContainer) return;

        serviceListContainer.innerHTML = ''; // Kosongkan loading state/konten lama

        if (services.length === 0) {
            serviceListContainer.innerHTML = '<p class="text-center text-muted col-12">Belum ada layanan yang tersedia.</p>';
            return;
        }

        services.forEach(service => {
            const cardCol = document.createElement('div');
            cardCol.className = 'col'; // Bootstrap column

            const cardHtml = `
                <div class="card h-100 shadow-sm">
                    <img src="${service.imageUrl || 'images/placeholder.png'}" class="card-img-top" alt="${service.category}">
                    <div class="card-body">
                        <h5 class="card-title">${service.category}</h5>
                        <p class="card-text description">${service.description}</p>
                        <p class="card-text price-info">${service.priceInfo}</p>
                        <a href="https://wa.me/6287788788977?text=Halo%20Ganggha%20Ponsel,%20saya%20mau%20tanya%20tentang%20${encodeURIComponent(service.category)}" target="_blank" class="btn btn-success btn-sm mt-auto btn-contact">
                           <i class="bi bi-whatsapp"></i> Tanya via WhatsApp
                        </a>
                    </div>
                </div>
            `;
            // Ganti 628xxxxxxxxxx dengan nomor WA Anda yang benar

            cardCol.innerHTML = cardHtml;
            serviceListContainer.appendChild(cardCol);
        });
    }

    // Render daftar layanan saat halaman dimuat
    renderServices(serviceData);

}); // Akhir dari DOMContentLoaded