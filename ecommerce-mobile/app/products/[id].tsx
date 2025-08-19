import {Text} from '@/components/ui/text'
import {useLocalSearchParams} from "expo-router";
import products from '@/assets/products.json'
export default function ProductDetails() {
    const { id } = useLocalSearchParams();

    const product = products.find((product) => product.id === Number(id));

    if (!product) {
        return <Text>Product not found</Text>
    }

    return <Text>Product details: {product.name}</Text>
}