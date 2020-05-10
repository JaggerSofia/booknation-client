import React from 'react';
import ReactDOM from 'react-dom';
import ReviewForm from './ReviewForm';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

describe(`ReviewForm component`, () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<ReviewForm />, div);
      ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the component as expected', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
            <ReviewForm />
        </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
})
