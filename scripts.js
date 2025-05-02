
// Tambahkan interaksi untuk tombol favorit
document.querySelectorAll('.favorite-button').forEach((button) => {
  button.addEventListener('click', (event) => {
    const row = event.target.closest('.row');
    const mountainName = row.querySelector('.mountain-info strong').textContent;
    alert(`${mountainName} has been added to your favorites!`);
  });
});
