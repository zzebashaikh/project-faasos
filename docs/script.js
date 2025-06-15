// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    offset: 100,
    once: true,
    disable: 'mobile'
});

// Menu Data with SVG Data URIs for placeholder images (guaranteed to load)
const menuData = {
    faasos: [
        {
            id: 'f1',
            name: 'Chicken Tikka Wrap',
            description: 'Succulent chicken tikka wrapped in a soft roti with fresh veggies',
            price: 199,
            category: 'non-veg',
            image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=500&auto=format&fit=crop&q=60',
            badges: ['Bestseller', 'Spicy'],
            diet: ['Regular'],
            rating: 4.5,
            deliveryTime: '25-30 min'
        },
        {
            id: 'f2',
            name: 'Paneer Tikka Wrap',
            description: 'Grilled paneer tikka with mint chutney and fresh veggies',
            price: 179,
            category: 'veg',
            image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500&auto=format&fit=crop&q=60',
            badges: ['Veg'],
            diet: ['Vegetarian'],
            rating: 4.3,
            deliveryTime: '25-30 min'
        },
        {
            id: 'f3',
            name: 'Wrap Combo',
            description: '2 wraps with fries and a drink',
            price: 299,
            category: 'combo',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60',
            badges: ['Combo'],
            diet: 'keto',
            deliveryTime: '30 min'
        }
    ],
    behrouz: [
        {
            id: 'b1',
            name: 'Chicken Biryani',
            description: 'Fragrant basmati rice cooked with tender chicken and special spices',
            price: 299,
            category: 'non-veg',
            image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop&q=60',
            badges: ['Bestseller', 'Spicy'],
            diet: ['Regular'],
            rating: 4.7,
            deliveryTime: '30-35 min'
        },
        {
            id: 'b2',
            name: 'Veg Biryani',
            description: 'Fragrant basmati rice with mixed vegetables and aromatic spices',
            price: 249,
            category: 'veg',
            image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&auto=format&fit=crop&q=60',
            badges: ['Popular'],
            diet: 'vegan',
            deliveryTime: '30 min'
        },
        {
            id: 'b3',
            name: 'Family Pack Biryani',
            description: 'Large portion of biryani with raita and salad',
            price: 399,
            category: 'non-veg',
            image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=500&auto=format&fit=crop&q=60',
            badges: ['Family Pack'],
            diet: 'keto',
            deliveryTime: '40 min'
        }
    ],
    'oven-story': [
        {
            id: 'o1',
            name: 'Margherita Pizza',
            description: 'Classic cheese and tomato pizza with fresh basil',
            price: 299,
            category: 'veg',
            image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&auto=format&fit=crop&q=60',
            badges: ['Classic'],
            diet: 'vegan',
            deliveryTime: '25 min'
        },
        {
            id: 'o2',
            name: 'Pepperoni Pizza',
            description: 'Pepperoni, mozzarella, and tomato sauce',
            price: 349,
            category: 'non-veg',
            image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&auto=format&fit=crop&q=60',
            badges: ['Popular'],
            diet: 'keto',
            deliveryTime: '30 min'
        },
        {
            id: 'o3',
            name: 'Veggie Supreme Pizza',
            description: 'Loaded with veggies, cheese, and herbs',
            price: 399,
            category: 'pizza',
            image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60',
            badges: ['Supreme'],
            diet: 'vegan',
            deliveryTime: '35 min'
        }
    ],
    mandarin: [
        {
            id: 'm1',
            name: 'Veg Hakka Noodles',
            description: 'Stir-fried noodles with fresh vegetables and sauces',
            price: 249,
            category: 'veg',
            image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&auto=format&fit=crop&q=60',
            badges: ['Noodles'],
            diet: 'vegan',
            deliveryTime: '20 min'
        },
        {
            id: 'm2',
            name: 'Chicken Manchurian',
            description: 'Chicken balls in spicy Manchurian sauce',
            price: 299,
            category: 'non-veg',
            image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=500&auto=format&fit=crop&q=60',
            badges: ['Popular'],
            diet: 'keto',
            deliveryTime: '25 min'
        },
        {
            id: 'm3',
            name: 'Spring Rolls',
            description: 'Crispy rolls stuffed with veggies and served with dip',
            price: 349,
            category: 'chinese',
            image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&auto=format&fit=crop&q=60',
            badges: ['Starter'],
            diet: 'vegan',
            deliveryTime: '30 min'
        }
    ],
    combos: [
        {
            id: 'combo1',
            name: 'Family Feast',
            description: 'Biryani + Pizza + 2 Wraps',
            price: 699,
            originalPrice: 999,
            category: 'combo',
            image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=500&auto=format&fit=crop&q=60',
            badges: ['Best Value'],
            items: [
                { id: 'b1', quantity: 1 }, // Chicken Biryani
                { id: 'o1', quantity: 1 }, // Margherita Pizza
                { id: 'f1', quantity: 2 }  // Chicken Tikka Wrap
            ],
            deliveryTime: '35-40 min'
        },
        {
            id: 'combo2',
            name: 'Quick Bite',
            description: 'Wrap + Fries + Drink',
            price: 299,
            originalPrice: 399,
            category: 'combo',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60',
            badges: ['Popular'],
            items: [
                { id: 'f1', quantity: 1 }, // Chicken Tikka Wrap
                { id: 'f3', quantity: 1 }  // Wrap Combo (includes fries and drink)
            ],
            deliveryTime: '25-30 min'
        }
    ]
};

