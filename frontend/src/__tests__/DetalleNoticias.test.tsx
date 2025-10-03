import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import DetalleNoticias from "../components/DetalleNoticias";
import type { Noticia } from "../types/noticia";

const mockNoticia: Noticia = {
  id: 1,
  titulo: "Noticia de prueba",
  contenido:
    "Este es el contenido de la noticia de prueba.\nCon multiples lineas de texto.",
  autor: "Juan Perez",
  imagen: "https://example.com/imagen.jpg",
  updated_at: "2024-01-15T10:30:00Z",
  publicado: true,
};

const mockNoticiaMin: Noticia = {
  id: 2,
  titulo: "Noticia minima",
  contenido: "Contenido basico",
  autor: "Ana Garcia",
};

describe("DetalleNoticias", () => {
  it("renderiza correctamente con todos los datos", () => {
    render(<DetalleNoticias noticia={mockNoticia} />);

    // Verificar que se muestra el titulo
    expect(screen.getByText("Noticia de prueba")).toBeInTheDocument();

    // Verificar que se muestra el contenido
    expect(
      screen.getByText(/Este es el contenido de la noticia/)
    ).toBeInTheDocument();

    // Verificar que se muestra el autor
    expect(screen.getByText(/Juan Perez/)).toBeInTheDocument();

    // Verificar que se muestra el ID
    expect(screen.getByText("#1")).toBeInTheDocument();

    // Verificar estado de publicacion
    expect(screen.getByText(/Publicado/)).toBeInTheDocument();
  });

  it("renderiza correctamente con datos minimos", () => {
    render(<DetalleNoticias noticia={mockNoticiaMin} />);

    expect(screen.getByText("Noticia minima")).toBeInTheDocument();
    expect(screen.getByText("Contenido basico")).toBeInTheDocument();
    expect(screen.getByText(/Ana Garcia/)).toBeInTheDocument();
    expect(screen.getByText("#2")).toBeInTheDocument();
  });

  it('muestra "Borrador" cuando publicado es false', () => {
    const noticiaNoPublicada = { ...mockNoticia, publicado: false };
    render(<DetalleNoticias noticia={noticiaNoPublicada} />);

    expect(screen.getByText(/Borrador/)).toBeInTheDocument();
  });

  it("no muestra estado de publicacion cuando publicado es undefined", () => {
    const noticiaUndefined = { ...mockNoticia };
    delete noticiaUndefined.publicado;

    render(<DetalleNoticias noticia={noticiaUndefined} />);

    // Deberia mostrar "Borrador" como valor por defecto
    expect(screen.getByText(/Borrador/)).toBeInTheDocument();
  });

  it("renderiza imagen cuando esta presente", () => {
    render(<DetalleNoticias noticia={mockNoticia} />);

    const imagen = screen.getByAltText("Noticia de prueba");
    expect(imagen).toBeInTheDocument();
    expect(imagen).toHaveAttribute("src", "https://example.com/imagen.jpg");
  });

  it("no renderiza imagen cuando no esta presente", () => {
    render(<DetalleNoticias noticia={mockNoticiaMin} />);

    const imagen = screen.queryByAltText("Noticia minima");
    expect(imagen).not.toBeInTheDocument();
  });

  it("formatea correctamente la fecha", () => {
    render(<DetalleNoticias noticia={mockNoticia} />);

    // La fecha deberia estar presente en algun formato legible
    expect(screen.getByText(/enero/i)).toBeInTheDocument();
  });

  it('muestra "Fecha no disponible" cuando no hay fecha', () => {
    render(<DetalleNoticias noticia={mockNoticiaMin} />);

    expect(screen.getByText("Fecha no disponible")).toBeInTheDocument();
  });

  it("maneja fecha invalida correctamente", () => {
    const noticiaFechaInvalida = {
      ...mockNoticia,
      updated_at: "fecha-invalida",
    };
    render(<DetalleNoticias noticia={noticiaFechaInvalida} />);

    expect(screen.getByText("Fecha no valida")).toBeInTheDocument();
  });

  it("llama a onBack cuando se hace clic en el boton volver", () => {
    const mockOnBack = jest.fn();
    render(<DetalleNoticias noticia={mockNoticia} onBack={mockOnBack} />);

    const botonVolver = screen.getByText("Volver");
    fireEvent.click(botonVolver);

    expect(mockOnBack).toHaveBeenCalledTimes(1);
  });

  it("llama a onClose cuando se hace clic en el boton cerrar", () => {
    const mockOnClose = jest.fn();
    render(<DetalleNoticias noticia={mockNoticia} onClose={mockOnClose} />);

    const botonCerrar = screen.getByLabelText("Cerrar detalle");
    fireEvent.click(botonCerrar);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("no muestra boton volver cuando onBack no esta presente", () => {
    render(<DetalleNoticias noticia={mockNoticia} />);

    const botonVolver = screen.queryByText("Volver a noticias");
    expect(botonVolver).not.toBeInTheDocument();
  });

  it("no muestra boton cerrar cuando onClose no esta presente", () => {
    render(<DetalleNoticias noticia={mockNoticia} />);

    const botonCerrar = screen.queryByLabelText("Cerrar detalle");
    expect(botonCerrar).not.toBeInTheDocument();
  });

  it("mantiene el formato de texto con saltos de linea", () => {
    render(<DetalleNoticias noticia={mockNoticia} />);

    const contenido = screen.getByText(/Este es el contenido de la noticia/);
    expect(contenido).toHaveClass("whitespace-pre-wrap");
  });

  it("tiene la estructura de accesibilidad correcta", () => {
    render(<DetalleNoticias noticia={mockNoticia} />);

    // Verificar que hay un elemento article
    const article = screen.getByRole("article");
    expect(article).toBeInTheDocument();

    // Verificar que el titulo es un h1
    const titulo = screen.getByRole("heading", { level: 1 });
    expect(titulo).toHaveTextContent("Noticia de prueba");
  });

  it("maneja error de imagen correctamente", () => {
    render(<DetalleNoticias noticia={mockNoticia} />);

    const imagen = screen.getByAltText("Noticia de prueba") as HTMLImageElement;

    // Simular error de carga de imagen
    fireEvent.error(imagen);

    // La imagen deberia estar oculta
    expect(imagen.style.display).toBe("none");
  });

  it("renderiza botones de interaccion en el footer", () => {
    render(<DetalleNoticias noticia={mockNoticia} />);

    // Los botones deberian estar presentes (compartir y like)
    const botones = screen.getAllByRole("button");
    const botonesInteraccion = botones.filter(
      (btn) =>
        !btn.textContent?.includes("Volver") &&
        !btn.getAttribute("aria-label")?.includes("Cerrar")
    );

    expect(botonesInteraccion).toHaveLength(2);
  });
});
