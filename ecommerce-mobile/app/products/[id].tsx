import {Text} from '@/components/ui/text'
import {useLocalSearchParams} from "expo-router";
import products from '@/assets/products.json'
import {Card} from "@/components/ui/card";
import {Image} from "@/components/ui/image";
import {VStack} from "@/components/ui/vstack";
import {Heading} from "@/components/ui/heading";
import {Box} from "@/components/ui/box";
import {Button} from "@/components/ui/button";
import {ButtonText} from "@/components/ui/button";
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
                <Text size="sm" className="pb-3 pt-1">{product.description}</Text>
            </VStack>
            <Box className="flex-col sm:flex-row">
                <Button className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1">
                    <ButtonText size="sm">Add to cart</ButtonText>
                </Button>
                <Button
                    variant="outline"
                    className="px-4 py-2 border-outline-300 sm:flex-1"
                >
                    <ButtonText size="sm" className="text-typography-600">
                        Wishlist
                    </ButtonText>
                </Button>
            </Box>
        </Card>

    )
}