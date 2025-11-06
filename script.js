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

// New owner portal elements
const orderNotifications = document.getElementById('order-notifications');
const noNotificationsMessage = document.getElementById('no-notifications-message');
const sendAllSmsBtn = document.getElementById('send-all-sms');
const refreshOrdersBtn = document.getElementById('refresh-orders');
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
    
    // Validation
    if (!name || !price || price <= 0 || !description || !image) {
        showNotification('Please fill all fields with valid values.', true);
        return;
    }
    
    // Generate a unique product ID
    const productId = name.toLowerCase().replace(/\s+/g, '_') + '_' + Date.now();
    
    // Add to products
    products[productId] = {
        name,
        price,
        category,
        description,
        image
    };
    
    // Clear form
    document.getElementById('new-product-name').value = '';
    document.getElementById('new-product-price').value = '';
    document.getElementById('new-product-description').value = '';
    document.getElementById('new-product-image').value = '';
    document.getElementById('new-product-preview').innerHTML = '<span>Image preview will appear here</span>';
    document.getElementById('new-product-preview').classList.remove('has-image');
    
    // Refresh product forms
    renderOwnerForms();
    
    // Update products display
    const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
    const searchTerm = productSearch.value;
    renderProducts(activeFilter, searchTerm);
    
    showNotification(`New product "${name}" added successfully!`);
}

// Setup event listeners
function setupEventListeners() {
    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetPage = link.getAttribute('data-page');
            
            // Hide all pages
            pages.forEach(page => {
                page.classList.remove('active');
            });
            
            // Show target page
            document.getElementById(targetPage).classList.add('active');
            
            // If going to cart page, update cart display
            if (targetPage === 'cart') {
                updateCartDisplay();
            }
            
            // If going to owner portal, reset login
            if (targetPage === 'owner') {
                resetOwnerPortal();
            }
        });
    });

    // Carousel controls
    prevButton.addEventListener('click', () => {
        prevSlide();
        resetCarouselInterval();
    });

    nextButton.addEventListener('click', () => {
        nextSlide();
        resetCarouselInterval();
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            goToSlide(index);
            resetCarouselInterval();
        });
    });

    // Continue shopping button
    continueShoppingBtn.addEventListener('click', () => {
        // Hide all pages
        pages.forEach(page => {
            page.classList.remove('active');
        });
        
        // Show products page
        document.getElementById('products').classList.add('active');
    });

    // Place order button
    placeOrderBtn.addEventListener('click', () => {
        if (Object.keys(cart).length === 0) {
            alert('Your nut cart is empty. Please add some premium nuts before placing an order.');
            return;
        }
        
        // Prompt for customer name
        const customerName = prompt('Please enter your name for the order:');
        if (!customerName) {
            alert('Order cancelled. Please provide your name to place an order.');
            return;
        }
        
        // Show loading state
        const originalText = placeOrderBtn.innerHTML;
        placeOrderBtn.innerHTML = '<div class="loading"></div> Placing Nut Order...';
        placeOrderBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            // Create order object
            const orderItems = [];
            let total = 0;
            
            for (const productId in cart) {
                const item = cart[productId];
                // Calculate price: (quantity in grams / 50) * price per 50g
                const itemTotal = (item.quantity / 50) * item.price;
                total += itemTotal;
                
                orderItems.push({
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity,
                    total: itemTotal
                });
            }
            
            const newOrder = {
                id: Date.now(),
                customerName: customerName,
                date: new Date(),
                items: orderItems,
                total: total
            };
            
            // Add to orders array
            orders.push(newOrder);
            
            // Show notification to user
            showNotification('Nut order placed successfully! The owner has been notified.');
            
            // Clear the cart
            cart = {};
            updateCartDisplay();
            updateCartCount();
            
            // Reset button
            placeOrderBtn.innerHTML = originalText;
            placeOrderBtn.disabled = false;
            
            // If owner is logged in, update the order display
            if (ownerContent.style.display === 'block') {
                renderOrderHistory();
                renderOrderNotifications();
            }
        }, 1500);
    });

    // Print summary button
    printSummaryBtn.addEventListener('click', () => {
        if (Object.keys(cart).length === 0) {
            alert('Your nut cart is empty. Nothing to print.');
            return;
        }
        
        generatePrintBill();
    });

    // Product search
    productSearch.addEventListener('input', (e) => {
        const searchTerm = e.target.value;
        const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
        renderProducts(activeFilter, searchTerm);
    });

    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            const searchTerm = productSearch.value;
            renderProducts(filter, searchTerm);
        });
    });

    // Owner portal login
    loginBtn.addEventListener('click', () => {
        if (ownerPassword.value === OWNER_PASSWORD) {
            passwordSection.style.display = 'none';
            ownerContent.style.display = 'block';
            renderOwnerForms();
            renderOrderHistory();
            renderOrderNotifications();
        } else {
            showNotification('Incorrect password!', true);
        }
    });

    // Owner portal logout
    logoutBtn.addEventListener('click', () => {
        resetOwnerPortal();
    });

    // Save changes in owner portal
    saveChangesBtn.addEventListener('click', () => {
        if (validateProductForms()) {
            saveProductChanges();
            showNotification('Nut product changes saved successfully!');
        }
    });

    // New product management event listeners
    document.getElementById('add-product-btn').addEventListener('click', addNewProduct);
    document.getElementById('new-product-image').addEventListener('input', updateNewProductPreview);
    document.getElementById('send-all-sms').addEventListener('click', sendSMSToAll);
    document.getElementById('refresh-orders').addEventListener('click', () => {
        renderOrderNotifications();
        showNotification('Orders refreshed successfully!');
    });
}

