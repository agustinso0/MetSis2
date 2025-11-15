// Funcion para formatear fechas en español - convierte timestamps del backend a formato legible
export const formatDate = (dateString?: string): string => {
  if (!dateString) return "Fecha no disponible";

  try {
    const date = new Date(dateString);
    // formato largo en español - da fechas como "15 de enero de 2024"
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long", // mes completo como "enero", no numero
      day: "numeric",
    });
  } catch {
    // manejo de errores de parsing - evita crashes por fechas malformadas
    return "Fecha no válida";
  }
};

// Funcion para truncar texto largo - permite mostrar previews sin desbordar el layout
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text; // si es corto, devolverlo tal como esta
  return text.substring(0, maxLength) + "..."; // cortar y agregar puntos suspensivos
};

// Funcion para validar formato de email - verifica que los emails sean validos antes de enviar
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regex basico pero efectivo para emails
  return emailRegex.test(email); // retorna true si coincide con el patron
};

// Funcion para manejar errores de manera consistente - normaliza mensajes de error de diferentes fuentes
export const getErrorMessage = (error: unknown): string => {
  if (typeof error === "string") return error; // si ya es string, usarlo directamente
  if (error instanceof Error) return error.message; // si es Error object, extraer el mensaje
  return "Ha ocurrido un error inesperado"; // fallback para casos raros
};
