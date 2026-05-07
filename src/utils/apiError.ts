/**
 * Extrai a mensagem de erro do envelope padrão do backend.
 *
 * O backend envolve respostas de erro como:
 *   { status, type, data: { message, ... } }
 *
 * Em alguns endpoints (ou erros de framework), a mensagem pode vir na raiz.
 * Esta função procura nas duas posições e devolve `fallback` quando nenhuma
 * mensagem utilizável é encontrada.
 */
type ApiErrorEnvelope = {
  message?: string;
  data?: { message?: string };
};

export function extractApiErrorMessage(err: unknown, fallback: string): string {
  if (err && typeof err === "object") {
    const e = err as ApiErrorEnvelope;
    const wrapped = e.data?.message?.trim();
    if (wrapped) return wrapped;
    const root = e.message?.trim();
    if (root) return root;
  }
  return fallback;
}
