import {Link, Stack} from "expo-router";
import "@/global.css";
import {QueryClientProvider} from "@tanstack/react-query";
import {QueryClient} from "@tanstack/react-query";
import {GluestackUIProvider} from "@/components/ui/gluestack-ui-provider";
import {Icon} from "@/components/ui/icon"
import {ShoppingCartIcon} from "lucide-react-native";
import {Pressable} from "react-native";
import {useCart} from "@/store/cartStore";
import {Text} from "@/components/ui/text";


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
                            <Pressable className='flex-row gap-2 items-center lg:pr-4r'>
                                <Icon as={ShoppingCartIcon}/>
                                <Text>{cartItemsNum}</Text>
                            </Pressable>
                        </Link>
                    )
                }}>
                    <Stack.Screen name="index" options={{
                        title: "Shop",
                    }}/>
                    <Stack.Screen name="products/[id]" options={{
                        title: "Product",
                    }}/>
                </Stack>
            </GluestackUIProvider>
        </QueryClientProvider>
    )
}