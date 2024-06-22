import { describe, it, vi, expect } from 'vitest'
import { deepMerge, isObject, doNothing } from '../../src/utils/config-helper'

vi.spyOn(console, 'log')

describe('config-helper', () => {
  it('should merge the objects correctly', () => {
    const objectA = { a: 1, b: { c: 2 } }
    const objectB = { b: { d: 3 }, e: 4 }
    const expected = {
      a: 1,
      b: { c: 2, d: 3 },
      e: 4
    }
    expect(deepMerge(objectA, objectB)).toEqual(expected)
  })

  it('should return true for objects', () => {
    expect(isObject({})).toBe(true)
    expect(isObject({ a: 1 })).toBe(true)
    expect(isObject({ a: 1, b: { c: 2 } })).toBe(true)
  })

  it('should return false for non-objects', () => {
    expect(isObject([])).toBe(false)
    expect(isObject('')).toBe(false)
    expect(isObject(1)).toBe(false)
  })

  it('should do nothing', () => {
    doNothing()
    expect(console.log).toHaveBeenCalledOnce()
    expect(console.log).toHaveBeenCalledWith('do nothing')
  })
})