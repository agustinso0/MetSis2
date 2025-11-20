import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import ListaNoticias from "../components/ListaNoticias";

jest.mock("react-router-dom", () => ({
  Link: ({ children, to }: { children: React.ReactNode; to: string }) => (
    <a href={to}>{children}</a>
  ),
}));

jest.mock("../hooks", () => ({
  useNoticias: () => ({
    noticias: [
      { id: 1, titulo: "Mock 1", contenido: "Contenido 1", autor: "Autor 1" },
      { id: 2, titulo: "Mock 2", contenido: "Contenido 2", autor: "Autor 2" },
    ],
    loading: false,
    error: null,
    retry: jest.fn(),
  }),
}));

describe("ListaNoticias (con mock de servicio)", () => {
  it("renderiza noticias usando el hook mock", async () => {
    render(<ListaNoticias />);

    await waitFor(() => {
      expect(screen.getAllByText(/Mock/i)).toHaveLength(2);
      expect(screen.getByText("Mock 1")).toBeInTheDocument();
      expect(screen.getByText("Mock 2")).toBeInTheDocument();
    });
  });
});
