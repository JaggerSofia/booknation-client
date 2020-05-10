import React from 'react';
import ReactDOM from 'react-dom';
import RegistrationForm from './RegistrationForm';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

describe(`RegistrationForm component`, () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<RegistrationForm />, div);
      ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the component as expected', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
            <RegistrationForm />
        </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})
