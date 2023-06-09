import React, { useContext, useEffect, useReducer, useState } from 'react'
import { createContext } from 'react'
import { faker } from '@faker-js/faker';
import { cartReducer } from './Reducer';
import { supabase } from '../utils/supaBase';
import { filterReducer } from './Reducer';
import { userReducer } from './Reducer';

const Cart = createContext();

const Context = ({ children }) => {
  const [influencers, setInfluencers] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchInfluencers = async () => {
      const { data, error } = await supabase
        .from('influencers')
        .select('*');

      if (error) {
        setError('Could not fetch data');
        setInfluencers([]);
      } else {
        setInfluencers(data);
        setError(null);
        setIsLoading(false);
      }
    };

    fetchInfluencers();
  }, []);

  const [state, dispatch] = useReducer(cartReducer, {
    influencers: [],
    cart: [],
  });

  const [userState, userDispatch] = useReducer(userReducer, {
    user : null,
    isLoggedIn : false,
  });

  const [filterState, filterDispatch] = useReducer(filterReducer, {
    genderFilter: [],
    costFilter: [0, 5000],
    searchQuery: ""
  })

  useEffect(() => {
    dispatch({ type: 'SET_INFLUENCERS', influencers: influencers });
  }, [influencers]);

  return (
    <Cart.Provider value={{ state, dispatch, isLoading, filterState, filterDispatch, userState, userDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
