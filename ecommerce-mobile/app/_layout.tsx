import {Link, Stack} from "expo-router";
import "@/global.css";
import {QueryClientProvider} from "@tanstack/react-query";
import {QueryClient} from "@tanstack/react-query";
import {GluestackUIProvider} from "@/components/ui/gluestack-ui-provider";
import {Icon} from "@/components/ui/icon"
import {ShoppingCartIcon} from "lucide-react-native";
import {Pressable} from "react-native";


const queryClient = new QueryClient();
export default function RootLayout() {
    return (
        <QueryClientProvider client={queryClient}>
            <GluestackUIProvider mode="light">
                <Stack screenOptions={{
                    headerRight: () => (
                        <Link href={'/cart'} asChild>
                            <Pressable>
                                <Icon as={ShoppingCartIcon}/>
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