import {Card} from "@/components/ui/card";
import {Image} from "@/components/ui/image";
import {Button} from "@/components/ui/button";
import {Text} from "@/components/ui/text";
import {Box} from "@/components/ui/box";
import {ButtonText} from "@/components/ui/button";
import {VStack} from "@/components/ui/vstack";
import {Heading} from "@/components/ui/heading";
import {Link} from "expo-router";
import {Pressable} from "react-native";

// @ts-ignore
export default function ProductListItem({product}) {
    return (
        <Link href={`/products/${product.id}`} asChild className="flex">
            <Pressable className='flex-1'>
                <Card className="p-5 rounded-lg max-w-[360px] flex space-between">
                    <Image
                        source={{
                            uri: product.image,
                        }}
                        className="h-[280px] rounded-md w-full"
                        alt={`${product.name} image`}
                        resizeMode="contain"
                    />
                    <Text
                        className="text-sm font-normal text-typography-700 h-[60px]"
                    >
                       product.name

                    </Text>
                        <Heading size="md" className="pt-4">
                            ${product.price}
                        </Heading>
                </Card>
            </Pressable>
        </Link>
    )
}