// Cart Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM Elements
const elements = {
    mobileMenu: document.querySelector('.mobile-menu-toggle'),
    navLinks: document.querySelector('.nav-links'),
    searchToggle: document.querySelector('.search-btn'),
    searchOverlay: document.querySelector('.search-overlay'),
    searchClose: document.querySelector('.close-search'),
    searchInput: document.querySelector('.search-input'),
    searchFilters: document.querySelectorAll('.filter-chip'),
    cartToggle: document.querySelector('.cart-btn'),
    cartSidebar: document.querySelector('.cart-sidebar'),
    cartClose: document.querySelector('.close-cart'),
    cartItems: document.querySelector('.cart-items'),
    cartCount: document.querySelector('.cart-count'),
    tabButtons: document.querySelectorAll('.tab-btn'),
};

// ************ GLOBAL FUNCTIONS START ************

// Event Listeners for all interactive elements
function initializeEventListeners() {
    // Brand Tab Buttons
    elements.tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const brand = this.dataset.brand;
            elements.tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            document.querySelectorAll('.menu-section').forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById(`${brand}-menu`).classList.add('active');
            
            const activeMenuSection = document.getElementById(`${brand}-menu`);
            if (activeMenuSection) {
                const filterButtons = activeMenuSection.querySelectorAll('.filter-btn');
                filterButtons.forEach(btn => btn.classList.remove('active'));
                const allFilterBtn = activeMenuSection.querySelector('.filter-btn[data-filter="all"]');
                if (allFilterBtn) {
                    allFilterBtn.classList.add('active');
                }
                filterMenuItems('all', brand); // Pass brand to filterMenuItems
            }
        });
    });

    // Menu Filter Buttons (using event delegation for sections)
    document.querySelectorAll('.menu-section').forEach(section => {
        const brand = section.id.replace('-menu', ''); // Correctly extract brand (e.g., 'oven-story')
        section.querySelectorAll('.filter-btn').forEach(button => {
            button.addEventListener('click', function() {
                console.log(`Filter button clicked: ${this.dataset.filter} for brand: ${brand}`);
                const filter = this.dataset.filter;
                section.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                filterMenuItems(filter, brand); // Pass brand to filterMenuItems
            });
        });
    });

    // Add to Cart Buttons - Event delegation for dynamically added elements
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const itemId = e.target.dataset.itemId; // Use data-item-id
            addToCart(itemId);
        }
    });

    // Cart Quantity Controls - Event delegation
    elements.cartItems.addEventListener('click', function(e) {
        if (e.target.classList.contains('quantity-minus')) {
            const itemId = e.target.dataset.id;
            updateQuantity(itemId, -1);
        } else if (e.target.classList.contains('quantity-plus')) {
            const itemId = e.target.dataset.id;
            updateQuantity(itemId, 1);
        } else if (e.target.classList.contains('remove-item')) {
            const itemId = e.target.dataset.id;
            removeFromCart(itemId);
        }
    });

    // Checkout Button
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            // Redirect to track-order.html after checkout
            cart = [];
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
            elements.cartSidebar.classList.remove('active');
            window.location.href = 'track-order.html'; 
        });
    }

    // Mobile Menu Toggle
    if (elements.mobileMenu && elements.navLinks) {
        elements.mobileMenu.addEventListener('click', () => {
            elements.navLinks.classList.toggle('active');
            elements.mobileMenu.classList.toggle('active');
        });
    
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.navbar') && elements.navLinks.classList.contains('active')) {
                elements.navLinks.classList.remove('active');
                elements.mobileMenu.classList.remove('active');
            }
        });
    }

    // Search Functionality
    if (elements.searchToggle && elements.searchOverlay) {
        elements.searchToggle.addEventListener('click', () => {
            elements.searchOverlay.classList.add('active');
            elements.searchInput.focus();
        });
    
        elements.searchClose.addEventListener('click', () => {
            elements.searchOverlay.classList.remove('active');
        });
    
        // Search input handler
        elements.searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const activeFilterElement = document.querySelector('.search-filters .filter-chip.active');
            const activeFilter = activeFilterElement ? activeFilterElement.dataset.filter : 'all';
            searchItems(query, activeFilter);
        });
    
        // Search filter chips
        elements.searchFilters.forEach(chip => {
            chip.addEventListener('click', function() {
                elements.searchFilters.forEach(c => c.classList.remove('active'));
                this.classList.add('active');
                const query = elements.searchInput.value.toLowerCase();
                searchItems(query, this.dataset.filter);
            });
        });
    }

    // Cart Toggle and Close Button
    if (elements.cartToggle && elements.cartSidebar) {
        elements.cartToggle.addEventListener('click', toggleCart);
        elements.cartClose.addEventListener('click', toggleCart);
    
        // Close cart when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.cart-sidebar') && 
                !e.target.closest('.cart-btn') &&
                elements.cartSidebar.classList.contains('active')) {
                toggleCart();
            }
        });
    }

    // Initial setup calls moved outside, to be called directly by DOMContentLoaded
}

