import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './LoginForm';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

describe(`LoginForm component`, () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<LoginForm />, div);
      ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the component as expected', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
            <LoginForm />
        </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})
