import React from "react";
import ListaNoticias from "../components/ListaNoticias";
import Layout from "../components/layout"; // Importa el layout

const NoticiasPage: React.FC = () => {
  return (
    <Layout>
      <main className="min-h-screen bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">
              Portal de Noticias
            </h1>
            <p className="text-gray-400">
              Mantente informado con las últimas noticias
            </p>
          </header>
          <ListaNoticias />
        </div>
      </main>
    </Layout>
  );
};

export default NoticiasPage;
