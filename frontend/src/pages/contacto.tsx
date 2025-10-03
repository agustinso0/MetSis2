import React from "react";

const Contacto: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Contacto</h2>
      <p className="mb-4 text-gray-700">
        Si querés comunicarte con nosotros, completá el siguiente formulario:
      </p>

      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Tu nombre"
          className="border p-2 rounded"
        />
        <input
          type="email"
          placeholder="Tu correo"
          className="border p-2 rounded"
        />
        <textarea
          placeholder="Tu mensaje"
          className="border p-2 rounded"
          rows={4}
        />
        <button
          type="submit"
          className="bg-blue-900 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contacto;
