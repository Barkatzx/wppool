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
      window.onload = function () {
        const months = ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
        const companies = ['WPPOOL', 'Google', 'Microsoft', 'Twitter'];
      
        // Generate labels for each day in the given months
        const daysInMonths = {
          'Feb': 28,
          'Mar': 31,
          'Apr': 30,
          'May': 31,
          'Jun': 30,
          'Jul': 31
        };
      
        const generateRandomDataForMonth = (days) => {
          let data = [];
          for (let i = 0; i < days; i++) {
            data.push(Math.floor(Math.random() * 101)); // Random data between 0 and 100
          }
          return data;
        };
      
        const wpPoolData = Object.values(daysInMonths).flatMap(days => generateRandomDataForMonth(days));
        const googleData = Object.values(daysInMonths).flatMap(days => generateRandomDataForMonth(days));
        const microsoftData = Object.values(daysInMonths).flatMap(days => generateRandomDataForMonth(days));
        const twitterData = Object.values(daysInMonths).flatMap(days => generateRandomDataForMonth(days));
      
        const data = {
          labels: months,
          datasets: [
            {
              label: companies[0],
              backgroundColor: 'rgba(255, 165, 0, 0.2)', // Orange with transparency
              borderColor: 'rgba(255, 165, 0, 1)', // Orange
              borderWidth: 1,
              data: wpPoolData, // Random data
            },
            {
              label: companies[1],
              backgroundColor: 'rgba(75, 0, 130, 0.2)', // Indigo with transparency
              borderColor: 'rgba(75, 0, 130, 1)', // Indigo
              borderWidth: 1,
              data: googleData, // Random data
            },
            {
              label: companies[2],
              backgroundColor: 'rgba(0, 128, 0, 0.2)', // Green with transparency
              borderColor: 'rgba(0, 128, 0, 1)', // Green
              borderWidth: 1,
              data: microsoftData, // Random data
            },
            {
              label: companies[3],
              backgroundColor: 'rgba(0, 0, 255, 0.2)', // Blue with transparency
              borderColor: 'rgba(0, 0, 255, 1)', // Blue
              borderWidth: 1,
              data: twitterData, // Random data
            }
          ]
        };
      
        const config = {
          type: 'line',
          data: data,
          options: {
            scales: {
              x: {
                type: 'category',
                labels: months, // Only show month names on the x-axis
                ticks: {
                  autoSkip: false
                }
              },
              y: {
                min: -10,
                max: 90,
                ticks: {
                  callback: function (value) {
                    return value + '%'; // Add '%' to the tick labels
                  },
                  stepSize: 10
                }
              }
            },
            plugins: {
              legend: {
                position: 'bottom' // Position the labels at the bottom
              }
            }
          }
        };
      
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, config);
      
        // Resize chart canvas when window size changes
        window.addEventListener('resize', () => {
          myChart.resize();
        });
      };
      