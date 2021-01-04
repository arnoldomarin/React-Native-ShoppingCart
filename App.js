import React, {useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Products from './Products';
import Cart from './Cart';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

export default function App() {
    // States
    // Cart 
    const [cart, setCart] = useState ([]);

    // page 
    const [page, setPage] = useState (PAGE_PRODUCTS);

    // function that adds product to cart 
    const addToCart = (product) => {
      // create a new cart which is a copy
      let newCart = [...cart];
      // Loop though cart to see if we have item
      let itemInCart = newCart.find((item) => product.name === item.name);

      // If the item is in the cart
      if (itemInCart) {
        itemInCart.quantity++;
      } else { // if it doesn't, we add it and make quantity 1
        itemInCart = {
          ...product,
          quantity: 1,
        }
        //push item into cart
        newCart.push(itemInCart)
      }
      // destructure array and add product to cart
      setCart(newCart);
    }

    // function that removes product to cart 
    const removeFromCart = (productToRemove) => {
      // destructure array and add product to cart
      setCart(cart.filter(product => product !== productToRemove));
    }

    // Fucntion to switch to another page 
    const navigateTo = (nextPage) => {
      setPage(nextPage);
    }

    // total cost for shopping cart
    const getTotalSum = () => { 
      return cart.reduce((sum, { cost, quantity }) => sum + cost*quantity, 0)
    };

    // To achieve the number of items in cart
    const getCartTotal = () => {
      return cart.reduce((sum, { quantity }) => sum + quantity, 0)
    }

    // set quantity for items 
    const setQuantity = ( product, amount) => {
      const numberAmount = parseInt(amount);
      const newCart = [...cart]; 
      newCart.find(item => item.name === product.name).quantity = numberAmount;

      // fin the product
      setCart(newCart);
    };
    

  return (
    <View>
      {page === PAGE_PRODUCTS && <Products cart={cart} addToCart={addToCart} navigateTo={navigateTo} getCartTotal={getCartTotal}/>}
      {page === PAGE_CART && <Cart cart={cart} removeFromCart={removeFromCart} navigateTo={navigateTo} getTotalSum={getTotalSum} setQuantity={setQuantity}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
