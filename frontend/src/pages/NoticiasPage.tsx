import React from "react";
import ListaNoticias from "../components/ListaNoticias";
import Layaout from "../components/layout";

const NoticiasPage: React.FC = () => {
  return (
    <Layaout>
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700/50">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <header className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-600 rounded-full mb-4">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">
                Portal de Noticias
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Descubre las últimas noticias y mantente informado
              </p>
              <div className="mt-4 flex justify-center">
                <div className="w-20 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
            </header>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8">
          <ListaNoticias />
        </div>
      </main>
    </Layaout>
  );
};

export default NoticiasPage;
