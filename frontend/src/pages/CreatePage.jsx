import { useState } from "react";
import { Container, Heading, VStack, Box, useColorModeValue, Input, Button } from "@chakra-ui/react";



const CreatePage = () =>{
    const [newProduct, setNewProdutc] = useState({
        name: "",
        price: "",
        image: "",
    });

    const handleAddProduct = () =>{
        console.log(newProduct);
    }

    return <Container maxW={"container.sm"}>
                <VStack
                    spacing={8}
                ></VStack>
                <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={12}>
                    Create New Product
                </Heading>
                <Box
                   w={"full"} bg={useColorModeValue("white", "#21277beb" )}
                   p={6} rounded={"lg"} shadow={"md"}
                >
                    <VStack spacing={5}>
                    <Input 
                        placeholder='Product Name'
                        name="name"
                        value={newProduct.name}
                        onChange={(e) => setNewProdutc({...newProduct, name: e.target.value})}
                    />
                    <Input 
                        placeholder='Price'
                        name="name"
                        type="number"
                        value={newProduct.price}
                        onChange={(e) => setNewProdutc({...newProduct, price: e.target.value})}
                    />
                    <Input 
                        placeholder='Image URL'
                        name="image"
                        value={newProduct.image}
                        onChange={(e) => setNewProdutc({...newProduct, image: e.target.value})}
                    />
                     {/* Posso usar o colorScheme que ja vem com alguns Schemas ou usar o ColorModeValue */}
                    <Button colorScheme={'blue'}
                        /*bg={useColorModeValue("white", "red" )}*/
                        onClick={handleAddProduct} w='full'
                        /*_hover={{ bg: 'green' }}*/
                        >
                        Add Product
                    </Button>

                    </VStack>
                </Box>
            </Container>
    
}

export default CreatePage