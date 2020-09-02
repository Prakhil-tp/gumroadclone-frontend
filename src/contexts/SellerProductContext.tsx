import React, { createContext, useReducer, useContext } from "react";
import { Product } from "types";

type State = {
  currentView: "list" | "form";
  currentProductId: Product["id"] | null;
  products: Array<Product>;
};

type Action =
  | { type: "UPDATE_PRODUCT_LIST"; payload: Product[] }
  | { type: "SET_CURRENT_VIEW"; payload: State["currentView"] }
  | { type: "SET_CURRENT_PRODUCT_ID"; payload: State["currentProductId"] };

interface ContextValue extends State {
  updateProductList: (productList: Product[]) => void;
  setCurrentProductId: (id: State["currentProductId"]) => void;
  setCurrentView: (view: State["currentView"]) => void;
}

const initialValue: ContextValue = {
  currentView: "list",
  currentProductId: null,
  products: [
    {
      id: "1",
      title: "Risk Management Course",
      sales: "4",
      total: "80",
      price: "20",
      type: "classic"
    },
    {
      id: "2",
      title: "DevOps Course",
      sales: "5",
      total: "150",
      price: "30",
      type: "membership"
    }
  ],
  updateProductList: () => {},
  setCurrentProductId: () => {},
  setCurrentView: () => {}
};

export const SellerProductContext = createContext(initialValue);

function productsReducer(state: State, action: Action) {
  switch (action.type) {
    case "UPDATE_PRODUCT_LIST": {
      return { ...state, products: action.payload };
    }
    case "SET_CURRENT_PRODUCT_ID": {
      return { ...state, currentProductId: action.payload };
    }
    case "SET_CURRENT_VIEW": {
      return { ...state, currentView: action.payload };
    }
    default:
      return state;
  }
}

/**
 * @function useProducts - A function to simplify the usage of context.
 * @returns {ContextValue} - Value of context (`state` and setter functions)
 */
export function useProducts() {
  const contextValue = useContext(SellerProductContext);
  if (!contextValue) {
    throw new Error("useProducts must be used with in a ProductsProvider");
  }
  return contextValue;
}

/**
 * Wrap ProductsProvider to the component/root-component where you want to use ContextValue.
 */
export const ProductsProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialValue);

  /**
   * Action firing functions to update state value.
   */

  const updateProductList = (productList: Product[]) => {
    dispatch({ type: "UPDATE_PRODUCT_LIST", payload: productList });
  };

  const setCurrentProductId = (id: State["currentProductId"]) => {
    dispatch({ type: "SET_CURRENT_PRODUCT_ID", payload: id });
  };

  const setCurrentView = (view: State["currentView"]) => {
    dispatch({ type: "SET_CURRENT_VIEW", payload: view });
  };

  return (
    <SellerProductContext.Provider
      value={{
        currentView: state.currentView,
        currentProductId: state.currentProductId,
        products: state.products,
        updateProductList,
        setCurrentProductId,
        setCurrentView
      }}
    >
      {children}
    </SellerProductContext.Provider>
  );
};
