(function () {
  // Shopping Cart Manager
  const ShoppingCart = {
    storageKey: "syko_shopping_cart",

    getCart() {
      try {
        const data = localStorage.getItem(this.storageKey);
        return data ? JSON.parse(data) : [];
      } catch (error) {
        console.warn("Failed to retrieve cart from localStorage:", error);
        return [];
      }
    },

    saveCart(cart) {
      try {
        localStorage.setItem(this.storageKey, JSON.stringify(cart));
        this.notifyCartChanged();
      } catch (error) {
        console.warn("Failed to save cart to localStorage:", error);
      }
    },

    addItem(item) {
      const cart = this.getCart();
      const existingItem = cart.find(
        (cartItem) => cartItem.id === item.id && cartItem.source === item.source
      );

      let addedQuantity = item.quantity || 1;
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + addedQuantity;
      } else {
        cart.push({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: addedQuantity,
          source: item.source
        });
      }

      this.saveCart(cart);
      
      // Show notification
      this.showNotification(`${addedQuantity}x ${item.name} added to cart`);
      
      return cart;
    },

    showNotification(message) {
      // Remove existing toast
      const existingToast = document.querySelector('.cart-toast');
      if (existingToast) existingToast.remove();
      
      const toast = document.createElement('div');
      toast.className = 'cart-toast';
      toast.textContent = message;
      document.body.appendChild(toast);
      
      setTimeout(() => {
        if (toast && toast.parentNode) toast.remove();
      }, 2500);
    },

    removeItem(itemId, source) {
      let cart = this.getCart();
      const removedItem = cart.find((item) => item.id === itemId && item.source === source);
      cart = cart.filter((item) => !(item.id === itemId && item.source === source));
      this.saveCart(cart);
      if (removedItem) {
        this.showNotification(`${removedItem.name} removed from cart`);
      }
      return cart;
    },

    updateQuantity(itemId, source, quantity) {
      const cart = this.getCart();
      const item = cart.find((cartItem) => cartItem.id === itemId && cartItem.source === source);
      if (item) {
        const oldQty = item.quantity;
        item.quantity = Math.max(1, parseInt(quantity) || 1);
        this.saveCart(cart);
        if (oldQty !== item.quantity) {
          this.showNotification(`${item.name} quantity updated to ${item.quantity}`);
        }
      }
      return cart;
    },

    clearCart() {
      localStorage.removeItem(this.storageKey);
      this.notifyCartChanged();
      this.showNotification("Cart cleared");
    },

    getTotal() {
      const cart = this.getCart();
      return cart.reduce((total, item) => {
        const price = parseFloat(item.price.replace(/[^0-9.]/g, "")) || 0;
        return total + price * item.quantity;
      }, 0);
    },

    getItemCount() {
      const cart = this.getCart();
      return cart.reduce((count, item) => count + item.quantity, 0);
    },

    notifyCartChanged() {
      const event = new CustomEvent("cartChanged", { detail: this.getCart() });
      document.dispatchEvent(event);
    },

    // Clear cart on page refresh (F5 / reload)
    setupClearOnRefresh() {
      const navigationEntries = performance.getEntriesByType("navigation");
      if (navigationEntries.length > 0 && navigationEntries[0].type === "reload") {
        localStorage.removeItem(this.storageKey);
        this.notifyCartChanged();
      }
    }
  };

  // Cart UI Manager
  const CartUI = {
    cartIconSelector: ".js-cart-icon-button",
    cartModalSelector: ".js-shopping-cart-modal",
    cartBadgeSelector: ".js-cart-badge",

    init() {
      this.createCartWidget();
      this.attachEventListeners();
      this.updateUI();
      this.renderCart();

      // Clear cart on refresh
      ShoppingCart.setupClearOnRefresh();

      // Listen for cart changes
      document.addEventListener("cartChanged", () => {
        this.updateUI();
        this.renderCart();
      });
    },

    createCartWidget() {
      if (document.querySelector(".js-shopping-cart-modal")) return;

      const widget = document.createElement("div");
      widget.className = "js-shopping-cart-modal shopping-cart-modal";
      widget.innerHTML = `
        <div class="shopping-cart-overlay js-cart-overlay"></div>
        <div class="shopping-cart-panel">
          <div class="shopping-cart-header">
            <h2 class="shopping-cart-title">Shopping Cart</h2>
            <button type="button" class="js-cart-close-btn cart-close-btn" aria-label="Close cart">✕</button>
          </div>
          <div class="shopping-cart-content">
            <div class="js-cart-items-container shopping-cart-items"></div>
            <div class="shopping-cart-empty-state js-empty-state">
              <p>Your cart is empty</p>
            </div>
          </div>
          <div class="shopping-cart-footer">
            <div class="shopping-cart-summary">
              <div class="summary-row">
                <span>Subtotal:</span>
                <span class="js-cart-subtotal">$0.00</span>
              </div>
              <div class="summary-row summary-total">
                <span>Total:</span>
                <span class="js-cart-total">$0.00</span>
              </div>
            </div>
            <button type="button" class="btn btn-syko-primary btn-full js-checkout-btn" disabled>Proceed to Checkout</button>
            <button type="button" class="btn btn-secondary btn-full js-clear-cart-btn">Clear Cart</button>
          </div>
        </div>
      `;

      document.body.appendChild(widget);
    },

    createCartIcon() {
      if (document.querySelector(".js-cart-icon-button")) return;

      const icon = document.createElement("button");
      icon.type = "button";
      icon.className = "js-cart-icon-button shopping-cart-icon";
      icon.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <span class="js-cart-badge shopping-cart-badge">0</span>
      `;
      icon.setAttribute("aria-label", "Shopping cart");

      document.body.appendChild(icon);
    },

    attachEventListeners() {
      document.addEventListener("click", (e) => {
        if (e.target.closest(".js-cart-icon-button")) {
          this.toggleCart();
        }

        if (e.target.closest(".js-cart-close-btn")) {
          this.closeCart();
        }

        if (e.target.matches(".js-cart-overlay")) {
          this.closeCart();
        }

        if (e.target.closest(".js-remove-item-btn")) {
          const btn = e.target.closest(".js-remove-item-btn");
          const itemId = btn.getAttribute("data-item-id");
          const source = btn.getAttribute("data-source");
          ShoppingCart.removeItem(itemId, source);
        }

        if (e.target.closest(".js-qty-change")) {
          const btn = e.target.closest(".js-qty-change");
          const itemId = btn.getAttribute("data-item-id");
          const source = btn.getAttribute("data-source");
          const change = parseInt(btn.getAttribute("data-change"));
          const currentQty = parseInt(
            btn.closest(".cart-item-qty").querySelector(".qty-value").textContent
          );
          const newQty = currentQty + change;
          if (newQty > 0) {
            ShoppingCart.updateQuantity(itemId, source, newQty);
          }
        }

        if (e.target.closest(".js-clear-cart-btn")) {
          if (confirm("Are you sure you want to clear your cart?")) {
            ShoppingCart.clearCart();
          }
        }

        if (e.target.closest(".js-checkout-btn")) {
          this.proceedToCheckout();
        }
      });
    },

    toggleCart() {
      const modal = document.querySelector(this.cartModalSelector);
      if (!modal) return;
      modal.classList.toggle("is-open");
    },

    openCart() {
      const modal = document.querySelector(this.cartModalSelector);
      if (modal) {
        modal.classList.add("is-open");
      }
    },

    closeCart() {
      const modal = document.querySelector(this.cartModalSelector);
      if (modal) {
        modal.classList.remove("is-open");
      }
    },

    updateUI() {
      const itemCount = ShoppingCart.getItemCount();
      const badge = document.querySelector(this.cartBadgeSelector);
      if (badge) {
        badge.textContent = itemCount;
      }
    },

    renderCart() {
      const cart = ShoppingCart.getCart();
      const container = document.querySelector(".js-cart-items-container");
      const emptyState = document.querySelector(".js-empty-state");
      const checkoutBtn = document.querySelector(".js-checkout-btn");

      if (!container) return;

      if (cart.length === 0) {
        container.innerHTML = "";
        if (emptyState) {
          emptyState.style.display = "block";
        }
        if (checkoutBtn) {
          checkoutBtn.disabled = true;
        }
        return;
      }

      if (emptyState) {
        emptyState.style.display = "none";
      }
      if (checkoutBtn) {
        checkoutBtn.disabled = false;
      }

      container.innerHTML = cart.map((item) => {
        const price = parseFloat(item.price.replace(/[^0-9.]/g, "")) || 0;
        const itemTotal = (price * item.quantity).toFixed(2);

        return `
          <div class="cart-item" data-item-id="${this.escapeHtml(item.id)}" data-source="${this.escapeHtml(item.source)}">
            <div class="cart-item-info">
              <div class="cart-item-name">${this.escapeHtml(item.name)}</div>
              <div class="cart-item-source">${item.source === "restaurant" ? "SYKO Restaurant" : "Dukan SYKO"}</div>
            </div>
            <div class="cart-item-price">${this.escapeHtml(item.price)}</div>
            <div class="cart-item-qty">
              <button
                type="button"
                class="qty-btn js-qty-change"
                data-item-id="${this.escapeHtml(item.id)}"
                data-source="${this.escapeHtml(item.source)}"
                data-change="-1"
                aria-label="Decrease quantity"
              >−</button>
              <span class="qty-value">${item.quantity}</span>
              <button
                type="button"
                class="qty-btn js-qty-change"
                data-item-id="${this.escapeHtml(item.id)}"
                data-source="${this.escapeHtml(item.source)}"
                data-change="1"
                aria-label="Increase quantity"
              >+</button>
            </div>
            <div class="cart-item-total">$${parseFloat(itemTotal).toFixed(2)}</div>
            <button
              type="button"
              class="btn-remove js-remove-item-btn"
              data-item-id="${this.escapeHtml(item.id)}"
              data-source="${this.escapeHtml(item.source)}"
              aria-label="Remove item"
            >🗑</button>
          </div>
        `;
      }).join("");

      const total = ShoppingCart.getTotal().toFixed(2);
      const subtotalEl = document.querySelector(".js-cart-subtotal");
      const totalEl = document.querySelector(".js-cart-total");
      if (subtotalEl) subtotalEl.textContent = "$" + total;
      if (totalEl) totalEl.textContent = "$" + total;
    },

    proceedToCheckout() {
      alert("Checkout feature coming soon! Total: $" + ShoppingCart.getTotal().toFixed(2));
    },

    escapeHtml(text) {
      const div = document.createElement("div");
      div.textContent = text;
      return div.innerHTML;
    }
  };

  window.SYKO = window.SYKO || {};
  window.SYKO.ShoppingCart = ShoppingCart;
  window.SYKO.CartUI = CartUI;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      CartUI.createCartIcon();
      CartUI.init();
    });
  } else {
    CartUI.createCartIcon();
    CartUI.init();
  }
})();