import React from 'react';
import ReactDOM from 'react-dom';
import Todo from '../components/Todo';
import renderer from 'react-test-renderer'
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
