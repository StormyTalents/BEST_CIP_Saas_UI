import CartIcon from "@components/icons/cart-icon";
import { useCart } from "@contexts/cart/cart.context";
import { useUI } from "@contexts/ui.context";

const CartButton = () => {
  const { openCart } = useUI();
  const { totalItems } = useCart();
  function handleCartOpen() {
    return openCart();
  }

  return (
    <button
      className="flex items-center justify-center flex-shrink-0 relative focus:outline-none transform text-heading lg:text-white"
      onClick={handleCartOpen}
      aria-label="cart-button"
    >
      <CartIcon />
      <span className="cart-counter-badge flex items-center justify-center bg-gray-800 lg:bg-primary text-white absolute -top-2.5 xl:-top-3 -end-2.5 xl:-end-3 rounded-full font-bold">
        {totalItems}
      </span>
    </button>
  );
};

export default CartButton;
