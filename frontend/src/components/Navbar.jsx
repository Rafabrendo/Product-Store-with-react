import { Container, Flex, Text, HStack, Button, useColorMode} from "@chakra-ui/react";
import { LuCircleFadingPlus } from "react-icons/lu";
import { Link } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import {IoMoon} from "react-icons/io5";
import {LuSun} from "react-icons/lu"
import { useProductStore } from "../store/product";

const Navbar = () =>{
    const {colorMode, toggleColorMode } = useColorMode();
    const { product }  = useProductStore();

    return <Container maxW={"1140px"} px={4} 
    // bg={useColorModeValue("gray.100", "green.100")}
    >
        <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{
                base:"column",
                sm:"row",
            }}
        >
            <Text
                fontSize={{base:"22", sm:"28"}}
                fontWeight={"bold"}
                textTransform={"uppercase"}
                textAlign={"center"}
                bgGradient={"linear(to-r, cyan.400, blue.500)"}
                bgClip={"text"}
                >
                    <Link to={"/"}>Product Store  
                        <Button background={"transparent"}>
                            <BsCartPlus  size={40}/>
                        </Button> 
                    </Link>
            </Text>
            <HStack spacing={2} alignItems={"center"}>
                <Link to={"/create"}>
                    <Button>
                        <LuCircleFadingPlus fontSize={20}/>
                    
                    </Button>
                </Link>
                <Button onClick={toggleColorMode}>
                    {colorMode === "light" ? <IoMoon size='20'/> : <LuSun  size='20'/>}

                </Button>
            </HStack>
        </Flex>
    </Container>;
};
export default Navbar;