const desktopMenuButton = document.getElementById('desktop-menu-button');
const closeMenuButton = document.getElementById('close-menu-button');
const desktopDropdownMenu = document.getElementById('desktop-dropdown-menu');

desktopMenuButton.addEventListener('click', () => {
  desktopDropdownMenu.classList.toggle('hidden');
});

closeMenuButton.addEventListener('click', () => {
  desktopDropdownMenu.classList.add('hidden');
});