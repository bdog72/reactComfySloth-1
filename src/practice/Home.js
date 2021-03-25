//
//

import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Wrapper>
        <li>
          <Link to='/home1'>Home-1</Link>
        </li>
        <li>
          <Link to='/home2'>Home-2</Link>
        </li>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.ul`
  display: block;

  li {
    a {
      color: blue;
    }
  }
`;

export default Home;
