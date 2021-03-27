//
//

import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';

import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';

import { Auth0Provider } from '@auth0/auth0-react';
// import AppRouter from './practice/AppRouter';

// *** Domain ***
// dev-u05q57yo.us.auth0.com

// *** ClientID ***
// uwpbwWXFzNmX7Wa2t8g1FsqFmQb4taOk

// *** Email ***
// test@test.com

// *** Password ***
// test1234_

ReactDOM.render(
  <Auth0Provider
    domain='dev-u05q57yo.us.auth0.com'
    clientId='uwpbwWXFzNmX7Wa2t8g1FsqFmQb4taOk'
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
            {/* <AppRouter /> */}
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById('root')
);
