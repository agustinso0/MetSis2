import React from "react";

const Categorias: React.FC = () => {
  const categorias = ["Política", "Deportes", "Tecnología", "Economía", "Cultura"];

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Categorías</h2>
      <p className="text-gray-700 mb-4">
        Explora las noticias organizadas por categorías:
      </p>

      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {categorias.map((cat) => (
          <li
            key={cat}
            className="bg-blue-100 text-blue-900 font-semibold p-4 rounded-lg text-center cursor-pointer hover:bg-blue-200 transition"
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categorias;