// Search Items Function
function searchItems(query, filter) {
    const results = [];
    const searchResults = document.querySelector('.search-results');
    
    Object.values(menuData).forEach(brandItems => {
        brandItems.forEach(item => {
            if (filter === 'all' || item.category === filter) {
                if (item.name.toLowerCase().includes(query) ||
                    item.description.toLowerCase().includes(query)) {
                    results.push(item);
                }
            }
        });
    });

    searchResults.innerHTML = results.map(item => `
        <div class="search-result-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="result-content">
                <h4>${item.name}</h4>
                <p>${item.description}</p>
                <div class="result-footer">
                    <span class="price">₹${item.price}</span>
                    <button class="btn-add-cart" data-item="${item.id}">Add to Cart</button>
                </div>
            </div>
        </div>
    `).join('') || '<p class="no-results">No items found</p>';
}

function toggleCart() {
    elements.cartSidebar.classList.toggle('active');
    document.body.style.overflow = elements.cartSidebar.classList.contains('active') ? 'hidden' : '';
}

function addToCart(itemId) {
    const existingItemIndex = cart.findIndex(item => item.id === itemId);

    if (existingItemIndex > -1) {
        // Item already in cart, increment quantity
        cart[existingItemIndex].quantity++;
    } else {
        // Check if it's a combo
        const combo = menuData.combos.find(combo => combo.id === itemId);
        if (combo) {
            // Add combo items to cart
            combo.items.forEach(comboItem => {
                const menuItem = findMenuItem(comboItem.id);
                if (menuItem) {
                    const existingComboItemIndex = cart.findIndex(item => item.id === menuItem.id);
                    if (existingComboItemIndex > -1) {
                        cart[existingComboItemIndex].quantity += comboItem.quantity;
                    } else {
                        cart.push({ ...menuItem, quantity: comboItem.quantity });
                    }
                }
            });
        } else {
            // Regular menu item
            const itemToAdd = findMenuItem(itemId);
            if (itemToAdd) {
                cart.push({ ...itemToAdd, quantity: 1 });
            }
        }
    }
    updateCart();
    showNotification(`${findMenuItem(itemId)?.name || 'Combo'} added to cart!`);
}

