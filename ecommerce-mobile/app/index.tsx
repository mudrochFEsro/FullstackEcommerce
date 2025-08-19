import {FlatList} from "react-native";
import products from '../assets/products.json'
import ProductListItem from '../components/ProductListItem';

export default function HomeScreen() {
    return (
        <FlatList
            data={products}
            numColumns={2}
            contentContainerClassName='gap-4 pl-4 pr-4 pt-4 pb-2'
            columnWrapperClassName='gap-4'
            renderItem={({item}) => <ProductListItem product={item}/>}
        />
    )
}
