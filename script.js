// Product data in Indian Rupees - Price per 50g
let products = {
    almonds: { 
        name: "Premium California Almonds", 
        price: 90, // ₹90 per 50g
        description: "Large, crunchy California almonds with rich flavor and perfect texture.",
        image: "https://images.unsplash.com/photo-1615485500606-f3d3f2f7fb7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "premium"
    },
    cashews: { 
        name: "Jumbo Whole Cashews", 
        price: 110, // ₹110 per 50g
        description: "Extra large whole cashews with creamy texture and buttery flavor.",
        image: "https://images.unsplash.com/photo-1626074353765-517f5517d9d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "premium"
    },
    walnuts: { 
        name: "Premium Walnut Halves", 
        price: 95, // ₹95 per 50g
        description: "Fresh walnut halves with rich, earthy flavor and crisp texture.",
        image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "premium"
    },
    pistachios: { 
        name: "Iranian Pistachios", 
        price: 130, // ₹130 per 50g
        description: "Premium Iranian pistachios, naturally opened and lightly salted.",
        image: "https://images.unsplash.com/photo-1615485500606-f3d3f2f7fb7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "premium"
    },
    peanuts: { 
        name: "Virginia Peanuts", 
        price: 40, // ₹40 per 50g
        description: "Large Virginia peanuts, perfect for snacking and recipes.",
        image: "https://images.unsplash.com/photo-1623650077315-9df4c0a7d3b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "popular"
    },
    macadamia: { 
        name: "Hawaiian Macadamia Nuts", 
        price: 160, // ₹160 per 50g
        description: "Rich, buttery Hawaiian macadamia nuts, lightly roasted.",
        image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "premium"
    },
    brazil: { 
        name: "Brazil Nuts", 
        price: 80, // ₹80 per 50g
        description: "Large Brazil nuts with rich, creamy texture and mild flavor.",
        image: "https://images.unsplash.com/photo-1615485500606-f3d3f2f7fb7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "popular"
    },
    hazelnuts: { 
        name: "European Hazelnuts", 
        price: 120, // ₹120 per 50g
        description: "Premium European hazelnuts with sweet, rich flavor.",
        image: "https://images.unsplash.com/photo-1626074353765-517f5517d9d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "premium"
    },
    pecans: { 
        name: "Pecan Halves", 
        price: 140, // ₹140 per 50g
        description: "Sweet, buttery pecan halves perfect for baking and snacking.",
        image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        category: "premium"
    }
};

// Cart data
let cart = {};

// Order history data
let orders = [];

// Carousel data
let currentSlide = 0;
let slideInterval;

// DOM elements
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-link');
const productsGrid = document.querySelector('.products-grid');
const cartItems = document.querySelector('.cart-items');
const emptyCartMessage = document.getElementById('empty-cart-message');
const subtotalElement = document.getElementById('subtotal');
const totalElement = document.getElementById('total');
const continueShoppingBtn = document.getElementById('continue-shopping');
const placeOrderBtn = document.getElementById('place-order');
const printSummaryBtn = document.getElementById('print-summary');
const notification = document.getElementById('notification');
const cartCount = document.querySelector('.cart-count');
const productSearch = document.getElementById('product-search');
const filterButtons = document.querySelectorAll('.filter-btn');

// Carousel elements
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');
const indicators = document.querySelectorAll('.carousel-indicator');

// Owner portal elements
const passwordSection = document.getElementById('password-section');
const ownerContent = document.getElementById('owner-content');
const ownerPassword = document.getElementById('owner-password');
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const saveChangesBtn = document.getElementById('save-changes');
const productForms = document.getElementById('product-forms');
const orderList = document.getElementById('order-list');
const noOrdersMessage = document.getElementById('no-orders-message');

// SMS page elements
const orderNotifications = document.getElementById('order-notifications');
const noNotificationsMessage = document.getElementById('no-notifications-message');
const sendAllSmsBtn = document.getElementById('send-all-sms');
const refreshOrdersBtn = document.getElementById('refresh-orders-sms');

// Product management elements
const addProductBtn = document.getElementById('add-product-btn');

