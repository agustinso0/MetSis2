import { render, screen, waitFor } from "@testing-library/react";
import ListaNoticias from "../components/ListaNoticias";

jest.mock("react-router-dom", () => ({
  Link: ({ children, to }: { children: React.ReactNode; to: string }) => (
    <a href={to}>{children}</a>
  ),
}));

describe("ListaNoticias", () => {
  beforeEach(() => {
    const mockFetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve([
            {
              id: 1,
              titulo: "Noticia 1",
              contenido: "Contenido de la noticia 1",
              autor: "Autor 1",
              imagen: "",
            },
            {
              id: 2,
              titulo: "Noticia 2",
              contenido: "Contenido de la noticia 2",
              autor: "Autor 2",
              imagen: "",
            },
          ]),
      })
    );
    globalThis.fetch = mockFetch as unknown as typeof fetch;
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("renderiza la lista de noticias", async () => {
    render(<ListaNoticias />);
    expect(screen.getByText(/Cargando noticias/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Noticia 1")).toBeInTheDocument();
      expect(screen.getByText("Noticia 2")).toBeInTheDocument();
      expect(screen.getByText("Contenido de la noticia 1")).toBeInTheDocument();
      expect(screen.getByText("Contenido de la noticia 2")).toBeInTheDocument();
      expect(screen.getByText("Autor 1")).toBeInTheDocument();
      expect(screen.getByText("Autor 2")).toBeInTheDocument();
    });
  });
});
