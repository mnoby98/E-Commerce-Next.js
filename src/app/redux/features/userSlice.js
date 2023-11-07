import toast from "react-hot-toast";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  user: {},
  cart: [],
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    currentUser(state, action) {
      state.user = action.payload;
    },
    setCart(state, action) {
      state.cart = action.payload;
    },
    addItemToCart(state, action) {
      state.cart.products.push(action.payload);

      //get totalProducts in cart
      // state.cart.totalProducts = state.cart?.products?.length;
    },
    deleteItem(state, action) {
      state.cart.products = state.cart.products.filter(
        (item) => item.id !== action.payload
      );
      state.cart.totalProducts = state.cart.products.length;
      toast.success(`Product is deleted`);
    },
    increaseItemQuantity(state, action) {
      const product = state.cart.products.find(
        (item) => item.id === action.payload
      );
      console.log("product from slice", product);
      product.quantity = Number(product.quantity) + 1;
      product.total = Number(product.quantity) * Number(product.price);
      product.discountedPrice =
        product.total * (Number(product.discountPercentage) / 100);
      //getTotal Quantity for cart
      state.cart.totalQuantity = state.cart?.products.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
      //getTotal Price for cart
      state.cart.total = state.cart?.products.reduce(
        (sum, item) => sum + item.total,
        0
      );
    },
    decreaseItemQuantity(state, action) {
      const product = state.cart.products.find(
        (item) => item.id === action.payload
      );
      product.quantity--;
      product.total = Number(product.quantity) * Number(product.price);
      product.discountedPrice =
        product.total * (Number(product.discountPercentage) / 100);
      //getTotal Quantity for cart
      state.cart.totalQuantity = state.cart?.products.reduce(
        (sum, item) => item.quantity + sum,
        0
      );

      //getTotal Price for cart
      state.cart.total = state.cart?.products.reduce(
        (sum, item) => item.total + sum,
        0
      );
      if (product.quantity === 0)
        userSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart.products = [];
    },
  },
});

export const {
  currentUser,
  setCart,
  addItemToCart,
  clearCart,
  decreaseItemQuantity,
  increaseItemQuantity,
} = userSlice.actions;

export default userSlice.reducer;
export const getCart = (state) => state?.user?.cart?.products;
export const getTotalCartQuantity = (state) =>
  state.cart?.products.reduce((sum, item) => sum + item.quantity, 0);
export const getTotalCartPrice = (state) =>
  state.cart.products.reduce((sum, item) => sum + item.total, 0);
export const getCurrentQuantityById = (id) => (state) =>
  state.cart.products.find((item) => item.id === id)?.quantity ?? 0;
