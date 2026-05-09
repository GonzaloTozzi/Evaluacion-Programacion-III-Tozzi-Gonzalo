import { getCart, clearCart, updateQuantity, removeFromCart } from "./cartStorage";
import type { CartItem } from "../../../types/product";


const cartContainerElement = document.querySelector<HTMLDivElement>("#cart-container");
const totalContainerElement = document.querySelector<HTMLHeadingElement>("#cart-total");
const clearCartButtonElement = document.querySelector<HTMLButtonElement>("#clear-cart");

if (!cartContainerElement || !totalContainerElement || !clearCartButtonElement) {
  throw new Error("No se encontraron elementos del carrito en el HTML");
}

const cartContainer = cartContainerElement;
const totalContainer = totalContainerElement;
const clearCartButton = clearCartButtonElement;

function renderCart() {
  const cart: CartItem[] = getCart();

  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = `
    <p class ="empty-state">
      El carrito esta vacio.
    </p>
    `;

    totalContainer.textContent = "";
    return;
  }
  let total = 0;

  cart.forEach((item) => {
    const subtotal = item.precio * item.cantidad;
    total += subtotal;

    const div = document.createElement("div");
    div.classList.add("cart-item");

    div.innerHTML = `
      <h3>${item.nombre}</h3>
      <p>Precio: $${item.precio}</p>
      <div class="cart-quantity-control">
        <button class="btn-minus" data-id="${item.id}">-</button>
        <span>Cantidad: ${item.cantidad}</span>
        <button class="btn-plus" data-id="${item.id}">+</button>
      </div>
      <p>Subtotal: $${subtotal}</p>
      <button class="btn-remove" data-id="${item.id}">Eliminar</button>
    `;

    cartContainer.appendChild(div);
  });

  const plusButtons = document.querySelectorAll<HTMLButtonElement>(".btn-plus");
  const minusButtons = document.querySelectorAll<HTMLButtonElement>(".btn-minus");
  const removeButtons = document.querySelectorAll<HTMLButtonElement>(".btn-remove");

  plusButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.id);

      updateQuantity(id, 1);
      renderCart();
    });
  });

  minusButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.id);

      updateQuantity(id, -1);
      renderCart();
    });
  });

  removeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const id = Number(button.dataset.id);

    removeFromCart(id);
    renderCart();
  });
});

  totalContainer.textContent = `Total: $${total}`;
}

renderCart();

clearCartButton.addEventListener("click", () => {
  clearCart();
  renderCart();
});