// Generate print bill
function generatePrintBill() {
    // Set current date
    const now = new Date();
    billDate.textContent = now.toLocaleString();
    
    // Clear previous bill items
    billItems.innerHTML = '';
    
    let total = 0;
    
    // Add items to bill
    for (const productId in cart) {
        const item = cart[productId];
        // Calculate price: (quantity in grams / 50) * price per 50g
        const itemTotal = (item.quantity / 50) * item.price;
        total += itemTotal;
        
        const billItem = document.createElement('div');
        billItem.className = 'bill-item';
        billItem.innerHTML = `
            <div class="bill-item-name">${item.name}</div>
            <div class="bill-item-qty">${item.quantity}g</div>
            <div class="bill-item-price">₹${itemTotal.toFixed(2)}</div>
        `;
        
        billItems.appendChild(billItem);
    }
    
    // Set total
    billTotal.textContent = `₹${total.toFixed(2)}`;
    
    // Show and print the bill
    printBill.style.display = 'block';
    window.print();
    printBill.style.display = 'none';
}

// Reset carousel interval
function resetCarouselInterval() {
    clearInterval(slideInterval);
    startCarousel();
}

// Setup product event listeners
function setupProductEventListeners() {
    // Use event delegation for dynamically created elements
    productsGrid.addEventListener('click', function(e) {
        const target = e.target;
        
        // Handle minus button clicks
        if (target.classList.contains('minus')) {
            const productId = target.getAttribute('data-product');
            const input = document.querySelector(`.quantity-input[data-product="${productId}"]`);
            let value = parseInt(input.value);
            if (value > 0) {
                input.value = value - 1;
            }
        }
        
        // Handle plus button clicks
        if (target.classList.contains('plus')) {
            const productId = target.getAttribute('data-product');
            const input = document.querySelector(`.quantity-input[data-product="${productId}"]`);
            let value = parseInt(input.value);
            if (value < 20) { // Maximum 1000g (20 * 50g)
                input.value = value + 1;
            } else {
                showNotification('Maximum quantity reached (1000g)', true);
            }
        }
        
        // Handle add to cart button clicks
        if (target.classList.contains('add-to-cart')) {
            const productId = target.getAttribute('data-product');
            const input = document.querySelector(`.quantity-input[data-product="${productId}"]`);
            const quantity = parseInt(input.value);
            
            if (quantity > 0) {
                addToCart(productId, quantity);
                // Reset quantity input
                input.value = 0;
            } else {
                showNotification('Please select at least 50g of nuts', true);
            }
        }
    });
}

// Add to cart function
function addToCart(productId, quantity) {
    // quantity is in 50g increments, so convert to grams
    const grams = quantity * 50;
    
    if (cart[productId]) {
        cart[productId].quantity += grams;
    } else {
        cart[productId] = {
            name: products[productId].name,
            price: products[productId].price, // price per 50g
            quantity: grams // stored in grams
        };
    }
    
    // Update cart count
    updateCartCount();
    
    // Show notification
    showNotification(`${grams}g ${products[productId].name} added to cart!`);
    
    // Log to console for debugging
    console.log('Cart updated:', cart);
}