function findMenuItem(itemId) {
    for (const brand in menuData) {
        const item = menuData[brand].find(item => item.id === itemId);
        if (item) {
            return item;
        }
    }
    return null;
}

function updateCart() {
    elements.cartItems.innerHTML = '';
    let total = 0;
    let totalItems = 0;

    console.log('Cart length:', cart.length);
    console.log('Cart contents:', cart);

    if (cart.length === 0) {
        elements.cartItems.innerHTML = '<p class="empty-cart-message">Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            const cartItemHTML = `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <p>₹${item.price.toFixed(2)}</p>
                        <div class="cart-item-controls">
                            <button class="quantity-minus" data-id="${item.id}">-</button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="quantity-plus" data-id="${item.id}">+</button>
                        </div>
                    </div>
                    <button class="remove-item" data-id="${item.id}">&times;</button>
                </div>
            `;
            elements.cartItems.insertAdjacentHTML('beforeend', cartItemHTML);
            total += item.price * item.quantity;
            totalItems += item.quantity;
        });
    }

    document.querySelector('.total-amount').textContent = `₹${total.toFixed(2)}`;
    elements.cartCount.textContent = totalItems;

    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.disabled = cart.length === 0;
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateQuantity(itemId, change) {
    const itemIndex = cart.findIndex(item => item.id === itemId);
    if (itemIndex > -1) {
        cart[itemIndex].quantity += change;
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1); // Remove item if quantity is 0 or less
        }
        updateCart();
    }
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCart();
    showNotification('Item removed from cart.');
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    if (notification) {
        notification.textContent = message;
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
}

// Helper to create menu item HTML
function createMenuItemHTML(item, brand) {
    console.log(`Creating menu item HTML for ${item.name} with image: ${item.image}`);
    const ratingHTML = item.rating ? `<span class="item-rating">\u2605 ${item.rating}</span>` : '';
    const deliveryTimeHTML = item.deliveryTime ? `<span class="item-time">${item.deliveryTime}</span>` : '';

    const menuItemHTML = `
        <div class="menu-item" data-category="${item.category}" data-id="${item.id}" data-aos="fade-up">
            <div class="item-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="console.error('Failed to load image:', this.src)" onload="console.log('Successfully loaded image:', this.src)">
                <div class="item-badges-container">
                    ${item.badges ? item.badges.map(badge => `<span class="item-badge">${badge}</span>`).join('') : ''}
                </div>
            </div>
            <div class="item-details">
                <h3 class="item-name">${item.name}</h3>
                <p class="item-description">${item.description}</p>
                <div class="item-meta">
                    <span class="item-price">₹${item.price}</span>
                    ${ratingHTML}
                    ${deliveryTimeHTML}
                </div>
                <button class="add-to-cart-btn" data-item-id="${item.id}">
                    Add to Cart
                </button>
            </div>
        </div>
    `;
    console.log(`Generated HTML for ${item.name}:`, menuItemHTML);
    return menuItemHTML;
}

// Filter menu items based on category
function filterMenuItems(filter, brand) {
    console.log(`Entering filterMenuItems. Brand: ${brand}, Filter: ${filter}`);
    const menuItemsContainer = document.querySelector(`#${brand}-menu .menu-items`);
    if (!menuItemsContainer) {
        console.error(`Menu items container not found for brand: ${brand}`);
        return;
    }
    
    const items = menuData[brand];
    if (!items) {
        console.error(`No menu data found for brand: ${brand}`);
        menuItemsContainer.innerHTML = '<p class="no-items">Menu items not available for this brand.</p>';
        return;
    }

    const filteredItems = filter === 'all' ? items : items.filter(item => item.category === filter);
    console.log(`Filter applied. Number of filtered items: ${filteredItems.length}. Items:`, filteredItems);
    
    menuItemsContainer.innerHTML = filteredItems.length > 0 
        ? filteredItems.map(item => createMenuItemHTML(item, brand)).join('')
        : '<p class="no-items">No items found for this category.</p>';
    console.log(`Menu items container for ${brand} updated.`);
}

// Initialize Menu when page loads
function initializeMenu() {
    console.log('Initializing menu...');
    
    const menuSections = document.querySelectorAll('.menu-section');
    console.log('Found menu sections:', menuSections.length);
    
    menuSections.forEach(section => {
        const brand = section.id.replace('-menu', ''); // Extracts 'faasos', 'behrouz', 'oven-story', 'mandarin'
        console.log('Processing brand:', brand);
        
        const menuItemsContainer = section.querySelector('.menu-items');
        if (!menuItemsContainer) {
            console.error(`No menu-items container found for ${brand}`);
            return;
        }
        
        if (menuData[brand] && Array.isArray(menuData[brand])) {
            console.log(`Found ${menuData[brand].length} items for ${brand}`);
            menuItemsContainer.innerHTML = menuData[brand]
                .map(item => createMenuItemHTML(item, brand))
                .join('');
        } else {
            console.error(`No menu data found for brand: ${brand}. Please check menuData structure.`);
            menuItemsContainer.innerHTML = '<p class="no-items">Menu items not available for this brand.</p>';
        }
    });

    // initializeEventListeners(); // Removed duplicate call
    console.log('Menu initialization complete');
}

// ************ GLOBAL FUNCTIONS END ************

// Ensure all event listeners are initialized once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing menu and cart...');
    initializeEventListeners();
    updateCart(); 

    // Add subscription button handler
    const subscribeBtn = document.querySelector('.subscription-banner .btn');
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', () => {
            alert('Subscription feature coming soon! Stay tuned for updates.');
        });
    }

    // Handle Franchise Form Submission
    const franchiseForm = document.getElementById('franchise-form');
    if (franchiseForm) {
        franchiseForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            
            // In a real application, you would collect form data and send it to a server here.
            // const formData = new FormData(franchiseForm);
            // for (let [key, value] => formData.entries()) { console.log(`${key}: ${value}`); }

            alert('Your franchise application has been submitted successfully! We will get back to you soon.');
            franchiseForm.reset(); // Clear the form fields
        });
    }

    // Handle Career Section links
    const careerViewButtons = document.querySelectorAll('.careers-section .btn.secondary');
    careerViewButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            alert(`You clicked to view positions for: ${this.closest('.category')?.querySelector('h3')?.textContent || 'a job category'}. (This is a demo. In a real app, this would lead to job listings.)`);
        });
    });

    const careerApplyButtons = document.querySelectorAll('.careers-section .job-card .btn.primary');
    careerApplyButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            alert(`You clicked to apply for: ${this.closest('.job-card')?.querySelector('h4')?.textContent || 'a job'}. (This is a demo. In a real app, this would lead to an application form.)`);
        });
    });
}); 