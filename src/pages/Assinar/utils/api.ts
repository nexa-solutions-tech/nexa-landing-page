import type { AssinaturaPayload, PlanoAPI } from "../types";

const BASE_URL = "http://localhost:8080/api";

export async function fetchPlanos(token: string): Promise<PlanoAPI[]> {
  const response = await fetch(`${BASE_URL}/assinaturas/planos`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    if (response.status === 401 || response.status === 403) {
      throw new Error("UNAUTHORIZED");
    }
    throw new Error("Erro ao carregar planos. Tente novamente.");
  }

  const json = await response.json();
  return json.data ?? json;
}

export async function createAssinatura(
  token: string,
  payload: AssinaturaPayload
): Promise<void> {
  const response = await fetch(`${BASE_URL}/assinaturas`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(
      (err as { message?: string }).message ?? "Erro ao criar assinatura. Tente novamente."
    );
  }
}
