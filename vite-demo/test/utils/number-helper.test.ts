import { describe, it, expect } from 'vitest'
import { add, minus, divide, multiply } from '../../src/utils/number-helper'

describe('number-helper', () => {
  it('should sum the values correctly', () => {
    expect(add(1, 1)).toBe(2)
    expect(add(1, 2)).toBe(3)
    expect(add(2, 3)).toBe(5)
    expect(add(5, 4)).toBe(9)
  })

  it('should subtract the values correctly', () => {
    expect(minus(1, 1)).toBe(0)
    expect(minus(1, 2)).toBe(-1)
    expect(minus(2, 3)).toBe(-1)
    expect(minus(5, 4)).toBe(1)
  })

  it('should divide the values correctly', () => {
    expect(divide(1, 1)).toBe(1)
    expect(divide(1, 2)).toBe(0.5)
    expect(divide(2, 3)).toBe(0.6666666666666666)
    expect(divide(5, 4)).toBe(1.25)
  })

  it('should multiply the values correctly', () => {
    expect(multiply(1, 1)).toBe(1)
    expect(multiply(1, 2)).toBe(2)
    expect(multiply(2, 3)).toBe(6)
    expect(multiply(5, 4)).toBe(20)
  })
})