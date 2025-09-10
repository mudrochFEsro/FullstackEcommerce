import { create } from "zustand";

type CartItem = {
    product: any;
    quantity: number;
};

type CartStore = {
    items: CartItem[];
    addProduct: (product: any) => void;
    resetCart: () => void;
};

export const useCart = create<CartStore>((set) => ({
    items: [],
    addProduct: (product) =>
        set((state) => ({
            items: [...state.items, { product, quantity: 1 }],
        })),
    resetCart: () => set({ items: [] }),
}));