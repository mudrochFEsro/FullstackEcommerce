import {Text} from '@/components/ui/text'
import {Stack, useLocalSearchParams} from "expo-router";
import products from '@/assets/products.json'
import {Card} from "@/components/ui/card";
import {Image} from "@/components/ui/image";
import {VStack} from "@/components/ui/vstack";
import {Heading} from "@/components/ui/heading";
import {Box} from "@/components/ui/box";
import {Button} from "@/components/ui/button";
import {ButtonText} from "@/components/ui/button";
import {useQuery} from "@tanstack/react-query";
import {fetchProductById} from "@/api/product";
import {ActivityIndicator, View} from "react-native";

export default function ProductDetails() {
    const {id} = useLocalSearchParams();

    const {data: product, isLoading, error} = useQuery({
        queryKey: ['products', id],
        queryFn: () => fetchProductById(Number(id))
    });

    if(isLoading) {
        return (
            <View className="flex-1 justify-center items-center">
                <ActivityIndicator size="large" />
            </View>
        );
    }

    if(error) {
        return <Text>Product not found</Text>;
    }


    return (
        <Box className="flex-1 items-center p-3">
            <Stack.Screen options={{title: product.name}}/>
            <Card className="p-5 rounded-lg h-full max-w-[960px] w-full flex-1">
                <Box>
                    <Image
                        source={{
                            uri: product.image,
                        }}
                        className="h-[260px] w-full rounded-md "
                        alt={`${product.name} image`}
                        resizeMode="contain"
                    />
                </Box>
                <Box>
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
                </Box>
            </Card>
        </Box>
    )
}