import {Text} from '@/components/ui/text'
import {useLocalSearchParams} from "expo-router";
import {useEffect} from "react";

export default function ProductDetails() {
    const params = useLocalSearchParams();
    const { id } = params;
    useEffect(() => {
        console.log("Params:", params);
        console.log("ID:", id);
    }, [params, id]);


    return <Text>Product details: {id}</Text>

}