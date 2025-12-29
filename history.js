// // history.js - Ye alag file banao aur sirf history.html mein include kar


// Show history function
// Ye function history show karega
function showHistory() {
  const tableBody = document.getElementById('tableBody');
  
  // History safely get karo
  let history = [];
  try {
    const storedData = localStorage.getItem("currencyHistory");
    history = storedData ? JSON.parse(storedData) : [];
  } catch (e) {
    console.error("History padhne mein error:", e);
    history = [];
  }

  // Purani rows saaf karo
  tableBody.innerHTML = '';

  // Agar history khali hai to message dikhao
  if (history.length === 0) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td colspan="6" class="py-4 text-gray-500 text-center">
       No conversion history found. Try converting some currencies first!
      </td>
    `;
    tableBody.appendChild(row);
    return;
  }

  // Naye items ko table mein dikhao (newest first)
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

// Page load pe history dikhao
document.addEventListener('DOMContentLoaded', function() {
  showHistory();
  
  // Clear button ka functionality
  document.getElementById('clearBtn').addEventListener('click', function() {
    const history = JSON.parse(localStorage.getItem('currencyHistory')) || [];
    
    if (history.length === 0) {
      alert("History Table already empty!");
      return;
    }

    if (confirm("do you want delete all history ?")) {
      localStorage.removeItem('currencyHistory');
      showHistory(); // Yeh line important hai - table refresh karega
      alert("History deleted successfully!");
    }
  });

  // Sidebar toggle functionality (alag rakh rhe hai )
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

  // Mobile menu button show/hide
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

  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});
// Load history when page loads