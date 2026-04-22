// admin/admin.js

class OrderManager {
    constructor() {
        this.orders = [];
    }
    
    addOrder(order) {
        order.id = this.orders.length + 1;  // Simple ID assignment
        this.orders.push(order);
        console.log('Order added:', order);
    }
    
    viewOrderStatus(orderId) {
        const order = this.orders.find(o => o.id === orderId);
        if (order) {
            console.log(`Order status for ID ${orderId}: ${order.status}`);
        } else {
            console.log('Order not found.');
        }
    }
}

// Sample usage
const orderManager = new OrderManager();
orderManager.addOrder({status: 'Pending', items: [{product: 'Burger', quantity: 2}, {product: 'Fries', quantity: 1}]});
orderManager.viewOrderStatus(1);  // View status of order with ID 1
