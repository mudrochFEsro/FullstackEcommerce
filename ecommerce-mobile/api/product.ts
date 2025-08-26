const API_URL = process.env.EXPO_PUBLIC_API_URL;

export async function listProducts() {
    const res = await fetch(`${API_URL}/products`);
    return await res.json()
}