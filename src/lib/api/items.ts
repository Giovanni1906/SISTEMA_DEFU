// lib/api/items.ts
const API = process.env.API_INVENTARIO_URL;

export async function getAllItems() {
  const res = await fetch(`${API}/api/items`, { cache: "no-store" });
  if (!res.ok) throw new Error("Error al obtener los items");
  return res.json();
}

export async function getItemById(id: number) {
  const res = await fetch(`${API}/api/items/${id}`);
  if (!res.ok) throw new Error("Error al obtener el item");
  return res.json();
}

export async function createItem(data: any) {
  const res = await fetch(`${API}/api/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Error al crear el item");
  return res.json();
}

export async function updateItem(id: number, data: any) {
  const res = await fetch(`${API}/api/items/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Error al actualizar el item");
  return res.json();
}

export async function deleteItem(id: number) {
  const res = await fetch(`${API}/api/items/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Error al eliminar el item");
  return res.json();
}
