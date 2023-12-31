import Header from "../components/Header";
import CartContainer from "../components/CartContainer";

const Cart = async () => {
  return (
    <div>
      <Header />
      <div className=" max-w-4xl m-auto py-2">
        <CartContainer />
      </div>
    </div>
  );
};

export default Cart;

export async function getData(cartId) {
  try {
    const res = await fetch(`https://dummyjson.com/carts/user/${cartId}`);
    const cart = await res.json();
    return cart;
  } catch (error) {
    throw new Error("error with getData");
  }
}
