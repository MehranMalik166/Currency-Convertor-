// // history.js - Ye alag file banao aur sirf history.html mein include kar


// Show history function
// Ye function history show karega
document.getElementById('clearBtn').addEventListener('click', function() {
  // Check if history exists
  const history = JSON.parse(localStorage.getItem('currencyHistory')) || [];
  
  if (history.length === 0) {
    alert("Your history is already clear!");
    return;
  }

  // If history exists, ask for confirmation
  const userConfirmed = confirm("Are you sure you want to delete ALL history?");
  
  if (userConfirmed) {
    // Clear history if user confirms
    localStorage.removeItem('currencyHistory');
    
    // Refresh the displayed history
    showHistory();
    
    alert("All history has been deleted successfully!");
  }


  //  / Sidebar toggle functionality
  // Toggle sidebar on mobile
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const closeSidebar = document.getElementById('close-sidebar');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebar-overlay');

        mobileMenuButton.addEventListener('click', () => {
            sidebar.classList.remove('translate-x-full');
            overlay.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });

        closeSidebar.addEventListener('click', () => {
            sidebar.classList.add('translate-x-full');
            overlay.classList.add('hidden');
            document.body.style.overflow = '';
        });

        overlay.addEventListener('click', () => {
            sidebar.classList.add('translate-x-full');
            overlay.classList.add('hidden');
            document.body.style.overflow = '';
        });

        // Show mobile menu button only on mobile
        function checkScreenSize() {
            if (window.innerWidth < 1024) {
                mobileMenuButton.classList.remove('hidden');
            } else {
                mobileMenuButton.classList.add('hidden');
                sidebar.classList.add('translate-x-full');
                overlay.classList.add('hidden');
                document.body.style.overflow = '';
            }
        }

        // Initial check
        checkScreenSize();
        
        // Check on resize
        window.addEventListener('resize', checkScreenSize);

});
      
// Load history when page loads