// Print bill elements
const printBill = document.getElementById('print-bill');
const billDate = document.getElementById('bill-date');
const billItems = document.getElementById('bill-items');
const billTotal = document.getElementById('bill-total');

// Owner password
const OWNER_PASSWORD = "1234";

// Initialize the website
function init() {
    renderProducts();
    setupEventListeners();
    updateCartCount();
    startCarousel();
}

// Carousel functions
function startCarousel() {
    slideInterval = setInterval(() => {
        nextSlide();
    }, 5000);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % carouselItems.length;
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

function updateCarousel() {
    carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update indicators
    indicators.forEach((indicator, index) => {
        if (index === currentSlide) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Render products on products page
function renderProducts(filter = 'all', searchTerm = '') {
    productsGrid.innerHTML = '';
    
    let filteredProducts = {};
    
    // Apply filters
    for (const productId in products) {
        const product = products[productId];
        
        // Apply category filter
        if (filter !== 'all' && product.category !== filter) {
            continue;
        }
        
        // Apply search filter
        if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
            !product.description.toLowerCase().includes(searchTerm.toLowerCase())) {
            continue;
        }
        
        filteredProducts[productId] = product;
    }
    
    // Render filtered products
    for (const productId in filteredProducts) {
        const product = filteredProducts[productId];
        
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/320x250?text=Image+Not+Found'">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">₹${product.price} / 50g</div>
                <div class="quantity-selector">
                    <button class="quantity-btn minus" data-product="${productId}">-</button>
                    <input type="text" class="quantity-input" data-product="${productId}" value="0" readonly>
                    <button class="quantity-btn plus" data-product="${productId}">+</button>
                </div>
                <div class="quantity-label">Quantity (50g increments)</div>
                <button class="add-to-cart" data-product="${productId}">Add to Cart</button>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    }
    
    // If no products found
    if (Object.keys(filteredProducts).length === 0) {
        productsGrid.innerHTML = '<p style="text-align: center; width: 100%; padding: 40px;">No nuts found matching your criteria.</p>';
    }
    
    // Setup product event listeners
    setupProductEventListeners();
}

// Render owner portal forms with image previews
function renderOwnerForms() {
    productForms.innerHTML = '';
    
    for (const productId in products) {
        const product = products[productId];
        
        const form = document.createElement('div');
        form.className = 'product-edit-form';
        form.innerHTML = `
            <div>
                <div class="form-group">
                    <label for="${productId}-name">Nut Name</label>
                    <input type="text" class="form-control" id="${productId}-name" value="${product.name}">
                </div>
                <div class="form-group">
                    <label for="${productId}-description">Description</label>
                    <textarea class="form-control" id="${productId}-description">${product.description}</textarea>
                </div>
            </div>
            <div>
                <div class="form-group">
                    <label for="${productId}-price">Price (₹ per 50g)</label>
                    <input type="number" class="form-control" id="${productId}-price" value="${product.price}">
                </div>
                <div class="form-group">
                    <label for="${productId}-category">Category</label>
                    <select class="form-control" id="${productId}-category">
                        <option value="popular" ${product.category === 'popular' ? 'selected' : ''}>Popular</option>
                        <option value="premium" ${product.category === 'premium' ? 'selected' : ''}>Premium</option>
                    </select>
                </div>
            </div>
            <div class="product-image-section">
                <div class="current-image">
                    <h5>Current Image</h5>
                    <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/200x150?text=Image+Not+Found'">
                </div>
                <div class="image-url-input">
                    <label for="${productId}-image">Product Image URL</label>
                    <input type="text" class="form-control" id="${productId}-image" value="${product.image}" 
                           placeholder="Enter image URL" oninput="updateImagePreview('${productId}')">
                    <div class="image-preview-container">
                        <div class="image-preview" id="${productId}-preview">
                            <span>New image preview will appear here</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        productForms.appendChild(form);
    }
}

// Render order history in owner portal
function renderOrderHistory() {
    orderList.innerHTML = '';
    
    if (orders.length === 0) {
        noOrdersMessage.style.display = 'block';
        return;
    }
    
    noOrdersMessage.style.display = 'none';
    
    // Sort orders by date (newest first)
    const sortedOrders = [...orders].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    sortedOrders.forEach(order => {
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';
        
        let itemsHtml = '';
        order.items.forEach(item => {
            itemsHtml += `
                <div class="order-item-row">
                    <span>${item.name}</span>
                    <span>${item.quantity}g × ₹${item.price}/50g = ₹${item.total.toFixed(2)}</span>
                </div>
            `;
        });
        
        orderItem.innerHTML = `
            <div class="order-header">
                <div class="order-customer">${order.customerName}</div>
                <div class="order-date">${new Date(order.date).toLocaleString()}</div>
            </div>
            <div class="order-items">
                ${itemsHtml}
            </div>
            <div class="order-total">Total: ₹${order.total.toFixed(2)}</div>
        `;
        
        orderList.appendChild(orderItem);
    });
}

// Render order notifications for SMS
function renderOrderNotifications() {
    orderNotifications.innerHTML = '';
    
    if (orders.length === 0) {
        noNotificationsMessage.style.display = 'block';
        orderNotifications.appendChild(noNotificationsMessage);
        return;
    }
    
    noNotificationsMessage.style.display = 'none';
    
    // Sort orders by date (newest first)
    const sortedOrders = [...orders].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    sortedOrders.forEach(order => {
        const notification = document.createElement('div');
        notification.className = 'order-notification';
        notification.innerHTML = `
            <div class="notification-header">
                <div class="customer-name">${order.customerName}</div>
                <div class="order-time">${new Date(order.date).toLocaleString()}</div>
            </div>
            <div class="order-details">
                <div class="order-items-list">
                    ${order.items.map(item => 
                        `${item.quantity}g ${item.name} - ₹${item.total.toFixed(2)}`
                    ).join('<br>')}
                </div>
                <div class="order-total">Total: ₹${order.total.toFixed(2)}</div>
            </div>
            <div class="sms-actions">
                <button class="btn btn-sms-action" onclick="sendSMSNotification('${order.customerName}', ${order.total})">
                    Send SMS
                </button>
                <button class="btn btn-sms-action btn-secondary" onclick="viewOrderDetails(${order.id})">
                    View Details
                </button>
            </div>
        `;
        
        orderNotifications.appendChild(notification);
    });
}

// Update image preview for product forms
function updateImagePreview(productId) {
    const imageUrl = document.getElementById(`${productId}-image`).value;
    const preview = document.getElementById(`${productId}-preview`);
    
    if (imageUrl) {
        preview.innerHTML = `<img src="${imageUrl}" alt="Preview" onerror="this.parentElement.innerHTML='<span>Invalid image URL</span>'">`;
        preview.classList.add('has-image');
    } else {
        preview.innerHTML = '<span>Image preview will appear here</span>';
        preview.classList.remove('has-image');
    }
}

// Update new product image preview
function updateNewProductPreview() {
    const imageUrl = document.getElementById('new-product-image').value;
    const preview = document.getElementById('new-product-preview');
    
    if (imageUrl) {
        preview.innerHTML = `<img src="${imageUrl}" alt="Preview" onerror="this.parentElement.innerHTML='<span>Invalid image URL</span>'">`;
        preview.classList.add('has-image');
    } else {
        preview.innerHTML = '<span>Image preview will appear here</span>';
        preview.classList.remove('has-image');
    }
}

// Send SMS notification
function sendSMSNotification(customerName, total) {
    // Simulate SMS sending
    const message = `Hi ${customerName}, your nut order of ₹${total.toFixed(2)} has been confirmed! Thank you for choosing Netus Bissnus.`;
    
    // Show notification
    showNotification(`SMS sent to ${customerName}: ${message}`);
    
    // In a real application, you would integrate with an SMS API here
    console.log('SMS Message:', message);
}

// Send SMS to all customers
function sendSMSToAll() {
    if (orders.length === 0) {
        showNotification('No orders to send SMS to.', true);
        return;
    }
    
    // Get unique customers
    const uniqueCustomers = [...new Set(orders.map(order => order.customerName))];
    
    uniqueCustomers.forEach(customer => {
        const customerOrders = orders.filter(order => order.customerName === customer);
        const totalSpent = customerOrders.reduce((sum, order) => sum + order.total, 0);
        
        const message = `Hi ${customer}, thank you for your recent orders totaling ₹${totalSpent.toFixed(2)}! We appreciate your business at Netus Bissnus.`;
        
        // Simulate SMS sending
        console.log(`SMS to ${customer}:`, message);
    });
    
    showNotification(`SMS notifications sent to ${uniqueCustomers.length} customers`);
}

// View order details
function viewOrderDetails(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (order) {
        const itemsList = order.items.map(item => 
            `${item.quantity}g ${item.name} - ₹${item.total.toFixed(2)}`
        ).join('\n');
        
        alert(`Order Details for ${order.customerName}:\n\n${itemsList}\n\nTotal: ₹${order.total.toFixed(2)}\nDate: ${new Date(order.date).toLocaleString()}`);
    }
}

// Add new product
function addNewProduct() {
    const name = document.getElementById('new-product-name').value.trim();
    const price = parseInt(document.getElementById('new-product-price').value);
    const category = document.getElementById('new-product-category').value;
    const description = document.getElementById('new-product-description').value.trim();
    const image = document.getElementById('new-product-image').value.trim();
    
    // Validate inputs
    if (!name || !price || !description || !image) {
        showNotification('Please fill in all product details.', true);
        return;
    }
    
    if (price <= 0) {
        showNotification('Price must be a positive number.', true);
        return;
    }
    
    // Generate a unique ID for the new product
    const productId = name.toLowerCase().replace(/\s+/g, '-');
    
    // Add the new product
    products[productId] = {
        name,
        price,
        category,
        description,
        image
    };
    
    // Clear the form
    document.getElementById('new-product-name').value = '';
    document.getElementById('new-product-price').value = '';
    document.getElementById('new-product-description').value = '';
    document.getElementById('new-product-image').value = '';
    document.getElementById('new-product-preview').innerHTML = '<span>Image preview will appear here</span>';
    document.getElementById('new-product-preview').classList.remove('has-image');
    
    // Update the owner forms
    renderOwnerForms();
    
    // Update the products page
    renderProducts();
    
    showNotification('New nut product added successfully!');
}

// Save product changes
function saveProductChanges() {
    for (const productId in products) {
        const name = document.getElementById(`${productId}-name`).value.trim();
        const description = document.getElementById(`${productId}-description`).value.trim();
        const price = parseInt(document.getElementById(`${productId}-price`).value);
        const category = document.getElementById(`${productId}-category`).value;
        const image = document.getElementById(`${productId}-image`).value.trim();
        
        // Update product
        products[productId] = {
            name,
            price,
            category,
            description,
            image
        };
    }
    
    // Update the products page
    renderProducts();
    
    showNotification('All product changes saved successfully!');
}

// Setup event listeners
function setupEventListeners() {
    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.getAttribute('data-page');
            showPage(pageId);
        });
    });
    
    // Carousel controls
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
    
    // Carousel indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            goToSlide(index);
        });
    });
    
    // Product search and filter
    productSearch.addEventListener('input', () => {
        const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
        renderProducts(activeFilter, productSearch.value);
    });
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filter = button.getAttribute('data-filter');
            renderProducts(filter, productSearch.value);
        });
    });
    
    // Cart actions
    continueShoppingBtn.addEventListener('click', () => {
        showPage('products');
    });
    
    placeOrderBtn.addEventListener('click', placeOrder);
    printSummaryBtn.addEventListener('click', printOrderSummary);
    
    // Owner portal
    loginBtn.addEventListener('click', loginToOwnerPortal);
    logoutBtn.addEventListener('click', logoutFromOwnerPortal);
    saveChangesBtn.addEventListener('click', saveProductChanges);
    
    // SMS page
    sendAllSmsBtn.addEventListener('click', sendSMSToAll);
    refreshOrdersBtn.addEventListener('click', refreshOrders);
    
    // Product management
    addProductBtn.addEventListener('click', addNewProduct);
    
    // New product image preview
    document.getElementById('new-product-image').addEventListener('input', updateNewProductPreview);
    
    // Refresh orders button in owner portal
    document.getElementById('refresh-orders').addEventListener('click', refreshOrders);
}

// Setup product event listeners
function setupProductEventListeners() {
    // Quantity buttons
    const quantityBtns = document.querySelectorAll('.quantity-btn');
    quantityBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const productId = btn.getAttribute('data-product');
            const isPlus = btn.classList.contains('plus');
            updateQuantity(productId, isPlus);
        });
    });
    
    // Add to cart buttons
    const addToCartBtns = document.querySelectorAll('.add-to-cart');
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const productId = btn.getAttribute('data-product');
            addToCart(productId);
        });
    });
}

// Update product quantity
function updateQuantity(productId, isPlus) {
    const quantityInput = document.querySelector(`.quantity-input[data-product="${productId}"]`);
    let quantity = parseInt(quantityInput.value);
    
    if (isPlus) {
        quantity++;
    } else if (quantity > 0) {
        quantity--;
    }
    
    quantityInput.value = quantity;
}

// Add product to cart
function addToCart(productId) {
    const quantityInput = document.querySelector(`.quantity-input[data-product="${productId}"]`);
    const quantity = parseInt(quantityInput.value);
    
    if (quantity <= 0) {
        showNotification('Please select a quantity greater than 0.', true);
        return;
    }
    
    const product = products[productId];
    const totalPrice = product.price * quantity;
    
    if (cart[productId]) {
        cart[productId].quantity += quantity;
        cart[productId].total += totalPrice;
    } else {
        cart[productId] = {
            name: product.name,
            price: product.price,
            quantity: quantity,
            total: totalPrice
        };
    }
    
    updateCart();
    showNotification(`${quantity} × 50g of ${product.name} added to cart!`);
    
    // Reset quantity input
    quantityInput.value = 0;
}

// Update cart display
function updateCart() {
    cartItems.innerHTML = '';
    
    if (Object.keys(cart).length === 0) {
        emptyCartMessage.style.display = 'block';
        cartItems.appendChild(emptyCartMessage);
    } else {
        emptyCartMessage.style.display = 'none';
        
        for (const productId in cart) {
            const item = cart[productId];
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>₹${item.price} per 50g</p>
                </div>
                <div class="cart-item-controls">
                    <div class="cart-quantity">
                        <button class="cart-quantity-btn minus" data-product="${productId}">-</button>
                        <span class="cart-quantity-value">${item.quantity} × 50g</span>
                        <button class="cart-quantity-btn plus" data-product="${productId}">+</button>
                    </div>
                    <div class="cart-item-total">₹${item.total.toFixed(2)}</div>
                    <button class="remove-item" data-product="${productId}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
            
            cartItems.appendChild(cartItem);
        }
        
        // Add cart item event listeners
        const cartQuantityBtns = document.querySelectorAll('.cart-quantity-btn');
        cartQuantityBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const productId = btn.getAttribute('data-product');
                const isPlus = btn.classList.contains('plus');
                updateCartQuantity(productId, isPlus);
            });
        });
        
        const removeBtns = document.querySelectorAll('.remove-item');
        removeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const productId = btn.getAttribute('data-product');
                removeFromCart(productId);
            });
        });
    }
    
    updateCartTotal();
    updateCartCount();
}

// Update cart quantity
function updateCartQuantity(productId, isPlus) {
    if (isPlus) {
        cart[productId].quantity += 1;
        cart[productId].total += cart[productId].price;
    } else if (cart[productId].quantity > 1) {
        cart[productId].quantity -= 1;
        cart[productId].total -= cart[productId].price;
    } else {
        removeFromCart(productId);
        return;
    }
    
    updateCart();
}

// Remove item from cart
function removeFromCart(productId) {
    delete cart[productId];
    updateCart();
    showNotification('Item removed from cart.', true);
}

// Update cart total
function updateCartTotal() {
    let subtotal = 0;
    
    for (const productId in cart) {
        subtotal += cart[productId].total;
    }
    
    const total = subtotal; // No tax or shipping for now
    
    subtotalElement.textContent = `₹${subtotal.toFixed(2)}`;
    totalElement.textContent = `₹${total.toFixed(2)}`;
}

// Update cart count in header
function updateCartCount() {
    let totalItems = 0;
    
    for (const productId in cart) {
        totalItems += cart[productId].quantity;
    }
    
    cartCount.textContent = totalItems;
}

// Place order
function placeOrder() {
    if (Object.keys(cart).length === 0) {
        showNotification('Your cart is empty. Add some premium nuts first!', true);
        return;
    }
    
    // Get customer name
    const customerName = prompt('Please enter your name for the order:');
    
    if (!customerName) {
        showNotification('Order cancelled. Name is required.', true);
        return;
    }
    
    // Calculate total
    let total = 0;
    for (const productId in cart) {
        total += cart[productId].total;
    }
    
    // Create order
    const order = {
        id: Date.now(),
        customerName: customerName,
        date: new Date().toISOString(),
        items: Object.values(cart),
        total: total
    };
    
    // Add to orders
    orders.push(order);
    
    // Clear cart
    cart = {};
    updateCart();
    
    // Show notification
    showNotification('Order placed successfully! The owner has been notified.');
    
    // Update order history if owner portal is open
    if (ownerContent.style.display !== 'none') {
        renderOrderHistory();
    }
}

// Print order summary
function printOrderSummary() {
    if (Object.keys(cart).length === 0) {
        showNotification('Your cart is empty. Add some premium nuts first!', true);
        return;
    }
    
    // Update bill content
    billDate.textContent = new Date().toLocaleString();
    
    let itemsHtml = '';
    let total = 0;
    
    for (const productId in cart) {
        const item = cart[productId];
        itemsHtml += `
            <div class="bill-item">
                <div class="bill-item-name">${item.name}</div>
                <div class="bill-item-quantity">${item.quantity} × 50g</div>
                <div class="bill-item-price">₹${item.total.toFixed(2)}</div>
            </div>
        `;
        total += item.total;
    }
    
    billItems.innerHTML = itemsHtml;
    billTotal.textContent = `₹${total.toFixed(2)}`;
    
    // Show print dialog
    const printContent = printBill.innerHTML;
    const originalContent = document.body.innerHTML;
    
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
    
    // Re-initialize event listeners
    setupEventListeners();
    updateCart();
}

// Show notification
function showNotification(message, isError = false) {
    notification.textContent = message;
    notification.className = 'notification';
    
    if (isError) {
        notification.classList.add('error');
    }
    
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Show page
function showPage(pageId) {
    // Hide all pages
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const activePage = document.getElementById(pageId);
    activePage.classList.add('active');
    
    // Special handling for SMS page
    if (pageId === 'sms') {
        renderOrderNotifications();
    }
    
    // Special handling for owner page
    if (pageId === 'owner') {
        // Reset owner portal state
        passwordSection.style.display = 'block';
        ownerContent.style.display = 'none';
        ownerPassword.value = '';
    }
}

// Owner portal login
function loginToOwnerPortal() {
    const password = ownerPassword.value;
    
    if (password === OWNER_PASSWORD) {
        passwordSection.style.display = 'none';
        ownerContent.style.display = 'block';
        
        // Render owner forms and order history
        renderOwnerForms();
        renderOrderHistory();
        
        showNotification('Welcome to the Owner Portal!');
    } else {
        showNotification('Incorrect password. Please try again.', true);
    }
}

// Owner portal logout
function logoutFromOwnerPortal() {
    passwordSection.style.display = 'block';
    ownerContent.style.display = 'none';
    ownerPassword.value = '';
    
    showNotification('Logged out successfully.');
}

// Refresh orders
function refreshOrders() {
    renderOrderHistory();
    renderOrderNotifications();
    showNotification('Orders refreshed!');
}

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