// Update cart display
function updateCartDisplay() {
    // Clear current cart items
    cartItems.innerHTML = '';
    
    if (Object.keys(cart).length === 0) {
        // Show empty cart message
        cartItems.appendChild(emptyCartMessage);
        emptyCartMessage.style.display = 'block';
        subtotalElement.textContent = '₹0.00';
        totalElement.textContent = '₹0.00';
    } else {
        // Hide empty cart message
        emptyCartMessage.style.display = 'none';
        
        // Add each item to cart display
        let subtotal = 0;
        
        for (const productId in cart) {
            const item = cart[productId];
            // Calculate price: (quantity in grams / 50) * price per 50g
            const itemTotal = (item.quantity / 50) * item.price;
            subtotal += itemTotal;
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="item-info">
                    <div class="item-name">${item.name}</div>
                    <div class="item-price">₹${item.price} / 50g</div>
                </div>
                <div class="item-quantity">Qty: ${item.quantity}g</div>
                <div class="item-total">₹${itemTotal.toFixed(2)}</div>
                <button class="remove-item" data-product="${productId}">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            
            cartItems.appendChild(cartItem);
        }
        
        // Update totals
        subtotalElement.textContent = `₹${subtotal.toFixed(2)}`;
        totalElement.textContent = `₹${subtotal.toFixed(2)}`;
        
        // Add event listeners to remove buttons
        const removeButtons = document.querySelectorAll('.remove-item');
        removeButtons.forEach(button => {
            button.addEventListener('click', () => {
                const productId = button.getAttribute('data-product');
                delete cart[productId];
                updateCartDisplay();
                updateCartCount();
                showNotification('Nut item removed from cart');
            });
        });
    }
}

// Update cart count in header
function updateCartCount() {
    let totalGrams = 0;
    for (const productId in cart) {
        totalGrams += cart[productId].quantity;
    }
    
    // Display total grams in cart, or convert to kg if over 1000g
    if (totalGrams >= 1000) {
        cartCount.textContent = `${(totalGrams / 1000).toFixed(1)}kg`;
    } else {
        cartCount.textContent = `${totalGrams}g`;
    }
}

// Reset owner portal
function resetOwnerPortal() {
    passwordSection.style.display = 'block';
    ownerContent.style.display = 'none';
    ownerPassword.value = '';
}

// Validate product forms
function validateProductForms() {
    let isValid = true;
    const errorFields = [];
    
    for (const productId in products) {
        const nameInput = document.getElementById(`${productId}-name`);
        const priceInput = document.getElementById(`${productId}-price`);
        
        if (!nameInput.value.trim()) {
            errorFields.push(`${products[productId].name} name`);
            isValid = false;
        }
        
        if (!priceInput.value || parseInt(priceInput.value) <= 0) {
            errorFields.push(`${products[productId].name} price`);
            isValid = false;
        }
    }
    
    if (!isValid) {
        showNotification(`Please check: ${errorFields.join(', ')}`, true);
    }
    
    return isValid;
}

// Save product changes from owner portal
function saveProductChanges() {
    for (const productId in products) {
        const nameInput = document.getElementById(`${productId}-name`);
        const descriptionInput = document.getElementById(`${productId}-description`);
        const priceInput = document.getElementById(`${productId}-price`);
        const categoryInput = document.getElementById(`${productId}-category`);
        const imageInput = document.getElementById(`${productId}-image`);
        
        if (nameInput && descriptionInput && priceInput && categoryInput && imageInput) {
            products[productId].name = nameInput.value;
            products[productId].description = descriptionInput.value;
            products[productId].price = parseInt(priceInput.value);
            products[productId].category = categoryInput.value;
            products[productId].image = imageInput.value;
        }
    }
    
    // Update products display
    const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
    const searchTerm = productSearch.value;
    renderProducts(activeFilter, searchTerm);
}

// Show notification
function showNotification(message, isError = false) {
    notification.textContent = message;
    notification.className = isError ? 'notification error' : 'notification';
    notification.style.display = 'block';
    
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

// Initialize the website
init();
