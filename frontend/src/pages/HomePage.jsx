import { Container, VStack, Text, Box} from "@chakra-ui/react";
import { RiSpaceShipLine } from "react-icons/ri";

const HomePage = () => {
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
                </Text><RiSpaceShipLine size={40} />
            </Box>

            </VStack>
        </Container>
        )
};
export default HomePage;