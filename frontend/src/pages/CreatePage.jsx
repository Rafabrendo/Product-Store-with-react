import { useState } from "react";
import { Container, Heading, VStack, Box, useColorModeValue } from "@chakra-ui/react";
const CreatePage = () =>{
    const [newProduct, setNewProdutc] = useState({
        name: "",
        price: "",
        image: "",
    });

    return <Container maxW={"container.sm"}>
                <VStack
                    spacing={8}
                ></VStack>
                <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
                    Create New Product
                </Heading>
                <Box
                   w={"full"} bg={useColorModeValue("white", )}
                >

                </Box>
            </Container>
    
}

export default CreatePage