import {FlatList} from "react-native";
import ProductListItem from '../components/ProductListItem';
import {useBreakpointValue} from "@/components/ui/utils/use-break-point-value";
import {listProducts} from "@/api/product";
import {useQuery} from "@tanstack/react-query";

export default function HomeScreen() {
    const {data, isLoading, error} = useQuery({
        queryKey: ['products'],
        queryFn: listProducts
    });


    // const [products, setProducts] = useState([]);
    //
    // useEffect(() => {
    //     listProducts().then(setProducts);
    // }, []);

    const numberOfColumns = useBreakpointValue({
        default: 2,
        sm: 3,
        xl: 4
    }) as number;

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
