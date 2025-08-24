import {FlatList} from "react-native";
import products from '../assets/products.json'
import ProductListItem from '../components/ProductListItem';
import {useBreakpointValue} from "@/components/ui/utils/use-break-point-value";

export default function HomeScreen() {
    //
    // const {width} = useWindowDimensions();
    // const numberOfColumns = width > 700 ? 3 : 2
    // console.log("re-render");

    const numberOfColumns = useBreakpointValue({
        default: 2,
        sm: 3,
        xl: 4
    }) as number;

    return (
        <FlatList
            key={numberOfColumns}
            data={products}
            numColumns={numberOfColumns}
            contentContainerClassName='gap-2 p-2 mx-auto w-full max-w-[960px]'
            columnWrapperClassName='gap-2'
            renderItem={({item}) => <ProductListItem product={item}/>}
        />
    )
}
