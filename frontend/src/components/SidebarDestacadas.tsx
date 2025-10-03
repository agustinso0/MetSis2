import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NoticiasService } from "../services/NoticiasService";
import { NoticiasApiRepository } from "../repositories/NoticiasRepository";
import type { Noticia } from "../types/noticia";

const service = new NoticiasService(new NoticiasApiRepository());

const SidebarDestacadas: React.FC = () => {
  const [destacadas, setDestacadas] = useState<Noticia[]>([]);

  useEffect(() => {
    service.getAll().then((noticias) => {
      const top = noticias.slice(0, 3);
      setDestacadas(top);
    });
  }, []);

  return (
    <ul className="flex flex-col gap-2">
      {destacadas.map((noticia) => (
        <li key={noticia.id}>
          <Link
            to={`/detalle/${noticia.id}`}
            className="hover:bg-blue-700 rounded px-3 py-2 cursor-pointer block"
          >
            {noticia.titulo}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SidebarDestacadas;