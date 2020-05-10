import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

describe(`Header component`, () => {
  it('renders the component as expected', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
            <Header />
        </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})
