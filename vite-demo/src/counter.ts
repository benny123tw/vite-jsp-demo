import { add } from '@/utils/number-helper.ts'

export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(add(counter, 1)))
  setCounter(0)
}
