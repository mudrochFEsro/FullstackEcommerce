import {Text} from '@/components/ui/text'
import {router, Stack, useLocalSearchParams} from "expo-router";
import {Card} from "@/components/ui/card";
import {Image} from "@/components/ui/image";
import {VStack} from "@/components/ui/vstack";
import {Heading} from "@/components/ui/heading";
import {Box} from "@/components/ui/box";
import {Button} from "@/components/ui/button";
import {ButtonText} from "@/components/ui/button";
import {useQuery} from "@tanstack/react-query";
import {fetchProductById} from "@/api/product";
import {ActivityIndicator, TouchableOpacity, View} from "react-native";
import {useCart} from "@/store/cartStore";
import {ArrowLeftIcon} from "lucide-react-native";
import {Icon} from "@/components/ui/icon"

export default function ProductDetails() {
    const {id} = useLocalSearchParams();

    // @ts-ignore
    const addProduct = useCart((state) => state.addProduct);
    // @ts-ignore
    // const cartItems = useCart(state => state.items);
    // console.log(JSON.stringify(cartItems, null, 2));

    const addToCart = () => {
        addProduct(product);
    }

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
        <Box className="flex-1 items-center ">
            <Stack.Screen
                options={{
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => router.back()}
                            className="flex-row items-center web:pl-4"
                        >
                            <Icon as={ArrowLeftIcon} size="lg" className="mr-2 text-typography-900" />
                            <Text className="text-base font-semibold text-typography-900">
                                {product.name}
                            </Text>
                        </TouchableOpacity>
                    ),
                    headerTitle: "",
                }}
            />
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
                        <Button onPress={addToCart} className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1">
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