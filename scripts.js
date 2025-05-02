<script>
    // Dapatkan semua tombol favorit
    const favoriteButtons = document.querySelectorAll('.favorite-button');

    favoriteButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Toggle kelas "active" pada tombol
            button.classList.toggle('active');

            // Pindahkan gunung ke tab favorit atau tab mountain
            const mountainRow = this.closest('.row'); // Baris gunung
            const favoritesTab = document.querySelector('.tabs a[href="#favorite"]'); // Tab favorit
            const mountainTab = document.querySelector('.tabs a[href="#mountain"]'); // Tab mountain
            
            if (button.classList.contains('active')) {
                // Jika aktif (bintang dinyalakan), pindahkan ke tab favorit
                favoritesTab.appendChild(mountainRow);
            } else {
                // Jika tidak aktif, pindahkan kembali ke tab mountain
                mountainTab.appendChild(mountainRow);
            }
        });
    });
</script>
