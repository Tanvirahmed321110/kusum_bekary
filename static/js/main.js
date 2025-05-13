
// Open Modal Function
function openModalF(modalId, btnSelector) {
    const modal = document.getElementById(modalId)
    const overlay = document.querySelector('.modal-overlay');
    const btns = document.querySelectorAll(btnSelector)


    btns.forEach(btn => {
        btn.addEventListener('click', function () {
            modal.classList.add('active')
            overlay.classList.add('active')
        })
    })
}



// show and hide password
function showHidePassordF() {
    const btns = document.querySelectorAll('.show-hide-password')
    if (btns) {
        btns.forEach(btn => {
            btn.addEventListener('click', function () {
                const parent = this.closest('.my-input-control');
                const passwordInput = parent.querySelector('input');
                const icon = this.querySelector('i');

                if (passwordInput.type === 'password') {
                    passwordInput.type = 'text';
                    icon.classList.remove('ri-eye-line');
                    icon.classList.add('ri-eye-off-line');
                } else {
                    passwordInput.type = 'password';
                    icon.classList.remove('ri-eye-off-line');
                    icon.classList.add('ri-eye-line');
                }
            });
        })
    }
}
showHidePassordF()



// =====  For Mobile Menu  =====
function mobileMenuF() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');

    if (mobileMenuBtn) {
        const sidebar = document.getElementById('sidebar');

        mobileMenuBtn.addEventListener('click', function () {
            sidebar.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active'); // Toggle X animation
        });
    }
}
mobileMenuF();




/// For click dropdown
function dropdownToggleF() {
    const btns = document.querySelectorAll('.dropdown-btn');

    if (btns) {
        btns.forEach(btn => {
            btn.addEventListener('click', function () {
                const dropdownParent = btn.closest('.click-dropdown-parent');
                const dropdown = dropdownParent.querySelector('.click-dropdown')
                if (dropdown) {
                    dropdown.classList.toggle('active');
                }

                // Close all other dropdowns
                document.querySelectorAll('.click-dropdown').forEach(other => {
                    if (other !== dropdown) other.classList.remove('active');
                });

            });
        });
    }



    // Click outside to close
    document.addEventListener('click', function (e) {
        document.querySelectorAll('.click-dropdown').forEach(dropdown => {
            if (!e.target.closest('.click-dropdown-parent')) {
                dropdown.classList.remove('active');
            }
        });
    });
}
dropdownToggleF()




// sidebar close and open function
function sidebarCloseOpenF() {
    const sidebar = document.getElementById('sidebar')
    const sidebarBtn = document.getElementById('sidebar-btn')
    const mainContent = document.getElementById('main-contents')

    if (sidebar) {
        sidebarBtn.addEventListener('click', function () {
            sidebar.classList.toggle('close')
            mainContent.classList.toggle('active')
        })
    }
}
sidebarCloseOpenF()


// Open and close modal
function closeAndOpenF(closeButtonId, closeModalId, openModalId) {
    const closeButton = document.getElementById(closeButtonId);
    const closeModal = document.getElementById(closeModalId);
    const openModal = document.getElementById(openModalId);

    closeButton.addEventListener('click', function () {
        closeModal.classList.remove('active');

        openModal.classList.add('active');
    });
}


// close button function
function closeButtonF() {
    document.addEventListener('DOMContentLoaded', () => {
        const closeButtons = document.querySelectorAll('.modal-close-btn');
        const overlay = document.querySelector('.modal-overlay');
        const modals = document.querySelectorAll('.my-modal');

        modals.forEach(modal => {
            modal.addEventListener('click', function (e) {
                // If clicked directly on the modal (not on modal-content)
                if (e.target === modal) {
                    modal.classList.remove('active');
                    document.querySelector('.modal-overlay')?.classList.remove('active');
                }
            });
        });

        closeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const modal = btn.closest('.my-modal');
                const notification = btn.closest('.notification');

                if (modal) {
                    modal.classList.remove('active');
                    overlay?.classList.remove('active'); // only modal close e overlay off
                }

                if (notification) {
                    notification.classList.remove('active');
                }
            });
        });


        // Close when overlay is clicked
        if (overlay) {
            overlay.addEventListener('click', () => {
                document.querySelectorAll('.my-modal.active').forEach(modal => {
                    modal.classList.remove('active');
                });
                overlay.classList.remove('active');
            });
        }
    });
}












