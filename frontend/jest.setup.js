const mockImportMeta = {
  env: {
    VITE_API_URL: 'http://localhost:3000'
  }
};

Object.defineProperty(globalThis, 'import', {
  value: {
    meta: mockImportMeta
  },
  configurable: true,
  writable: true
});

global.import = {
  meta: mockImportMeta
};

// Mock fetch global para tests
if (!globalThis.fetch) {
  globalThis.fetch = jest.fn();
}