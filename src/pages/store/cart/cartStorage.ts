import type { Product, CartItem } from "../../../types/product";

const CART_KEY = "cart";

export const getCart = (): CartItem[] => {
  const cartStorage = localStorage.getItem(CART_KEY);

  if (!cartStorage) {
    return [];
  }

  return JSON.parse(cartStorage) as CartItem[];
};

export const saveCart = (cart: CartItem[]): void => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const addToCart = (product: Product, quantity: number = 1): void => {
  const cart = getCart();

  const productInCart = cart.find((item) => item.id === product.id);

  if (productInCart) {
    productInCart.cantidad += quantity;
  } else {
    cart.push({
      ...product,
      cantidad: quantity,
    });
  }

  saveCart(cart);
};

export const clearCart = (): void => {
  localStorage.removeItem(CART_KEY);
};

export const updateQuantity = (productId: number, delta: number): void => {
  const cart = getCart();

  const product = cart.find(item => item.id === productId);

  if (!product) return;

  product.cantidad += delta;

  if (product.cantidad <= 0) {
    const newCart = cart.filter(item => item.id !== productId);
    saveCart(newCart);
    return;
  }

  saveCart(cart);
};

export const removeFromCart = (productId: number): void => {
  const cart = getCart();

  const newCart = cart.filter((item) => item.id !== productId);

  saveCart(newCart);
};

export const getCartCount = (): number => {
  const cart = getCart();

  let total = 0;

  cart.forEach((item) => {
    total += item.cantidad;
  });

  return total;
};