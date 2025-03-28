document.addEventListener("DOMContentLoaded", function () {
    // 🌙 Modo Oscuro
    const toggleButton = document.getElementById("toggle-theme");
    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // 🛒 Carrito de Compras
    let cart = [];
    const cartBtn = document.getElementById("cart-btn");
    const cartSection = document.getElementById("cart");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const cartCount = document.getElementById("cart-count");

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            const name = this.dataset.name;
            const price = parseFloat(this.dataset.price);

            // Buscar si el producto ya está en el carrito
            const itemIndex = cart.findIndex(item => item.name === name);
            if (itemIndex >= 0) {
                cart[itemIndex].quantity += 1;
            } else {
                cart.push({ name, price, quantity: 1 });
            }

            updateCart();
        });
    });

    function updateCart() {
        cartItems.innerHTML = "";
        let total = 0;
        let count = 0;

        cart.forEach(item => {
            total += item.price * item.quantity;
            count += item.quantity;

            let li = document.createElement("li");
            li.textContent = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
            cartItems.appendChild(li);
        });

        cartTotal.textContent = total.toFixed(2);
        cartCount.textContent = count;
    }

    cartBtn.addEventListener("click", () => {
        cartSection.classList.toggle("hidden");
    });

    document.getElementById("checkout").addEventListener("click", () => {
        alert("¡Gracias por tu compra!");
        cart = [];
        updateCart();
        cartSection.classList.add("hidden");
    });
});
