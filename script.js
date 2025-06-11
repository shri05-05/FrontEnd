let cart = JSON.parse(localStorage.getItem("cart")) || [];
let orders = JSON.parse(localStorage.getItem("orders")) || [];

function addToCart(product, price) {
  cart.push({ product, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product} added to cart`);
}

function displayCart() {
  const cartList = document.getElementById("cartList");
  if (!cartList) return;
  cartList.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.product} - ₹${item.price}`;
    cartList.appendChild(li);
  });
}

function placeOrder() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  orders = orders.concat(cart);
  localStorage.setItem("orders", JSON.stringify(orders));
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  document.getElementById("orderMessage").textContent = "✅ Order placed successfully!";
  displayCart();
}

function displayOrders() {
  const orderList = document.getElementById("orderList");
  if (!orderList) return;
  orderList.innerHTML = "";
  orders.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.product} - ₹${item.price}`;
    orderList.appendChild(li);
  });
}

window.onload = function () {
  displayCart();
  displayOrders();
};
