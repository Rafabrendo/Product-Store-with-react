import { Container, VStack, Text, Box, SimpleGrid, useColorModeValue} from "@chakra-ui/react";
import { RiSpaceShipLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
    const {fetchProducts, products} = useProductStore();
    // const textColor = useColorModeValue("gray.600", "gray.200");

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);
    console.log("Products", products)
    return (
        <Container maxW={"container.x1"} py={12}>
            <VStack spacing={8}>
            <Box display={"flex"} gap={1}>
                <Text
                    fontSize={"30px"}
                    fontWeight={"bold"}
                    bgGradient={"linear(to-r, cyan.400, blue.500)"}
                    bgClip={"text"}
                    textAlign={"center"}
                
                >
                    Current Products
                </Text><RiSpaceShipLine size={40} color={"#B1BCD2"}/>
            </Box>
            <SimpleGrid
                columns={{
                    base: 1,
                    md: 2,
                    lg: 3
                }}
                spacing={10}
                w={"full"}    
            >
                {products.map((product) =>(
                    <ProductCard key={product._id} product={product} />
                ))}

            </SimpleGrid>
            {products.length === 0 && (
                <Text fontSize={'x1'} textAlign={'center'} fontWeight={'bold'} color={'gray.500'}>
                No products found 😢 {" "}
                <Link to={'/create'}>
                    <Text as={'span'} color={'blue.500'} _hover={{textDecoration: "underline"}}>
                        Create a product
                    </Text>
                </Link>

            </Text>
            )}

            </VStack>
        </Container>
        )
};
export default HomePage;