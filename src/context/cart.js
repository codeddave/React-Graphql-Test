import React, { Component } from "react";
//import { storeProducts } from "../data";

export const ProductContext = React.createContext();
class ProductProvider extends Component {
  state = {
    products: [],
    cart: [],
    isCartModalOpen: false,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };
  componentDidMount() {
    this.setCart();
  }
  // To Create a copy of the products coming from data.js
  /*  setNewProducts = () => {
    let newProducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      newProducts = [...newProducts, singleItem];
    });
    this.setState(() => {
      return { products: newProducts };
    });
  };
 */
  //Retrieving each item from data.js to be displayed i
  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };
  setCart = () => {
    const cart = JSON.parse(localStorage.getItem("cartData"))?.cart;
    const cartLength = JSON.parse(localStorage.getItem("cartData"))?.cart
      .length;

    this.setState(() => {
      return {
        cart: cart && cartLength ? cart : [],
      };
    });
  };
  checkCart = (product) => {
    const existingCartItem = this.state.cart.find(
      (cartItem) => cartItem.id === product.id
    );
    if (existingCartItem) {
      return this.state.cart.map((cartItem) =>
        cartItem.id === product.id
          ? {
              ...cartItem,
              total: cartItem.total + cartItem.price,
              count: cartItem.count + 1,
            }
          : cartItem
      );
    }

    return {
      ...product,
      count: 1,
    };
  };
  addToCart = (book) => {
    //const cartt = this.checkCart(product);
    const existingCartItem = this.state.cart.find(
      (cartItem) => cartItem.id === book.id
    );

    const item = () => {
      if (existingCartItem) {
        return this.state.cart.map((cartItem) =>
          cartItem.id === book.id
            ? {
                ...cartItem,
                total: cartItem.total + cartItem.price,
                count: cartItem.count + 1,
              }
            : cartItem
        );
      }
      return {
        ...book,
        count: 1,
        total: book.price,
      };
    };
    const cartt = item();
    console.log(cartt, "thisi item");
    this.setState(
      () => {
        return {
          cart: !existingCartItem ? [...this.state.cart, cartt] : [...cartt],
        };
      },
      () => {
        localStorage.setItem("cartData", JSON.stringify(this.state));
        this.addTotals();
      }
    );
  };

  increment = (id) => {
    const existingCartItem = this.state.cart.find(
      (cartItem) => cartItem.id === id
    );
    console.log(existingCartItem);
    const item = () => {
      if (existingCartItem) {
        return this.state.cart.map((cartItem) =>
          cartItem.id === existingCartItem.id
            ? {
                ...cartItem,
                total: cartItem.total + cartItem.price,
                count: cartItem.count + 1,
              }
            : cartItem
        );
      }
      return {
        ...existingCartItem,
        count: 1,
        total: existingCartItem.price,
      };
    };

    const cartt = item();
    this.setState(
      () => {
        return { cart: [...cartt] };
      },
      () => {
        localStorage.setItem("cartData", JSON.stringify(this.state));

        this.addTotals();
      }
    );
  };
  decrement = (id) => {
    const existingCartItem = this.state.cart.find(
      (cartItem) => cartItem.id === id
    );
    const item = () => {
      if (existingCartItem) {
        return this.state.cart
          .filter((cartItem) => cartItem.count > 1)
          .map((cartItem) =>
            cartItem.id === existingCartItem.id
              ? {
                  ...cartItem,
                  total: cartItem.total - cartItem.price,
                  count: cartItem.count - 1,
                }
              : cartItem
          );
      }

      return {
        ...existingCartItem,
        count: 1,
        total: existingCartItem.price,
      };
    };

    const cartt = item();

    this.setState(
      () => {
        return { cart: [...cartt] };
      },
      () => {
        localStorage.setItem("cartData", JSON.stringify(this.state));

        this.addTotals();
      }
    );
  };
  removeItem = (id) => {
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => item.id !== id);

    this.setState(
      () => {
        return {
          cart: [...tempCart],
        };
      },
      () => {
        localStorage.setItem("cartData", JSON.stringify(this.state));

        this.addTotals();
      }
    );
  };
  clearCart = () => {
    this.setState(
      () => {
        return {
          cart: [],
        };
      },
      () => {
        this.setNewProducts();
        this.addTotals();
      }
    );
  };
  addTotals = () => {
    if (this.state.cart.length) {
      let subTotal = 0;
      this.state.cart.forEach((item) => {
        subTotal += item.total;
        const total = subTotal;
        this.setState(
          () => {
            return {
              cartSubTotal: subTotal,
              cartTotal: total,
            };
          },
          () => {
            localStorage.setItem("cartData", JSON.stringify(this.state));
          }
        );
      });
    } else {
      this.setState(
        () => {
          return {
            cartSubTotal: 0,
            cartTax: 0,
            cartTotal: 0,
          };
        },
        () => {
          localStorage.setItem("cartData", JSON.stringify(this.state));
        }
      );
    }
  };
  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };
  handleCartModal = () => {
    this.setState((prevState) => {
      return {
        isCartModalOpen: !prevState.isCartModalOpen,
      };
    });
  };
  closeCartModal = () => {
    this.setState(() => {
      return {
        isCartModalOpen: false,
      };
    });
  };
  closeModal = (id) => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          addToCart: this.addToCart,

          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          handleCartModal: this.handleCartModal,
          closeCartModal: this.closeCartModal,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
