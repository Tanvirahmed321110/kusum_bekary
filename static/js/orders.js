

// show magerment modal
openModalF('megerment-view-modal', '.megerment-show-btn')

const listView = document.getElementById('order-list-view')
const detailsView = document.getElementById('order-details-view')
const backToOrderListView = document.getElementById('back-order-list-view')

// when we will click back all order button
backToOrderListView.addEventListener('click', function () {
    detailsView.classList.add('my-d-none')
    listView.classList.remove('my-d-none')
})


// show order details view
document.querySelectorAll('.details-view-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        listView.classList.add('my-d-none')
        detailsView.classList.remove('my-d-none')
    })
})


// active class add for mark button
activeF('.mark-btn')