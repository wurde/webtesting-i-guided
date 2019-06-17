'use strict'

/**
 * Dependencies
 */

const { add } = require('./calculator.js')

/**
 * Assertions
 */

describe("Test calculator", () => {
  it("Should add a + b", () => {
    expect(add(1,3)).toBe(4)
  })
})
