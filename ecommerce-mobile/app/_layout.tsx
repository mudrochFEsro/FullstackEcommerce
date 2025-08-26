import {Stack} from "expo-router";
import "@/global.css";
import {QueryClientProvider} from "@tanstack/react-query";
import {QueryClient} from "@tanstack/react-query";

import {GluestackUIProvider} from "@/components/ui/gluestack-ui-provider";


const queryClient = new QueryClient();
export default function RootLayout() {
    return (
        <QueryClientProvider client={queryClient}>
            <GluestackUIProvider mode="light">
                <Stack>
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