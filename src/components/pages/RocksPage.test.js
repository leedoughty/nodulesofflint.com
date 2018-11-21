import React from 'react'
import {render, fireEvent, cleanup, waitForElement} from 'react-testing-library'
import RocksPage from './RocksPage'

afterEach(cleanup)

describe('Rocks page component',() => {
  it('creates list of images',() => {
    render(<RocksPage />)
  })
})
