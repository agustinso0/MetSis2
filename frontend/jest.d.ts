// Tipos globales para Jest
declare global {
  namespace NodeJS {
    interface Global {
      import: {
        meta: {
          env: {
            VITE_API_URL: string;
          };
        };
      };
    }
  }
}

export {};