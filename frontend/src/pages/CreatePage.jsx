import { useState } from "react";
import { Container, Heading, VStack, Box, useColorModeValue, Input, Button, useToast } from "@chakra-ui/react";
import { useProductStore } from "../store/product";



const CreatePage = () =>{
    const [newProduct, setNewProdutc] = useState({
        name: "",
        price: "",
        image: "",
    });

    const {createProduct} = useProductStore()
    const toast = useToast()

    const handleAddProduct = async () => {
		const { success, message } = await createProduct(newProduct);
        console.log("Success:", success);
        console.log("Message:",message);
        if(!success){
            toast({
                title:"Error",
                description:message,
                status:"error",
                // duration: 5000
                isClosable: true
            })
        }else{
            toast({
                title:"Success",
                description: message,
                status: "success",
                isClosable: true
            })
        }
        
        setNewProdutc({name: "", price:"", image: ""})



    }

    return <Container maxW={"container.sm"}>
                
                <VStack
                    spacing={17}
                >
                <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={12}>
                    Create New Product
                </Heading>
                
                <Box
                   w={"full"} bg={useColorModeValue("white", "#21277beb" )}
                   p={6} rounded={"lg"} shadow={"md"}
                    
                >
                    <VStack spacing={4}>
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
                </VStack>
            </Container>
    
}

export default CreatePage