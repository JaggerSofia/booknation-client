import { BrowserRouter } from 'react-router-dom';
import BookListItem from './BookListItem';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <BrowserRouter>
      <BookListItem />
    </BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});
