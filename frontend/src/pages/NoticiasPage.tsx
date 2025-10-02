import React from "react";
import ListaNoticias from "../components/ListaNoticias";

const NoticiasPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <ListaNoticias />
    </main>
  );
};

export default NoticiasPage;
