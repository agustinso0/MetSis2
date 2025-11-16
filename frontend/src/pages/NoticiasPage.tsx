import React from "react";
import ListaNoticias from "../components/ListaNoticias";
import Layout from "../components/layout";
import { Newspaper } from "lucide-react";

const NoticiasPage: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-900">
        {/* Hero Section */}
        <section className="bg-gray-800 border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
            <header className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6 shadow-lg">
                <Newspaper className="w-8 h-8 text-white" />
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight animate-fade-in font-heading">
                Portal de <span className="text-blue-400">Noticias</span>
              </h1>

              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-slide-up">
                Mantente informado con las últimas noticias y acontecimientos
                más relevantes
              </p>

              <div className="mt-8 flex justify-center">
                <div className="w-24 h-0.5 bg-blue-500 rounded-full animate-fade-in"></div>
              </div>
            </header>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-7xl mx-auto px-6 py-8 lg:py-12">
          <ListaNoticias />
        </section>
      </div>
    </Layout>
  );
};

export default NoticiasPage;
