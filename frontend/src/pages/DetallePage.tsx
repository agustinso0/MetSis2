import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import DetalleNoticias from "../components/DetalleNoticias";
import { NoticiasService } from "../services/NoticiasService";
import { NoticiasApiRepository } from "../repositories/NoticiasRepository";
import type { Noticia } from "../types/noticia";

const service = new NoticiasService(new NoticiasApiRepository());

const DetallePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [noticia, setNoticia] = useState<Noticia | null>(null);

  useEffect(() => {
    if (id) {
      service.getById(Number(id)).then(setNoticia);
    }
  }, [id]);

  return (
    <Layout>
      {noticia ? (
        <DetalleNoticias noticia={noticia} />
      ) : (
        <div className="text-center py-8">Cargando noticia...</div>
      )}
    </Layout>
  );
};

export default DetallePage;