// delete function
function deleteF(itemClass, btnsClass) {
    const buttons = document.querySelectorAll(btnsClass)
    buttons.forEach((btn) => {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            event.stopPropagation();

            const item = btn.closest(itemClass);
            console.log(item)
            if (item) {
                item.remove();
            } else {
                console.warn("No parent item found for this button.");
            }
        });
    });
}

deleteF('.shopping-cart-modal .item', '.shopping-cart-modal .delete-btn')












// funciton active
function activeF(selector) {
    const items = document.querySelectorAll(selector)

    items.forEach(item => {
        item.addEventListener('click', function () {
            items.forEach(single => {
                single.classList.remove('active')
            })
            item.classList.add('active')
        })
    })
}












// Tab Function
function tabF(tabSelector, contentSelector) {

    document.querySelectorAll(tabSelector).forEach(tab => {
        tab.addEventListener('click', function () {
            document.querySelectorAll(tabSelector).forEach(t => t.classList.remove('active'));
            document.querySelectorAll(contentSelector).forEach(tc => tc.classList.remove('active'));

            this.classList.add('active');
            document.getElementById(this.dataset.tab).classList.add('active');
        });
    });
}





// when page reload then show modal
function pageReloadModal() {
    const modal = document.getElementById('page-reload-modal');

    if (!modal) return; // Exit if modal does not exist

    window.addEventListener("load", function () {
        setTimeout(() => {
            modal.classList.add('active');

            setTimeout(() => {
                modal.style.display = "none";
            }, 5000); // Hide after 5 seconds

        }, 2000); // Show after 2 seconds
    });
}

pageReloadModal();












// ==========================  For index html page   ==============================
closeButtonF();
openModalF('new-modal', '.new-modal-open-btn');
activeF('.sidebar-main-menu')
activeF('.sidebar-dropdown-menu .dropdown-item')


// For Dark and Night Mood
const buttons = document.querySelectorAll('.dark-light button');

if (buttons) {
    const activeBg = document.querySelector('.active-bg');

    buttons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            // Move background to correct position
            activeBg.style.transform = `translateX(${index * 100}%)`;

            // Optional: update button active class
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}


// document.querySelectorAll('.sidebar-main-menu').forEach(menu => {
//     menu.addEventListener('click', function (e) {
//         e.preventDefault();

//         // Find the dropdown menu next to the clicked link
//         const dropdown = this.nextElementSibling;

//         // Toggle the active class
//         dropdown.classList.toggle('active');

//         // Optionally toggle icon direction
//         const icon = this.querySelector('i');
//         if (icon) {
//             icon.classList.toggle('active');
//         }
//     });
// });

document.querySelectorAll('.sidebar-main-menu').forEach(menu => {
    menu.addEventListener('click', function (e) {
        // e.preventDefault();

        // Get the parent <li> (menu item)
        const menuItem = this.parentElement;

        // Find dropdown inside that li
        const clickedDropdown = menuItem.querySelector('.sidebar-dropdown-menu');

        // Close all other dropdowns
        document.querySelectorAll('.sidebar-menu > li').forEach(otherItem => {
            const otherDropdown = otherItem.querySelector('.sidebar-dropdown-menu');
            const otherIcon = otherItem.querySelector('i');

            if (otherItem !== menuItem) {
                otherDropdown?.classList.remove('active');
                otherIcon?.classList.remove('active');
            }
        });

        // Toggle the current dropdown
        clickedDropdown?.classList.toggle('active');

        // Toggle icon rotation
        const icon = this.querySelector('i');
        if (icon) {
            icon.classList.toggle('active');
        }
    });
});








// ==========================  For Login html page   ==============================
tabF('.login-tab-item', '.form-item')