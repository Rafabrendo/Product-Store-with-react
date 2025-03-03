import {Box, Image, Heading, Text, HStack, IconButton, useColorModeValue} from '@chakra-ui/react'
import {DeleteIcon ,EditIcon} from '@chakra-ui/icons'
import { useProductStore } from '../store/product';

const ProductCard = ({product}) => {

    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "gray.800")
    
    const {deleteProduct} = useProductStore()
    const toast = useToast()
    const handleDeleteProduct = async (pid) => {
        const {success, message} = await deleteProduct(pid)
        if(!success){
            toast({
                title: 'Error',
                description: message
            })
        }
    }

    return (
        <Box
            shadow='lg'
            rounded='lg'
            overflow='hidden'
            transition='all 0.3s'
            _hover={{transform: "translateY(-5px)", shadow:"x1"}}
            bg={bg}
           

        >
            <Image src={product.image} alt={product.name} h={48} w='full' objectFit={'cover'}/>
            <Box p={3}>
                <Heading as={'h3'} size={'md'} mb={1}>
                    {product.name}
                </Heading>
                <Text fontWeight={'bold'} fontSize={'x1'} color={textColor} mb={4}>
                    ${product.price}
                </Text>
                <HStack spacing={2}> 
                    <IconButton icon={<EditIcon />} colorScheme='blue'/>
                    <IconButton icon={<DeleteIcon />} onClick={() => handleDeleteProduct(product._id)} colorScheme='red'/>
                    
                </HStack>

            </Box>

        </Box>
    )
}
export default ProductCard;