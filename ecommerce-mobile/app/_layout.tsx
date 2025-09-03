import {Link, router, Stack} from "expo-router";
import "@/global.css";
import {QueryClientProvider} from "@tanstack/react-query";
import {QueryClient} from "@tanstack/react-query";
import {GluestackUIProvider} from "@/components/ui/gluestack-ui-provider";
import {Icon} from "@/components/ui/icon"
import {ArrowLeftIcon, ShoppingCartIcon} from "lucide-react-native";
import {Pressable, TouchableOpacity} from "react-native";
import {useCart} from "@/store/cartStore";
import {Text} from "@/components/ui/text";
import {Box} from "@/components/ui/box";


const queryClient = new QueryClient();
export default function RootLayout() {

    // @ts-ignore
    const cartItemsNum = useCart(state => state.items.length);

    return (
        <QueryClientProvider client={queryClient}>
            <GluestackUIProvider mode="light">
                <Stack screenOptions={{
                    headerRight: () => (
                        <Link href={'/cart'} asChild>
                            <TouchableOpacity className='flex-row gap-2 items-center web:pr-4'>
                                <Icon as={ShoppingCartIcon}/>
                                <Text>{cartItemsNum}</Text>
                            </TouchableOpacity>
                        </Link>

                    )
                }}>

                    <Stack.Screen
                        name="index"
                        options={{
                            headerLeft: () => (
                                <Box
                                    className="flex-row items-center web:pl-4"
                                >
                                    <Text className="text-base font-semibold text-typography-900">
                                        Shop
                                    </Text>
                                </Box>
                            ),
                            headerTitle: "",
                        }}
                    />
                    <Stack.Screen
                        name="products/[id]"
                        options={{
                            headerLeft: () => (
                                <></>
                            ),
                            headerTitle: "",
                        }}
                    />

                </Stack>
            </GluestackUIProvider>
        </QueryClientProvider>
    )
}