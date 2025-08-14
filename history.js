// // history.js - Ye alag file banao aur sirf history.html mein include kar


// Show history function
// Ye function history show karega
function showHistory() {
  const tableBody = document.getElementById('tableBody'); // Correct ID
  
  // Get history from localStorage safely
  let history = [];
  try {
    const storedData = localStorage.getItem("currencyHistory");
    history = storedData ? JSON.parse(storedData) : [];
  } catch (e) {
    console.error("Error reading history:", e);
    history = [];
  }

  // Clear existing rows
  tableBody.innerHTML = '';

  // If no history, show message
  if (history.length === 0) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td colspan="6" class="py-4 text-gray-500 text-center">
        No conversion history found. Convert some currencies first!
      </td>
    `;
    tableBody.appendChild(row);
    return;
  }

  // Add each history item as a row (in reverse order - newest first)
  history.reverse().forEach((item, index) => {
    const row = document.createElement('tr');
    row.className = 'border-b border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors';
    
    row.innerHTML = `
      <td class="py-3 px-4 border">${history.length - index}</td>
      <td class="py-3 px-4 border">${item.from || 'N/A'}</td>
      <td class="py-3 px-4 border">${item.to || 'N/A'}</td>
      <td class="py-3 px-4 border">${item.amount || 'N/A'}</td>
      <td class="py-3 px-4 border">${item.converted || 'N/A'}</td>
      <td class="py-3 px-4 border">${item.date || new Date().toLocaleString()}</td>
    `;
    
    tableBody.appendChild(row);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  // Load history
  showHistory();
  });

document.getElementById('clearBtn').addEventListener('click', function() {
  // Check if history exists
  const history = JSON.parse(localStorage.getItem('currencyHistory')) || [];
  
  if (history.length === 0) {
    // If already empty
    alert("Your history is already clear!");
    return;
  }

  // If history exists, ask for confirmation
  const userConfirmed = confirm("Are you sure you want to delete ALL history?");
  
  if (userConfirmed) {
    // Clear history if user confirms
    localStorage.removeItem('currencyHistory');
    
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
