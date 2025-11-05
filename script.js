// Product Management
let products = [];
let isAdmin = false;
const adminPassword = "admin123";
let editingProductId = null;

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

function saveProductsToLocalStorage() {
    localStorage.setItem('asautomation_products', JSON.stringify(products));
}

function loadProducts() {
    const saved = localStorage.getItem('asautomation_products');
    if (saved) {
        products = JSON.parse(saved);
    } else {
        products = [
            {
                id: 1,
                name: "Water Level Controller",
                price: "Contact for Price",
                description: "Manual ON + Auto OFF system to prevent overflow and save electricity",
                icon: "fas fa-water",
                features: ["Manual ON + Auto OFF", "Prevents overflow", "1 Year Warranty"]
            },
            {
                id: 2,
                name: "Temperature Controller",
                price: "₹3,499",
                description: "Automatically regulates temperature for home/industry",
                icon: "fas fa-temperature-high",
                features: ["Digital Display", "Energy Efficient", "1 Year Warranty"]
            }
        ];
        saveProductsToLocalStorage();
    }
    renderProducts();
}

function renderProducts() {
    const grid = document.getElementById('productsGrid');
    const select = document.getElementById('product');
    if (!grid) return;

    grid.innerHTML = '';
    select.innerHTML = '<option value="">Select a product</option>';

    products.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-card-image"><i class="${p.icon} product-icon"></i></div>
            <h3>${p.name}</h3>
            <p>${p.description}</p>
            <div class="product-card-price">${p.price}</div>
            <ul>${p.features.map(f => `<li>${f}</li>`).join('')}</ul>
            <a href="https://wa.me/919840694616?text=I%20want%20to%20order%20${encodeURIComponent(p.name)}"
               target="_blank" class="btn btn-primary">Order Now</a>
            ${isAdmin ? `
                <div class="admin-actions">
                    <button class="btn btn-warning btn-small edit-product" data-id="${p.id}">Edit</button>
                    <button class="btn btn-danger btn-small delete-product" data-id="${p.id}">Delete</button>
                </div>` : ''}
        `;
        grid.appendChild(card);
        const opt = document.createElement('option');
        opt.value = p.name;
        opt.textContent = p.name;
        select.appendChild(opt);
    });

    if (isAdmin) attachAdminEventListeners();
}

function attachAdminEventListeners() {
    document.querySelectorAll('.edit-product').forEach(btn =>
        btn.onclick = () => editProduct(parseInt(btn.dataset.id)));
    document.querySelectorAll('.delete-product').forEach(btn =>
        btn.onclick = () => deleteProduct(parseInt(btn.dataset.id)));
}

function addProduct(data) {
    const newP = { id: Date.now(), ...data };
    products.push(newP);
    saveProductsToLocalStorage();
    renderProducts();
    showNotification("Product added!");
}

function editProduct(id) {
    const p = products.find(x => x.id === id);
    document.getElementById('editProductId').value = id;
    adminProductName.value = p.name;
    adminProductPrice.value = p.price;
    adminProductIcon.value = p.icon;
    adminProductDescription.value = p.description;
    adminProductFeatures.value = p.features.join("\n");
    editingProductId = id;
    submitProductBtn.innerHTML = '<i class="fas fa-save"></i> Update Product';
    cancelEdit.style.display = 'inline-block';
}

function updateProduct(id, data) {
    const idx = products.findIndex(x => x.id === id);
    products[idx] = { id, ...data };
    saveProductsToLocalStorage();
    renderProducts();
    showNotification("Product updated!");
}

function deleteProduct(id) {
    if (!confirm("Delete this product?")) return;
    products = products.filter(x => x.id !== id);
    saveProductsToLocalStorage();
    renderProducts();
    showNotification("Product deleted!");
}

function cancelEdit() {
    editingProductId = null;
    document.getElementById('adminProductForm').reset();
    cancelEdit.style.display = 'none';
    submitProductBtn.innerHTML = '<i class="fas fa-plus"></i> Add Product';
}

// Navigation
function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    window.scrollTo(0, 0);
}

document.addEventListener('DOMContentLoaded', () => {
    loadProducts();

    document.querySelectorAll('.nav-link').forEach(link =>
        link.addEventListener('click', e => showPage(link.dataset.page)));

    document.querySelectorAll('button[data-page]').forEach(btn =>
        btn.addEventListener('click', e => showPage(btn.dataset.page)));

    document.getElementById('mobileMenu').onclick = () =>
        document.getElementById('navMenu').classList.toggle('show');

    document.getElementById('adminToggle').onclick = () => {
        if (!isAdmin) {
            const pwd = prompt("Enter admin password:");
            if (pwd === adminPassword) {
                isAdmin = true;
                document.getElementById('adminPanel').classList.add('active');
                renderProducts();
                showNotification("Admin mode enabled");
            } else alert("Incorrect password!");
        } else {
            isAdmin = false;
            document.getElementById('adminPanel').classList.remove('active');
            renderProducts();
            showNotification("Admin mode off");
        }
    };

    document.getElementById('adminProductForm').onsubmit = e => {
        e.preventDefault();
        const data = {
            name: adminProductName.value,
            price: adminProductPrice.value,
            icon: adminProductIcon.value,
            description: adminProductDescription.value,
            features: adminProductFeatures.value.split("\n").filter(f => f.trim() !== "")
        };
        if (editingProductId) {
            updateProduct(editingProductId, data);
            editingProductId = null;
            cancelEdit();
        } else addProduct(data);
        e.target.reset();
    };

    document.getElementById('cancelEdit').onclick = cancelEdit;

    document.getElementById('orderForm').onsubmit = e => {
        e.preventDefault();
        const msg = `Order Request:%0AName: ${name.value}%0APhone: ${phone.value}%0AProduct: ${product.value}`;
        window.open(`https://wa.me/919840694616?text=${msg}`, "_blank");
        showNotification("Order sent via WhatsApp!");
        e.target.reset();
    };

    document.getElementById('contactForm').onsubmit = e => {
        e.preventDefault();
        const msg = `Contact Request:%0AName: ${contact-name.value}%0APhone: ${contact-phone.value}%0AMessage: ${message.value}`;
        window.open(`https://wa.me/919840694616?text=${msg}`, "_blank");
        showNotification("Message sent via WhatsApp!");
        e.target.reset();
    };
});
