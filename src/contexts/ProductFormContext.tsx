import React, { createContext, useReducer, useContext } from "react";
import { Product } from "types";

type State = {
  currentForm: "MembershipForm" | "DetailsForm";
  currentProduct: Partial<Product>;
};

type Action =
  | { type: "SET_CURRENT_FORM"; payload: State["currentForm"] }
  | { type: "UPDATE_CURRENT_PRODUCT"; payload: State["currentProduct"] };

interface ContextValue extends State {
  setCurrentForm: (form: State["currentForm"]) => void;
  updateCurrentProduct: (product: State["currentProduct"]) => void;
}

const initialValue: ContextValue = {
  currentForm: "MembershipForm",
  currentProduct: {},
  setCurrentForm: () => {},
  updateCurrentProduct: () => {}
};

const ProductFormContext = createContext(initialValue);

function formReducer(state: State, action: Action) {
  switch (action.type) {
    case "SET_CURRENT_FORM": {
      return { ...state, currentForm: action.payload };
    }
    case "UPDATE_CURRENT_PRODUCT": {
      return { ...state, currentProduct: action.payload };
    }
    default:
      return state;
  }
}

/**
 * @function useProductForm - A helper function to return state values and setters
 * @returns {ContextValue} - Value of context (`state` and setter functions)
 */
export const useProductForm = () => {
  const contextValue = useContext(ProductFormContext);
  if (!contextValue) {
    throw new Error(
      "useProductForm must be used with in a ProductFormProvider"
    );
  }
  return contextValue;
};

export const ProductFromProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialValue);

  const setCurrentForm = (form: State["currentForm"]) => {
    return dispatch({ type: "SET_CURRENT_FORM", payload: form });
  };
  const updateCurrentProduct = (product: State["currentProduct"]) => {
    return dispatch({ type: "UPDATE_CURRENT_PRODUCT", payload: product });
  };

  return (
    <ProductFormContext.Provider
      value={{
        currentForm: state.currentForm,
        currentProduct: state.currentProduct,
        setCurrentForm,
        updateCurrentProduct
      }}
    >
      {children}
    </ProductFormContext.Provider>
  );
};
