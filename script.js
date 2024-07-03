    // JavaScript to toggle desktop menu visibility
    const desktopMenuButton = document.getElementById('desktop-menu-button');
    const desktopDropdownMenu = document.getElementById('desktop-dropdown-menu');
    const closeMenuButton = document.getElementById('close-menu-button');

    desktopMenuButton.addEventListener('click', () => {
      desktopDropdownMenu.classList.toggle('hidden');
    });

    closeMenuButton.addEventListener('click', () => {
      desktopDropdownMenu.classList.add('hidden');
    });

    // JavaScript to toggle mobile menu visibility
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileDropdownMenu = document.getElementById('mobile-dropdown-menu');
    const closeMenuButtonMobile = document.getElementById('close-menu-button-mobile');

    mobileMenuButton.addEventListener('click', () => {
      mobileDropdownMenu.classList.toggle('hidden');
    });

    closeMenuButtonMobile.addEventListener('click', () => {
      mobileDropdownMenu.classList.add('hidden');
    });
    