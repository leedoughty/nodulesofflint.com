import React from 'react'
import {render, fireEvent, cleanup, waitForElement} from 'react-testing-library'
import { MemoryRouter, Route } from 'react-router';
import RocksPage from './RocksPage'

afterEach(cleanup)

describe('Rocks page component',() => {
  it('creates list of images',() => {
    const {getByText, getByTestId, container, asFragment, debug} = render(
      <MemoryRouter>
        <Route path="/rockspage">
          <RocksPage />
        </Route>
      </MemoryRouter>
    );
    debug();
    const component = getByTestId('images of rocks');
    expect(container.querySelector('.test')).to.have.length();
  })
})
