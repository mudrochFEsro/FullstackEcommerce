import {Card} from "@/components/ui/card";
import {Image} from "@/components/ui/image";
import {Text} from "@/components/ui/text";
import {Heading} from "@/components/ui/heading";
import {Link} from "expo-router";
import {Pressable} from "react-native";

// @ts-ignore
export default function ProductListItem({product}) {
    return (
        <Link href={`/products/${product.id}`} asChild>
            <Pressable className='flex-1'>
                <Card className="p-5 rounded-lg max-w-[360px] h-[390px] justify-end">
                    <Image
                        source={{
                            uri: product.image,
                        }}
                        className="h-[260px] rounded-md w-full"
                        alt={`${product.name} image`}
                        resizeMode="contain"
                    />
                    <Text
                        className="text-sm font-normal text-typography-700 mt-4"
                    >
                        {product.name}

                    </Text>
                        <Heading size="md" className="mt-2">
                            ${product.price}
                        </Heading>
                </Card>
            </Pressable>
        </Link>
    )
}