import type { CadastroPayload, SuccessData } from "../types";
import { extractApiErrorMessage } from "@/utils/apiError";

export async function registerClinica(data: CadastroPayload): Promise<SuccessData> {
  const payload = {
    ...data,
    cnpj: data.cnpj?.replace(/\D/g, "") ?? null,
  };

  const response = await fetch("http://localhost:8080/api/cadastro", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(extractApiErrorMessage(err, "Erro ao cadastrar. Tente novamente."));
  }

  const json = await response.json();
  return json.data ?? json;
}
