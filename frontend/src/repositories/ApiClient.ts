export class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  // Peticiones GET - para obtener datos del servidor
  async get<T>(endpoint: string): Promise<T> {
    const res = await fetch(`${this.baseUrl}${endpoint}`);
    if (!res.ok) throw new Error("Error al cargar datos");
    return res.json();
  }

  // Peticiones POST - para crear nuevos recursos
  async post<T, B = unknown>(endpoint: string, body: B): Promise<T> {
    const res = await fetch(`${this.baseUrl}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error("Error al enviar datos");
    return res.json();
  }

  // Peticiones PUT - para actualizar recursos existentes
  async put<T, B = unknown>(endpoint: string, body: B): Promise<T> {
    const res = await fetch(`${this.baseUrl}${endpoint}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error("Error al actualizar datos");
    return res.json();
  }

  // Peticiones DELETE - para eliminar recursos
  async delete<T>(endpoint: string): Promise<T> {
    const res = await fetch(`${this.baseUrl}${endpoint}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Error al eliminar datos");
    return res.json();
  }
}
