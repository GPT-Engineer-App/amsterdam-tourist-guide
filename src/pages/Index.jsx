import { Box, Flex, Heading, Text, Image, SimpleGrid, Icon, Button } from "@chakra-ui/react";
import { FaCoffee, FaUtensils, FaLandmark, FaInfoCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Heading mb={4} textAlign="center">
        Discover Amsterdam
      </Heading>
      <Text fontSize="lg" mb={6} textAlign="center">
        Your guide to the best cafes, restaurants, attractions, and historical places in Amsterdam.
      </Text>
      <Image src="https://images.unsplash.com/photo-1451846704872-4c2a8e1468fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBbXN0ZXJkYW0lMjBjYW5hbCUyMHZpZXd8ZW58MHx8fHwxNzEzNzYzMzgyfDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" mb={6} />

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
        <InfoCard icon={FaCoffee} title="Cafes" description="Explore the cozy and vibrant cafes scattered around Amsterdam." />
        <InfoCard icon={FaUtensils} title="Restaurants" description="Dine at the finest restaurants offering a mix of international and local cuisines." />
        <InfoCard icon={FaLandmark} title="Attractions" description="Visit must-see attractions including museums, parks, and bustling markets." />
        <InfoCard icon={FaInfoCircle} title="Historical Places" description="Discover the rich history of Amsterdam through its well-preserved historical sites." />
      </SimpleGrid>
    </Box>
  );
};

const InfoCard = ({ icon, title, description }) => {
  return (
    <Flex direction="column" align="center" p={5} boxShadow="md" borderRadius="md">
      <Icon as={icon} w={10} h={10} mb={3} />
      <Heading size="md" mb={2}>
        {title}
      </Heading>
      <Text textAlign="center">{description}</Text>
      <Button mt={4} colorScheme="blue">
        Learn More
      </Button>
    </Flex>
  );
};

export default Index;
