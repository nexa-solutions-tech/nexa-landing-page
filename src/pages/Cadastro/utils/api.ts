import type { FormData, SuccessData } from "../types";

export async function registerClinica(data: FormData): Promise<SuccessData> {
  const payload = {
    ...data,
    cnpj: data.cnpj.replace(/\D/g, ""),
  };

  const response = await fetch("http://localhost:8080/api/cadastro", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(
      (err as { message?: string }).message ?? "Erro ao cadastrar. Tente novamente."
    );
  }

  const json = await response.json();
  return json.data ?? json;
}
