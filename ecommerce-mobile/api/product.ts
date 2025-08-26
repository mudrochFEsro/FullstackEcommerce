const API_URL = process.env.EXPO_PUBLIC_API_URL;

export async function listProducts() {
    const res = await fetch(`${API_URL}/products`);
    if (!res.ok) {
        throw new Error('Error fetching products');
    }
    return await res.json()
}

export async function fetchProductById(id: number) {
    const res = await fetch(`${API_URL}/products/${id}`);
    if (!res.ok) {
        throw new Error('Error fetching specified product');
    }
    return await res.json()
}