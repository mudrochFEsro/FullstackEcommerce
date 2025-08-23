import {Text} from '@/components/ui/text'
import {useLocalSearchParams} from "expo-router";
import products from '@/assets/products.json'
import {Card} from "@/components/ui/card";
import {Image} from "@/components/ui/image";
import {VStack} from "@/components/ui/vstack";
import {Heading} from "@/components/ui/heading";
export default function ProductDetails() {
    const { id } = useLocalSearchParams();

    const product = products.find((product) => product.id === Number(id));

    if (!product) {
        return <Text>Product not found</Text>
    }

    return (
        <Card className="p-4 rounded-lg w-full">
            <Image
                source={{
                    uri: product.image,
                }}
                className="h-[260px] w-full rounded-md aspect-[4/3]"
                alt={`${product.name} image`}
                resizeMode="contain"
            />
            <Text className="text-sm font-normal mb-2 text-typography-700">
                {product.name}
            </Text>
            <VStack className="mb-0">
                <Heading size="xl">
                    ${product.price}
                </Heading>
            </VStack>
        </Card>

    )
}