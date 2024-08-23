import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const loadCartItems = async () => {
  try {
    const serializedCartItems = await AsyncStorage.getItem("cartItems");
    if (serializedCartItems === null) {
      return [];
    }
    return JSON.parse(serializedCartItems);
  } catch (error) {
    console.error("Error loading cart items from AsyncStorage:", error);
    return [];
  }
};

const initialState = {
  items: [],
};

// Load cart items from AsyncStorage when the state is initialized
(async () => {
  initialState.items = await loadCartItems();
})();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push({
          ...action.payload,
          quantity: action.payload.quantity,
        });
      }

      AsyncStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      AsyncStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      AsyncStorage.removeItem("cartItems");
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        AsyncStorage.setItem("cartItems", JSON.stringify(state.items));
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        AsyncStorage.setItem("cartItems", JSON.stringify(state.items));
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
