import {FlatList, TouchableOpacity} from "react-native";
import {useCart} from "@/store/cartStore";
import {Text} from "@/components/ui/text";
import {HStack} from "@/components/ui/hstack";
import {VStack} from "@/components/ui/vstack";
import {Button, ButtonText} from "@/components/ui/button";
import {Stack, useRouter} from "expo-router";
import {Icon} from "@/components/ui/icon";
import {ArrowLeftIcon} from "lucide-react-native";

export default function CartScreen() {
    // @ts-ignore
    const items = useCart(state => state.items);
    // @ts-ignore
    const resetCart = useCart(state => state.resetCart);
    const router = useRouter();

    const onCheckout = async () => {
        resetCart()
    }

    return (
        <>
            <Stack.Screen
                options={{
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => router.back()}
                            className="flex-row items-center web:pl-4"
                        >
                            <Icon as={ArrowLeftIcon} size="lg" className="mr-2 text-typography-900" />
                            <Text className="text-base font-semibold text-typography-900">
                                Back
                            </Text>
                        </TouchableOpacity>
                    ),
                    headerTitle: "",
                }}
            />
            <FlatList
                contentContainerClassName='gap-2 max-w-[960px] w-full mx-auto'
                data={items}
                renderItem={({item}) => (
                    <HStack className='bg-white p-3'>
                        <VStack space='sm'>
                            <Text bold>{item.product.name}</Text>
                            <Text>{item.product.price}</Text>
                        </VStack>
                        <Text className='ml-auto'>{item.quantity}</Text>
                    </HStack>
                )}
                ListFooterComponent={() => (
                    <Button onPress={onCheckout}>
                        <ButtonText>Checkout</ButtonText>
                    </Button>
                )}
            />
        </>
    )
}