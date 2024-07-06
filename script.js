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
    
    // Scrolling Navbar
    document.addEventListener('scroll', function() {
      var navbarFixed = document.getElementById('navbar-fixed');
      var navbarScrolling = document.getElementById('navbar-scrolling');
      var scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        // Show scrolling navbar and hide fixed navbar
        navbarFixed.style.transform = 'translateY(-100%)';
        navbarScrolling.style.transform = 'translateY(0)';
      } else {
        // Show fixed navbar and hide scrolling navbar
        navbarFixed.style.transform = 'translateY(0)';
        navbarScrolling.style.transform = 'translateY(-100%)';
      }
    });

    // Scrolling Menu
      const desktopMenuButtonScrolling = document.getElementById('desktop-menu-button-scrolling');
      const desktopDropdownMenuScrolling = document.getElementById('desktop-dropdown-menu-scrolling');
      const closeMenuButtonScrolling = document.getElementById('close-menu-button-scrolling');
  
      desktopMenuButtonScrolling.addEventListener('click', () => {
        desktopDropdownMenuScrolling.classList.toggle('hidden');
      });
  
      closeMenuButtonScrolling.addEventListener('click', () => {
        desktopDropdownMenuScrolling.classList.add('hidden');
      });
  
      // JavaScript to toggle mobile menu visibility
      const mobileMenuButtonScrolling = document.getElementById('mobile-menu-button-scrolling');
      const mobileDropdownMenuScrolling = document.getElementById('mobile-dropdown-menu-scrolling');
      const closeMenuButtonMobileScrolling = document.getElementById('close-menu-button-mobile-scrolling');
  
      mobileMenuButtonScrolling.addEventListener('click', () => {
        mobileDropdownMenuScrolling.classList.toggle('hidden');
      });
  
      closeMenuButtonMobileScrolling.addEventListener('click', () => {
        mobileDropdownMenuScrolling.classList.add('hidden');
      });

      // Scale Chart 
    // Data for the chart
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const companies = ['WPPOOL', 'Google', 'Microsoft', 'Twitter'];
    const data = {
      labels: months,
      datasets: [
        {
          label: companies[0],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          data: [10, 20, 30, 40, 50, 60, 70],
        },
        {
          label: companies[1],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
          data: [15, 25, 35, 45, 55, 65, 75],
        },
        {
          label: companies[2],
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          borderColor: 'rgba(255, 206, 86, 1)',
          borderWidth: 1,
          data: [20, 30, 40, 50, 60, 70, 80],
        },
        {
          label: companies[3],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          data: [25, 35, 45, 55, 65, 75, 85],
        }
      ]
    };

    // Configuration for the chart
    const config = {
      type: 'line',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 10
            }
          }
        }
      }
    };

    // Create the chart
    var myChart = new Chart(
      document.getElementById('myChart'),
      config
    );