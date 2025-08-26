import {ActivityIndicator, FlatList, View} from "react-native";
import ProductListItem from '../components/ProductListItem';
import {useBreakpointValue} from "@/components/ui/utils/use-break-point-value";
import {listProducts} from "@/api/product";
import {useQuery} from "@tanstack/react-query";
import {Text} from "@/components/ui/text";

export default function HomeScreen() {
    const {data, isLoading, error} = useQuery({
        queryKey: ['products'],
        queryFn: () => listProducts()
    });

    const numberOfColumns = useBreakpointValue({
        default: 2,
        sm: 3,
        xl: 4
    }) as number;

    if(isLoading) {
        return (
            <View className="flex-1 justify-center items-center">
                <ActivityIndicator size="large" />
            </View>
        );
    }

    if(error) {
        return <Text>Error fetching products</Text>;
    }

    return (
        <FlatList
            key={numberOfColumns}
            data={data}
            numColumns={numberOfColumns}
            contentContainerClassName='gap-2 p-2 mx-auto w-full max-w-[960px]'
            columnWrapperClassName='gap-2'
            renderItem={({item}) => <ProductListItem product={item}/>}
        />
    )
}
