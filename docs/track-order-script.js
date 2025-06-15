document.addEventListener('DOMContentLoaded', () => {
    console.log("track-order-script.js - DOMContentLoaded event fired.");
    const currentOrder = JSON.parse(localStorage.getItem('currentOrder'));
    console.log("track-order-script.js - Retrieved currentOrder from localStorage:", currentOrder);

    if (currentOrder) {
        // Populate estimated delivery time
        const estimatedDeliveryTimeElement = document.getElementById('estimated-delivery-time');
        if (estimatedDeliveryTimeElement) {
            estimatedDeliveryTimeElement.textContent = currentOrder.deliveryTime || 'N/A';
            console.log("track-order-script.js - Estimated Delivery Time set to:", estimatedDeliveryTimeElement.textContent);
        }

        // Populate order details
        const orderItemsContainer = document.getElementById('order-items');
        if (orderItemsContainer) {
            orderItemsContainer.innerHTML = currentOrder.items.map(item => `
                <div class="order-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="order-item-details">
                        <div class="order-item-name">${item.name}</div>
                        <div class="order-item-quantity">Quantity: ${item.quantity}</div>
                    </div>
                    <div class="order-item-price">₹${item.price}</div>
                </div>
            `).join('');
            console.log("track-order-script.js - Order items populated.");
        }

        // Populate order summary
        const orderSummaryContainer = document.getElementById('order-summary');
        if (orderSummaryContainer) {
            orderSummaryContainer.innerHTML = `
                <div class="summary-row">
                    <span>Items Total</span>
                    <span>₹${currentOrder.subtotal}</span>
                </div>
                <div class="summary-row">
                    <span>Delivery Fee</span>
                    <span>₹${currentOrder.deliveryFee}</span>
                </div>
                <div class="summary-row">
                    <span>Taxes</span>
                    <span>₹${currentOrder.taxes}</span>
                </div>
                <div class="summary-row total">
                    <span>Total Amount</span>
                    <span>₹${currentOrder.total}</span>
                </div>
            `;
            console.log("track-order-script.js - Order summary populated.");
        }

        // Populate delivery address
        const deliveryAddressContainer = document.getElementById('delivery-address-details');
        if (deliveryAddressContainer && currentOrder.deliveryAddress) {
            const address = currentOrder.deliveryAddress;
            deliveryAddressContainer.innerHTML = `
                <div class="address-card">
                    <div class="address-type">
                        <i class="fas fa-home"></i> <span>${address.type || 'Home'}</span>
                    </div>
                    <p>${address.name}</p>
                    <p>${address.street}, ${address.landmark}</p>
                    <p>${address.city}, ${address.state} - ${address.pincode}</p>
                    <p>Phone: ${address.phone}</p>
                </div>
            `;
            console.log("track-order-script.js - Delivery address populated.", address);
        } else if (deliveryAddressContainer) {
             deliveryAddressContainer.innerHTML = '<p>Delivery address not provided.</p>';
             console.log("track-order-script.js - Delivery address not available or container not found.");
        }

        // Update order status (basic example)
        const orderStatusSteps = document.querySelectorAll('.status-step');
        let currentStatusIndex = 0;
        switch (currentOrder.status) {
            case 'Order Placed':
                currentStatusIndex = 0;
                break;
            case 'Preparing':
                currentStatusIndex = 1;
                break;
            case 'On the Way':
                currentStatusIndex = 2;
                break;
            case 'Delivered':
                currentStatusIndex = 3;
                break;
        }

        orderStatusSteps.forEach((step, index) => {
            if (index <= currentStatusIndex) {
                step.classList.add('completed');
            }
            if (index === currentStatusIndex) {
                step.classList.add('active');
            }
        });
        console.log("track-order-script.js - Order status updated to step:", currentStatusIndex);

    } else {
        // No order found, redirect or display message
        const orderTrackingContainer = document.querySelector('.order-tracking');
        if (orderTrackingContainer) {
            orderTrackingContainer.innerHTML = '<p style="text-align: center; padding: 50px;">No active order found. Please place an order first.</p>';
            console.log("track-order-script.js - No active order found in localStorage.");
        }
    }
}); 