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
            image: 'https://b.zmtcdn.com/data/pictures/chains/0/37750/5fe78176d3acf65c617ceddeac7ffb28.jpg?fit=around|960:500&crop=960:500;*,*',
            badges: ['Bestseller', 'Spicy'],
            diet: ['Regular'],
            rating: 4.5,
            deliveryTime: '25-30 min'
        },
        {
            id: 'f2',
            name: 'Paneer Tikka Wrap',
            description: 'Grilled paneer tikka wrapped in a soft roti with fresh veggies',
            price: 179,
            category: 'veg',
            image: 'https://static.india.com/wp-content/uploads/2024/10/FEATURE-2024-10-21T050557.205.jpg?impolicy=Medium_Widthonly&w=350&h=263',
            badges: ['Bestseller', 'Spicy'],
            diet: ['Regular'],
            rating: 4.3,
            deliveryTime: '25-30 min'
        },
        {
            id: 'f3',
            name: 'Wrap Combo',
            description: '2 wraps of your choice with fries and a drink',
            price: 299,
            category: 'combo',
            image: 'https://cdn.uengage.io/uploads/49314/image-444565-1740756080.jpeg',
            badges: ['Combo', 'Value'],
            diet: ['Regular'],
            rating: 4.4,
            deliveryTime: '30-35 min'
        }
    ],
    behrouz: [
        {
            id: 'b1',
            name: 'Chicken Biryani',
            description: 'Fragrant basmati rice cooked with tender chicken and aromatic spices',
            price: 249,
            category: 'non-veg',
            image: 'https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg',
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
            description: 'Large portion of biryani perfect for 4-5 people',
            price: 599,
            category: 'combo',
            image: 'https://kadhaikhana.com/wp-content/uploads/2023/05/Chicken-dum-Biryani-family-pack.webp',
            badges: ['Family Pack', 'Bestseller'],
            diet: ['Regular'],
            rating: 4.6,
            deliveryTime: '35-40 min'
        }
    ],
    'oven-story': [
        {
            id: 'o1',
            name: 'Margherita Pizza',
            description: 'Classic pizza with tomato sauce, mozzarella cheese and fresh basil',
            price: 199,
            category: 'veg',
            image: 'https://cdn.shopify.com/s/files/1/0274/9503/9079/files/20220211142754-margherita-9920_5a73220e-4a1a-4d33-b38f-26e98e3cd986.jpg?v=1723650067',
            badges: ['Bestseller', 'Classic'],
            diet: ['Vegetarian'],
            rating: 4.5,
            deliveryTime: '25-30 min'
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
            description: 'Loaded with bell peppers, onions, mushrooms, olives and tomatoes',
            price: 249,
            category: 'veg',
            image: 'https://www.thursdaynightpizza.com/wp-content/uploads/2022/06/veggie-pizza-overhead-sliced-720x900.png',
            badges: ['Popular', 'Loaded'],
            diet: ['Vegetarian'],
            rating: 4.6,
            deliveryTime: '25-30 min'
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
            image: 'https://mostlymasala.com/wp-content/uploads/2021/12/2F7CFC73-F617-467A-BB4A-F35D7BB1E339-500x500.jpeg',
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
            image: 'https://b2b.chickenofthesea.com/wp-content/uploads/2022/06/food-service-recipes-Crispy-Fried-Crab-Spring-Rolls.jpg',
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
            image: 'https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=600,height=400,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/f3ee2199-2cff-43d5-bb62-15cb0e6071f2.jpg',
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
            image: 'https://b.zmtcdn.com/data/dish_photos/1ba/f4917f9b32490ed1c1f79f190b0ef1ba.jpeg',
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
    checkoutBtn: document.querySelector('.checkout-btn'),
    totalAmount: document.querySelector('.cart-footer .total-amount'),
    searchSuggestions: document.querySelector('.search-suggestions'),
};

// Flatten all menu items into a single array for searching
const allMenuItems = [];
for (const brand in menuData) {
    if (Array.isArray(menuData[brand])) {
        menuData[brand].forEach(item => {
            allMenuItems.push({ ...item, brand: brand }); // Add brand information to each item
        });
    }
}

// ************ GLOBAL FUNCTIONS START ************

// Event Listeners for all interactive elements
let listenersInitialized = false;

function initializeEventListeners() {
    if (listenersInitialized) {
        console.log("Event listeners already initialized, skipping.");
        return;
    }

    console.log("Initializing event listeners...");

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
            e.preventDefault(); // Prevent default if it's a form button or link
            const itemId = e.target.dataset.itemId; // Use data-item-id
            addToCart(itemId);
        } 
    });

    // Cart Quantity Controls - Event delegation on cartSidebar container
    elements.cartSidebar.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default action for any click within the sidebar
        e.stopPropagation(); // Stop event propagation to higher elements
        console.log("Click event detected on cartSidebar container. Target:", e.target);

        if (e.target.classList.contains('minus-btn')) {
            // e.preventDefault(); // Already handled by the parent listener
            // e.stopPropagation(); // Already handled by the parent listener
            const itemId = e.target.dataset.id;
            console.log(`Minus button clicked. Item ID: ${itemId}`);
            updateQuantity(itemId, -1);
        } else if (e.target.classList.contains('plus-btn')) {
            // e.preventDefault(); // Already handled by the parent listener
            // e.stopPropagation(); // Already handled by the parent listener
            const itemId = e.target.dataset.id;
            console.log(`Plus button clicked. Item ID: ${itemId}`);
            updateQuantity(itemId, 1);
        } else if (e.target.classList.contains('remove-item')) {
            // e.preventDefault(); // Already handled by the parent listener
            // e.stopPropagation(); // Already handled by the parent listener
            const itemId = e.target.dataset.id;
            console.log(`Remove button clicked. Item ID: ${itemId}`);
            removeFromCart(itemId);
        }
    });

    // Checkout Button
    const checkoutBtn = elements.checkoutBtn;
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', handleCheckout);
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
            // Optionally, clear previous search results when opening search overlay
            document.querySelector('.search-results').innerHTML = '';
            elements.searchSuggestions.classList.remove('active'); // Hide suggestions initially
        });
    
        elements.searchClose.addEventListener('click', () => {
            elements.searchOverlay.classList.remove('active');
            elements.searchSuggestions.classList.remove('active'); // Hide suggestions when closing search
            elements.searchInput.value = ''; // Clear search input on close
            document.querySelector('.search-results').innerHTML = ''; // Clear search results on close
        });
    
        // Live search input handler for suggestions
        elements.searchInput.addEventListener('input', (e) => {
            const query = e.target.value;
            handleLiveSearchSuggestions(query); // Call new function for live suggestions
        });

        // Handle Enter key for full search
        elements.searchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                const query = e.target.value;
                const activeFilterElement = document.querySelector('.search-filters .filter-chip.active');
                const activeFilter = activeFilterElement ? activeFilterElement.dataset.filter : 'all';
                displayFullSearchResults(query, activeFilter); // Call for full search results
            }
        });

        // Hide suggestions when search input loses focus, but allow clicks on suggestions
        elements.searchInput.addEventListener('blur', () => {
            // Use a timeout to allow click event on suggestion to register first
            setTimeout(() => {
                if (!elements.searchSuggestions.matches(':hover')) { // Only hide if mouse is not over suggestions
                    elements.searchSuggestions.classList.remove('active');
                }
            }, 100); 
        });

        elements.searchInput.addEventListener('focus', () => {
            // Re-show suggestions if there's text in the input when focused
            if (elements.searchInput.value.trim() !== '') {
                handleLiveSearchSuggestions(elements.searchInput.value);
            }
        });
    
        // Search filter chips - now trigger full search
        elements.searchFilters.forEach(chip => {
            chip.addEventListener('click', function() {
                elements.searchFilters.forEach(c => c.classList.remove('active'));
                this.classList.add('active');
                const query = elements.searchInput.value;
                displayFullSearchResults(query, this.dataset.filter); // Trigger full search with filter
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

    listenersInitialized = true; // Set the flag after all listeners are set
}

// Helper to create a search suggestion item HTML
function createSuggestionItemHTML(item) {
    return `
        <div class="suggestion-item" data-item-id="${item.id}" data-action="scroll">
            <img src="${item.image}" alt="${item.name}">
            <div class="suggestion-item-details">
                <div class="suggestion-item-name">${item.name}</div>
                <div class="suggestion-item-brand">${item.brand.charAt(0).toUpperCase() + item.brand.slice(1)}</div>
            </div>
            <div class="suggestion-item-price">₹${item.price}</div>
        </div>
    `;
}

// Helper to create a search result item HTML for the full search results area
function createSearchResultItemHTML(item) {
    return `
        <div class="search-result-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="result-content">
                <h4>${item.name}</h4>
                <p>${item.description}</p>
                <div class="result-footer">
                    <span class="price">₹${item.price}</span>
                    <button class="btn-add-cart" data-item-id="${item.id}">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
}

// Handle search input for auto-suggestions
function handleLiveSearchSuggestions(query) {
    const searchSuggestionsContainer = elements.searchSuggestions;
    const searchResultsContainer = document.querySelector('.search-results'); 

    // Clear previous suggestions and results
    searchSuggestionsContainer.innerHTML = '';
    searchResultsContainer.innerHTML = ''; 
    searchSuggestionsContainer.classList.remove('active');

    if (query.trim() === '') {
        return;
    }

    const normalizedQuery = query.toLowerCase();
    const matchingItems = allMenuItems.filter(item => 
        item.name.toLowerCase().includes(normalizedQuery) ||
        item.description.toLowerCase().includes(normalizedQuery) ||
        (item.brand && item.brand.toLowerCase().includes(normalizedQuery)) ||
        (item.category && item.category.toLowerCase().includes(normalizedQuery))
    );

    if (matchingItems.length > 0) {
        const suggestionsHTML = matchingItems.slice(0, 5).map(item => createSuggestionItemHTML(item)).join('');
        searchSuggestionsContainer.innerHTML = suggestionsHTML;
        searchSuggestionsContainer.classList.add('active');

        // Add click listeners to suggestions
        searchSuggestionsContainer.querySelectorAll('.suggestion-item').forEach(itemElement => {
            itemElement.addEventListener('mousedown', (e) => { // Use mousedown to prevent blur issue
                e.preventDefault(); // Prevent blur from firing before click
            });
            itemElement.addEventListener('click', (e) => {
                e.stopPropagation(); // Stop event propagation to higher elements

                const itemId = itemElement.dataset.itemId;
                const action = itemElement.dataset.action;

                if (action === 'scroll') {
                    const targetMenuItem = document.querySelector(`.menu-item[data-id="${itemId}"]`);
                    if (targetMenuItem) {
                        targetMenuItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        // Also activate the correct brand tab
                        const brand = targetMenuItem.closest('.menu-section').id.replace('-menu', '');
                        const targetTabButton = document.querySelector(`.tab-btn[data-brand="${brand}"]`);
                        if (targetTabButton) {
                            elements.tabButtons.forEach(btn => btn.classList.remove('active'));
                            targetTabButton.classList.add('active');
                            document.querySelectorAll('.menu-section').forEach(section => {
                                section.classList.remove('active');
                            });
                            document.getElementById(`${brand}-menu`).classList.add('active');
                        }
                    }
                } else if (action === 'add-to-cart') {
                    addToCart(itemId);
                }
                elements.searchOverlay.classList.remove('active');
                elements.searchInput.value = '';
                searchSuggestionsContainer.classList.remove('active');
            });
        });

    } else {
        searchSuggestionsContainer.classList.remove('active');
    }
}

// Function to display full search results
function displayFullSearchResults(query, filter = 'all') {
    const searchResultsContainer = document.querySelector('.search-results');
    const searchSuggestionsContainer = elements.searchSuggestions;

    searchSuggestionsContainer.classList.remove('active'); // Hide suggestions
    searchResultsContainer.innerHTML = ''; // Clear previous results

    if (query.trim() === '') {
        searchResultsContainer.innerHTML = '<p class="no-results">Please enter a search term.</p>';
        return;
    }

    const normalizedQuery = query.toLowerCase();
    const filteredItems = allMenuItems.filter(item => {
        const matchesQuery = item.name.toLowerCase().includes(normalizedQuery) ||
                             item.description.toLowerCase().includes(normalizedQuery) ||
                             (item.brand && item.brand.toLowerCase().includes(normalizedQuery)) ||
                             (item.category && item.category.toLowerCase().includes(normalizedQuery));
        
        const matchesFilter = filter === 'all' || item.category === filter || 
                              (filter.startsWith('0-') && item.price <= parseInt(filter.split('-')[1])) ||
                              (filter.includes('-') && item.price >= parseInt(filter.split('-')[0]) && item.price <= parseInt(filter.split('-')[1])) ||
                              (filter.endsWith('+') && item.price >= parseInt(filter.replace('+', ''))) ||
                              (filter === 'keto' && item.diet && (Array.isArray(item.diet) ? item.diet.includes('keto') : item.diet === 'keto')) ||
                              (filter === 'vegan' && item.diet && (Array.isArray(item.diet) ? item.diet.includes('vegan') : item.diet === 'vegan')) ||
                              (filter === 'gluten-free' && item.diet && (Array.isArray(item.diet) ? item.diet.includes('gluten-free') : item.diet === 'gluten-free')) ||
                              (filter === '30' && item.deliveryTime && parseInt(item.deliveryTime.match(/(\d+)/)[0]) <= 30) ||
                              (filter === '45' && item.deliveryTime && parseInt(item.deliveryTime.match(/(\d+)/)[0]) <= 45);
        
        return matchesQuery && matchesFilter;
    });

    if (filteredItems.length > 0) {
        searchResultsContainer.innerHTML = filteredItems.map(item => createSearchResultItemHTML(item)).join('');

        // Add event listeners for add to cart buttons in search results
        searchResultsContainer.querySelectorAll('.btn-add-cart').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const itemId = e.target.dataset.itemId;
                addToCart(itemId);
                elements.searchOverlay.classList.remove('active'); 
                elements.searchInput.value = ''; 
                elements.searchSuggestions.classList.remove('active'); 
            });
        });

    } else {
        searchResultsContainer.innerHTML = '<p class="no-results">No items found matching your search and filters.</p>';
    }
}

// Helper to create menu item HTML for general display
function createMenuItemHTML(item, brand) {
    console.log(`Creating menu item HTML for ${item.name} with image: ${item.image}`);
    const ratingHTML = item.rating ? `<span class="item-rating">&#9733; ${item.rating}</span>` : '';
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

function toggleCart() {
    elements.cartSidebar.classList.toggle('active');
    document.body.style.overflow = elements.cartSidebar.classList.contains('active') ? 'hidden' : '';
}

function addToCart(itemId) {
    console.log(`Attempting to add item: ${itemId} to cart.`);
    const existingItemIndex = cart.findIndex(item => item.id === itemId);

    if (existingItemIndex > -1) {
        // Item already in cart, increment quantity
        cart[existingItemIndex].quantity++;
        console.log(`Incremented quantity for existing item: ${itemId}. New quantity: ${cart[existingItemIndex].quantity}`);
    } else {
        // Check if it's a combo
        const combo = menuData.combos.find(combo => combo.id === itemId);
        if (combo) {
            console.log(`Found combo: ${combo.name}. Processing its constituent items.`);
            // Add combo items to cart
            combo.items.forEach(comboItem => {
                const menuItem = findMenuItem(comboItem.id);
                if (menuItem) {
                    const existingComboItemIndex = cart.findIndex(item => item.id === menuItem.id);
                    if (existingComboItemIndex > -1) {
                        cart[existingComboItemIndex].quantity += comboItem.quantity;
                        console.log(`Added ${comboItem.quantity} to existing combo sub-item: ${menuItem.name}. New quantity: ${cart[existingComboItemIndex].quantity}`);
                    } else {
                        cart.push({ ...menuItem, quantity: comboItem.quantity });
                        console.log(`Added new combo sub-item: ${menuItem.name} with quantity: ${comboItem.quantity}`);
                    }
                } else {
                    console.warn(`Could not find menu item for combo sub-item ID: ${comboItem.id}`);
                }
            });
        } else {
            // Regular menu item
            const itemToAdd = findMenuItem(itemId);
            if (itemToAdd) {
                cart.push({ ...itemToAdd, quantity: 1 });
                console.log(`Added new regular item: ${itemToAdd.name} with quantity: 1`);
            } else {
                console.warn(`Could not find regular menu item for ID: ${itemId}`);
            }
        }
    }
    updateCart();
    showNotification(`${findMenuItem(itemId)?.name || 'Combo'} added to cart!`);
}

function findMenuItem(itemId) {
    console.log(`Searching for menu item with ID: ${itemId}`);
    for (const brand in menuData) {
        const item = menuData[brand].find(item => item.id === itemId);
        if (item) {
            console.log(`Found item: ${item.name} in brand: ${brand}`);
            return item;
        }
    }
    console.warn(`Item with ID ${itemId} not found in any menu brand.`);
    return null;
}

// Function to calculate cart totals
function calculateCartTotals() {
    let subtotal = 0;
    let totalItems = 0;
    
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
        totalItems += item.quantity;
    });
    
    const deliveryFee = 40;
    const taxes = Math.round(subtotal * 0.05); // 5% tax
    const total = subtotal + deliveryFee + taxes;
    
    console.log("calculateCartTotals - Subtotal:", subtotal);
    console.log("calculateCartTotals - Total Items:", totalItems);
    console.log("calculateCartTotals - Delivery Fee:", deliveryFee);
    console.log("calculateCartTotals - Taxes:", taxes);
    console.log("calculateCartTotals - Total:", total);

    return {
        subtotal,
        deliveryFee,
        taxes,
        total,
        totalItems
    };
}

// Function to update cart UI
function updateCart() {
    console.log("updateCart - Cart content:", cart);

    const cartItems = elements.cartItems;
    const cartCount = elements.cartCount;
    const checkoutBtn = elements.checkoutBtn;
    
    if (!cartItems || !cartCount || !checkoutBtn || !elements.totalAmount) {
        console.error("One or more cart UI elements not found. Cannot update cart.");
        return;
    }

    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart-message">Your cart is empty</div>';
        cartCount.textContent = '0';
        cartCount.style.display = 'none'; // Hide the counter when cart is empty
        checkoutBtn.disabled = true;
        checkoutBtn.textContent = 'Checkout';
        elements.totalAmount.textContent = '₹0'; // Ensure total displays 0 when cart is empty
        console.log("updateCart - Cart is empty, total set to ₹0.");
        return;
    }

    // Calculate totals
    const totals = calculateCartTotals();
    
    // Update cart count and total
    cartCount.textContent = totals.totalItems;
    cartCount.style.display = 'flex'; // Show the counter when cart has items
    checkoutBtn.disabled = false;
    checkoutBtn.textContent = `Checkout • ₹${totals.total}`;
    console.log("updateCart - Checkout button text set to:", checkoutBtn.textContent);

    // Update the total amount displayed in the footer
    elements.totalAmount.textContent = `₹${totals.total}`;
    console.log("updateCart - Footer total amount set to:", elements.totalAmount.textContent);

    // Update cart items
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="item-details">
                <h4>${item.name}</h4>
                <p class="item-price">₹${item.price}</p>
            </div>
            <div class="item-quantity">
                <button type="button" class="quantity-btn minus-btn" data-id="${item.id}">-</button>
                <span>${item.quantity}</span>
                <button type="button" class="quantity-btn plus-btn" data-id="${item.id}">+</button>
            </div>
        </div>
    `).join('');

    // Add cart summary
    const cartSummary = document.createElement('div');
    cartSummary.className = 'cart-summary';
    cartSummary.innerHTML = `
        <div class="summary-row">
            <span>Items Total</span>
            <span>₹${totals.subtotal}</span>
        </div>
        <div class="summary-row">
            <span>Delivery Fee</span>
            <span>₹${totals.deliveryFee}</span>
        </div>
        <div class="summary-row">
            <span>Taxes</span>
            <span>₹${totals.taxes}</span>
        </div>
        <div class="summary-row total">
            <span>Total Amount</span>
            <span>₹${totals.total}</span>
        </div>
    `;

    // Remove existing summary if any
    const existingSummary = cartItems.querySelector('.cart-summary');
    if (existingSummary) {
        existingSummary.remove();
    }

    cartItems.appendChild(cartSummary);
}

// Function to handle checkout
function handleCheckout() {
    if (cart.length === 0) return;

    // Create order object
    const order = {
        id: 'ORD' + Date.now(),
        items: cart,
        timestamp: new Date().toISOString(),
        status: 'Order Placed',
        deliveryTime: calculateEstimatedDeliveryTime(cart),
        ...calculateCartTotals()
    };
    console.log("handleCheckout - Order object created:", order);

    // Store order in localStorage
    localStorage.setItem('currentOrder', JSON.stringify(order));
    console.log("handleCheckout - Order stored in localStorage.");

    // Clear cart
    cart = [];
    localStorage.removeItem('cart');
    updateCart();

    // Redirect to delivery address page
    window.location.href = 'delivery-address.html';
}

function updateQuantity(itemId, change) {
    console.log(`Attempting to update quantity for Item ID: ${itemId}, Change: ${change}`);
    try {
        const itemIndex = cart.findIndex(item => item.id === itemId);
        if (itemIndex > -1) {
            cart[itemIndex].quantity += change;
            if (cart[itemIndex].quantity <= 0) {
                cart.splice(itemIndex, 1); // Remove item if quantity is 0 or less
                console.log(`Item ${itemId} removed from cart as quantity is <= 0.`);
            }
            updateCart();
            console.log(`Quantity updated for ${itemId}. New cart state:`, cart);
        } else {
            console.warn(`Item with ID ${itemId} not found in cart for quantity update.`);
        }
    } catch (error) {
        console.error(`Error updating quantity for item ${itemId}:`, error);
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

// Function to calculate estimated delivery time based on cart items
function calculateEstimatedDeliveryTime(cartItems) {
    let maxTime = 0;
    console.log("calculateEstimatedDeliveryTime - Processing cart items:", cartItems);
    cartItems.forEach(item => {
        console.log(`calculateEstimatedDeliveryTime - Item: ${item.name}, deliveryTime: ${item.deliveryTime}`);
        // Assuming deliveryTime is in format 'X-Y min' or just 'X min'
        if (item.deliveryTime) {
            const timeParts = item.deliveryTime.match(/(\d+)-?(\d+)?\s*min/);
            console.log(`calculateEstimatedDeliveryTime - Time parts for ${item.name}:`, timeParts);
            if (timeParts) {
                const upperEstimate = parseInt(timeParts[2] || timeParts[1]);
                console.log(`calculateEstimatedDeliveryTime - Upper estimate for ${item.name}:`, upperEstimate);
                if (!isNaN(upperEstimate) && upperEstimate > maxTime) {
                    maxTime = upperEstimate;
                }
            }
        }
    });
    console.log("calculateEstimatedDeliveryTime - Max time found:", maxTime);
    if (maxTime > 0) {
        const estimatedRange = `${maxTime - 5}-${maxTime} min`;
        console.log("calculateEstimatedDeliveryTime - Returning estimated range:", estimatedRange);
        return estimatedRange;
    } else {
        console.log("calculateEstimatedDeliveryTime - No specific delivery times found, returning default.");
        return '30-45 min'; // Default estimate if no specific times found
    }
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

// Function to initialize and display daily combos
function initializeCombos() {
    const combosGrid = document.getElementById('daily-combos-grid');
    if (!combosGrid) {
        console.error('Daily combos grid container not found.');
        return;
    }

    if (menuData.combos && Array.isArray(menuData.combos)) {
        combosGrid.innerHTML = menuData.combos.map(item => `
            <div class="combo-card" data-aos="fade-up">
                <div class="combo-image">
                    <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="console.error('Failed to load image:', this.src)" onload="console.log('Successfully loaded image:', this.src)">
                    <div class="combo-badge">${item.badges ? item.badges[0] : ''}</div>
                </div>
                <div class="combo-content">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <div class="combo-meta">
                        ${item.rating ? `<span class="combo-rating">\u2605 ${item.rating}</span>` : ''}
                        ${item.deliveryTime ? `<span class="combo-time">${item.deliveryTime}</span>` : ''}
                    </div>
                    <div class="combo-price">
                        ${item.originalPrice ? `<span class="original-price">₹${item.originalPrice}</span>` : ''}
                        <span class="discounted-price">₹${item.price}</span>
                        ${item.originalPrice ? `<span class="discount-tag">${(((item.originalPrice - item.price) / item.originalPrice) * 100).toFixed(0)}% OFF</span>` : ''}
                    </div>
                    <button class="btn primary add-to-cart-btn" data-item-id="${item.id}">Add to Cart</button>
                </div>
            </div>
        `).join('');
    } else {
        console.error('No combo data found or menuData.combos is not an array.');
        combosGrid.innerHTML = '<p class="no-items">Daily combos not available.</p>';
    }
}

// Function to initialize and display top picks
function initializeTopPicks() {
    const topPicksGrid = document.getElementById('top-picks-grid');
    if (!topPicksGrid) {
        console.error('Top picks grid container not found.');
        return;
    }

    const topPickIds = ['b1', 'o1', 'f1']; // IDs of items to display as top picks
    let topPicksHTML = '';

    topPickIds.forEach((id, index) => {
        const item = findMenuItem(id);
        if (item) {
            const delay = index * 100; // Stagger animation delay
            topPicksHTML += `
                <div class="pick-card" data-aos="fade-up" data-aos-delay="${delay}">
                    <div class="pick-image">
                        <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="console.error('Failed to load image:', this.src)" onload="console.log('Successfully loaded image:', this.src)">
                        <div class="pick-badge">${item.badges && item.badges.length > 0 ? item.badges[0] : 'Popular'}</div>
                    </div>
                    <div class="pick-content">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                        <div class="pick-meta">
                            ${item.rating ? `<span class="pick-rating">\u2605 ${item.rating}</span>` : ''}
                            ${item.deliveryTime ? `<span class="pick-time">${item.deliveryTime}</span>` : ''}
                        </div>
                        <div class="pick-price">
                            ${item.originalPrice ? `<span class="original-price">₹${item.originalPrice}</span>` : ''}
                            <span class="discounted-price">₹${item.price}</span>
                            ${item.originalPrice ? `<span class="discount-tag">${(((item.originalPrice - item.price) / item.originalPrice) * 100).toFixed(0)}% OFF</span>` : ''}
                        </div>
                        <button class="btn primary add-to-cart-btn" data-item-id="${item.id}">Add to Cart</button>
                    </div>
                </div>
            `;
        } else {
            console.warn(`Top pick item with ID ${id} not found in menuData.`);
        }
    });

    topPicksGrid.innerHTML = topPicksHTML || '<p class="no-items">Top picks not available.</p>';
}

// ************ GLOBAL FUNCTIONS END ************

// Ensure all event listeners are initialized once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing menu and cart...');
    initializeMenu();
    initializeCombos();
    initializeTopPicks(); // Call the new function to populate top picks
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