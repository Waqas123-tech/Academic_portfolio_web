// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock browser APIs that are not available in JSDOM during tests.
Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: class {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
  },
});

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  configurable: true,
  value: query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});
