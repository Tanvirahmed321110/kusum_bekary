const searchInput = document.querySelector('.search-box input');
const searchDropdown = document.getElementById('searchDropdown');

// Dummy suggestion list
const products = ['men shirt', 'formal complete set', 'formal pent', 'iPad', 'AirPods', 'Apple Watch'];

// Function to render dropdown items
function renderDropdown(items) {
    if (items.length > 0) {
        searchDropdown.innerHTML = items.map(item => `<li class="item">${item}</li>`).join('');
    } else {
        searchDropdown.innerHTML = `<li class="item no-result">No results found</li>`;
    }
}

// Show all products when input is focused
searchInput.addEventListener('focus', function () {
    renderDropdown(products);
    searchDropdown.classList.add('active');
});

// Filter suggestions on input
searchInput.addEventListener('input', function () {
    const value = this.value.trim().toLowerCase();
    const filtered = products.filter(item => item.toLowerCase().includes(value));
    renderDropdown(filtered);
    searchDropdown.classList.add('active');
});

// Click dropdown item → fill input + open modal
searchDropdown.addEventListener('mousedown', function (e) {
    // Use mousedown instead of click to handle before input blur
    if (e.target.classList.contains('item') && !e.target.classList.contains('no-result')) {
        searchInput.value = e.target.textContent;
        searchDropdown.classList.remove('active');

        // Open modal after selecting item
        openModalF('magerment-modal', '.search-box .search-input');
    }
});

// Click outside search box → hide dropdown
document.addEventListener('click', function (e) {
    if (!e.target.closest('.search-box')) {
        searchDropdown.classList.remove('active');
    }
});



// print invoice
document.getElementById('print-invoice').addEventListener('click', function () {
    let invoiceWindow = window.open('invoice.html', '_blank');

    invoiceWindow.onload = function () {
        invoiceWindow.print();
    };
});



// ======  View Megerment Details Open  ======
openModalF('megerment-view-modal', '.megerment-show-btn')
// ======  Payment Details Modal Open  ======
openModalF('payment-details-modal', '.order-place-btn')
// ======  Payment success Modal Open  ======
openModalF('order-success-modal', '.order-continue-btn')
// ======  magerment  Modal Open  ======
openModalF('magerment-modal', '.products .item')

// ====== close and open modal  =====
closeAndOpenF('order-continue-btn', 'payment-details-modal', 'order-success-modal')
