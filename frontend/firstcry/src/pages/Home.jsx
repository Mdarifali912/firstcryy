import {
  Box,
  Button,
  Grid,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import CarouselCard from "../components/Carousel";
import { ArrowRightIcon } from "@chakra-ui/icons";
import Amazon from "./ProductPage";




const imagedata2 = [
  {
    id: "1",
    img:"https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_290423_14.jpg",
  },
  {
    img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_290423_15.jpg",

  },
  {
    img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_290423_16.jpg",
  },
]
const imagedata = [
  {
    id: "1",
    img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_19.jpg",
  },
  {
    img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_20.jpg",
  },
  {
    img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_21.jpg",
  },
  {
    img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_22.jpg",
  },
  {
    img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_23.jpg",
  },
  {
    img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_24.jpg",
  },
  {
    img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_25.jpg",
  },
  {
    img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_26.jpg",
  },
  {
    img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_27.jpg",
  },
  {
    img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_28.jpg",
  },
  {
    img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_29.jpg",
  },
  {
    img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_30.jpg",
  },
  {
    img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_31.jpg",
  },
  {
    img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_32.jpg",
  },
  {
    img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_33.jpg",
  },
  {
    img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_34.jpg",
  },
  {
    img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_35.jpg",
  },
  {
    img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_36.jpg",
  },
  {
    img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_37.jpg",
  },
  {
    img: "https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_38.jpg",
  },
];

const Home = () => {
  return (
    <>
      <div>
        <Box
          backgroundColor={"rgb(255,217,28)"}
          border={"1px solid white"}
          height={"50px"}
          width={"100%"}
        >
          <HStack
            gap={"10px"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            mb={"8px"}
            fontWeight={"semibold"}
          >
            <Text mt={"10px"} color={"rgb(87,87,87)"}>
              ALL CATEGORY
            </Text>
            <Text color={"rgb(87,87,87)"}>BOY FASHION</Text>
            <Text color={"rgb(87,87,87)"}>GIRL FASHION</Text>
            <Text color={"rgb(87,87,87)"}>FOOTWEAR</Text>
            <Text color={"rgb(87,87,87)"}>TOYS</Text>
            <Text color={"rgb(87,87,87)"}>DIAPERING</Text>
            <Text color={"rgb(87,87,87)"}>GEAR</Text>
            <Text color={"rgb(87,87,87)"}>FEEDING</Text>
            <Text color={"rgb(87,87,87)"}>BATH</Text>
            <Text color={"rgb(87,87,87)"}>NURSERY</Text>
            <Text color={"rgb(87,87,87)"}>MOMS</Text>
            <Text color={"rgb(87,87,87)"}>HEALTH</Text>
            <Button color={"rgb(87,87,87)"} bg={"white.300"}>
              CARTER'S
            </Button>
          </HStack>
        </Box>
      </div>

      <CarouselCard />

      <Box backgroundColor={"rgb(238,238,238)"} height={"450px"} width={"100%"}>
        <Text
          color={"rgb(54,54,54)"}
          fontSize={"20px"}
          fontWeight={"bold"}
          p={"30px"}
          m={"auto"}
        >
          PREMIUM BOUTIQUES
        </Text>
        <Box h={"400px"} w={"100%"}>
          <HStack m={"auto"}>
            <Box
              boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"}
              h={"370px"}
              width={"20%"}
            >
              <Image src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29757.webp"></Image>
              <Text fontWeight={"semibold"} color={"rgb(54,54,54)"}>
                Innumerable Fashion Choices | 2-8Y
              </Text>
              <Text color={"rgb(158,158,158)"}>Tops,Tees,Sets & More</Text>
              <Text
                display={"flex-end"}
                color={"rgb(252,59,59)"}
                cursor={"pointer"}
              >
                NEW TODAY
              </Text>
            </Box>
            <Box
              boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"}
              h={"370px"}
              width={"20%"}
            >
              <Image src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29758.webp"></Image>
              <Text fontWeight={"semibold"} color={"rgb(54,54,54)"}>
                Baby Babies | Up To 24M
              </Text>
              <Text color={"rgb(158,158,158)"}>
                Onesies,Rompers,Tops,Tees & More
              </Text>
              <Text
                display={"flex-end"}
                color={"rgb(252,59,59)"}
                cursor={"pointer"}
              >
                NEW TODAY
              </Text>
            </Box>
            <Box
              boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"}
              h={"370px"}
              width={"20%"}
            >
              <Image src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29760.webp"></Image>
              <Text fontWeight={"semibold"} color={"rgb(54,54,54)"}>
                Summer Wedding Collection
              </Text>
              <Text color={"rgb(158,158,158)"}>
                Styles For Sun-Soaked Festivals
              </Text>
              <Text
                display={"flex-end"}
                color={"rgb(252,59,59)"}
                cursor={"pointer"}
              >
                NEW TODAY
              </Text>
            </Box>
            <Box
              boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"}
              h={"370px"}
              width={"20%"}
            >
              <Image src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29763.webp"></Image>
              <Text fontWeight={"semibold"} color={"rgb(54,54,54)"}>
                Toys To Keep You Company
              </Text>
              <Text color={"rgb(158,158,158)"}>Toys</Text>
              <Text
                display={"flex-end"}
                color={"rgb(252,59,59)"}
                cursor={"pointer"}
              >
                NEW TODAY
              </Text>
            </Box>
            <Box
              boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"}
              h={"370px"}
              width={"20%"}
            >
              <Image src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29762.webp"></Image>
              <Text fontWeight={"semibold"} color={"rgb(54,54,54)"}>
                Premium & Latest Styles
              </Text>
              <Text color={"rgb(158,158,158)"}>
                Athleisure,Sportswear,Tops & More
              </Text>
              <Text
                display={"flex-end"}
                color={"rgb(252,59,59)"}
                cursor={"pointer"}
              >
                NEW TODAY
              </Text>
            </Box>
          </HStack>
        </Box>
      </Box>
      <Box backgroundColor={"rgb(238,238,238)"} height={"450px"} width={"100%"}>
        <Text
          color={"rgb(54,54,54)"}
          fontSize={"20px"}
          fontWeight={"bold"}
          p={"30px"}
          m={"auto"}
        >
          SPECIAL COLLECTION FOR BABY
        </Text>

        <Box h={"400px"} w={"100%"}>
          <HStack>
            <Box
              boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"}
              h={"370px"}
              width={"20%"}
            >
              <Image src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29750.webp"></Image>
              <Text fontWeight={"semibold"} color={"rgb(54,54,54)"}>
                The Magic of Ethnic Fashion | Up to 14Y
              </Text>
              <Text color={"rgb(158,158,158)"}>Tops,Tees,Sets & More</Text>
              <Text
                display={"flex-end"}
                color={"rgb(252,59,59)"}
                cursor={"pointer"}
              >
                NEW TODAY
              </Text>
            </Box>
            <Box
              boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"}
              h={"370px"}
              width={"20%"}
            >
              <Image src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29753.webp"></Image>
              <Text fontWeight={"semibold"} color={"rgb(54,54,54)"}>
                Ramp Up Your Wardrobe | 2-14Y
              </Text>
              <Text color={"rgb(158,158,158)"}>Tops,Tees,Sets & More</Text>
              <Text
                display={"flex-end"}
                color={"rgb(252,59,59)"}
                cursor={"pointer"}
              >
                NEW TODAY
              </Text>
            </Box>
            <Box
              boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"}
              h={"370px"}
              width={"20%"}
            >
              <Image src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29752.webp"></Image>
              <Text fontWeight={"semibold"} color={"rgb(54,54,54)"}>
                Bottoms Up | Up To 14Y
              </Text>
              <Text color={"rgb(158,158,158)"}>Tops,Tees,Sets & More</Text>
              <Text
                display={"flex-end"}
                color={"rgb(252,59,59)"}
                cursor={"pointer"}
              >
                NEW TODAY
              </Text>
            </Box>
            <Box
              boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"}
              h={"370px"}
              width={"20%"}
            >
              <Image src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29757.webp"></Image>
              <Text fontWeight={"semibold"} color={"rgb(54,54,54)"}>
                Ethnic & Fun At The Same Time | 2-14Y
              </Text>
              <Text color={"rgb(158,158,158)"}>Tops,Tees,Sets & More</Text>
              <Text
                display={"flex-end"}
                color={"rgb(252,59,59)"}
                cursor={"pointer"}
              >
                NEW TODAY
              </Text>
            </Box>
            <Box
              boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"}
              h={"370px"}
              width={"20%"}
            >
              <Image src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29756.webp"></Image>
              <Text fontWeight={"semibold"} color={"rgb(54,54,54)"}>
                Fun & Learn
              </Text>
              <Text color={"rgb(158,158,158)"}>Toys & Books</Text>
              <Text
                display={"flex-end"}
                color={"rgb(252,59,59)"}
                cursor={"pointer"}
              >
                NEW TODAY
              </Text>
            </Box>
          </HStack>
        </Box>
      </Box>
      <Box backgroundColor={"rgb(238,238,238)"} height={"450px"} width={"100%"}>
        <Text
          color={"rgb(54,54,54)"}
          fontSize={"20px"}
          fontWeight={"bold"}
          p={"23px"}
          m={"auto"}
        >
          {" "}
          WEDDING & SPECIAL OCCASION WEARS
        </Text>

        <Box h={"400px"} w={"100%"}>
          <HStack>
            <Box
              boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"}
              h={"370px"}
              width={"20%"}
            >
              <Image src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29754.webp"></Image>
              <Text fontWeight={"semibold"} color={"rgb(54,54,54)"}>
                Fashion Choices | 2-8Y
              </Text>
              <Text color={"rgb(158,158,158)"}>Tops,Tees & More</Text>
              <Text
                display={"flex-end"}
                color={"rgb(252,59,59)"}
                cursor={"pointer"}
              >
                NEW TODAY
              </Text>
            </Box>
            <Box
              boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"}
              h={"370px"}
              width={"20%"}
            >
              <Image src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29757.webp"></Image>
              <Text fontWeight={"semibold"} color={"rgb(54,54,54)"}>
                Innumerable Choices | 2-8Y
              </Text>
              <Text color={"rgb(158,158,158)"}>Tees,Sets & More</Text>
              <Text
                display={"flex-end"}
                color={"rgb(252,59,59)"}
                cursor={"pointer"}
              >
                NEW TODAY
              </Text>
            </Box>
            <Box
              boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"}
              h={"370px"}
              width={"20%"}
            >
              <Image src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29760.webp"></Image>
              <Text fontWeight={"semibold"} color={"rgb(54,54,54)"}>
                Fun Fashion Choices | 2-8Y
              </Text>
              <Text color={"rgb(158,158,158)"}>Sets & More</Text>
              <Text
                display={"flex-end"}
                color={"rgb(252,59,59)"}
                cursor={"pointer"}
              >
                NEW TODAY
              </Text>
            </Box>
            <Box
              boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"}
              h={"370px"}
              width={"20%"}
            >
              <Image src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29755.webp"></Image>
              <Text fontWeight={"semibold"} color={"rgb(54,54,54)"}>
                Fashion | 2-8Y
              </Text>
              <Text color={"rgb(158,158,158)"}>Tops,Tees,Sets & More</Text>
              <Text
                display={"flex-end"}
                color={"rgb(252,59,59)"}
                cursor={"pointer"}
              >
                NEW TODAY
              </Text>
            </Box>
            <Box
              boxShadow={"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"}
              h={"370px"}
              width={"20%"}
            >
              <Image src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29752.webp"></Image>
              <Text fontWeight={"semibold"} color={"rgb(54,54,54)"}>
                Innumerable Choices | 6-8Y
              </Text>
              <Text color={"rgb(158,158,158)"}>Tops,Tees,Sets & More</Text>
              <Text
                display={"flex-end"}
                color={"rgb(252,59,59)"}
                cursor={"pointer"}
              >
                NEW TODAY
              </Text>
            </Box>
          </HStack>
        </Box>
      </Box>
      <Button h={"50px"} width={"100%"}>
        View All Boutiques{" "}
        <span>
          <ArrowRightIcon ml={"8px"} bg={"rgb(238,238,238)"} />
        </span>
      </Button>

      <CarouselCard />
      <Box
        color={"rgb(246,246,246)"}
        p={"0px"}
        m={"auto"}
        h={"2800px"}
        w={"100%"}
        bg={"rgb(246,246,246)"}
      >
        <VStack>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_090423_01.jpg"></Image>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_090423_02.jpg"></Image>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_090423_03.jpg"></Image>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_090423_04.jpg"></Image>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_090423_05.jpg"></Image>
        </VStack>
        <HStack>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_090423_06.jpg"></Image>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_090423_07.jpg"></Image>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_090423_08.jpg"></Image>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_090423_09.jpg"></Image>
          <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_090423_10.jpg"></Image>
          {/* <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_090423_11.jpg"></Image> */}
        </HStack>

        <Image
          width={"100%"}
          src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_223_desktop_summer_080323_47.jpg"
        ></Image>

        <Grid templateColumns="repeat(4, 1fr)">
          {imagedata.map((data) => (
            <Image h={"170px"} width={"100%"} src={data.img} alt="" />
          ))}
        </Grid>
      </Box>
      <CarouselCard/>
      <Grid templateColumns="repeat(1, 1fr)">
          {imagedata2.map((data) => (
            <Image h={"170px"} width={"100%"} src={data.img} alt="" />
          ))}
        </Grid>
        <HStack m={"auto"}>
          <Image p={"30px"} h={"auto"} width={"45%"} src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_290423_18.jpg"></Image>
          <Image p={"30px"}  h={"auto"} width={"45%"} src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer2_290423_19.jpg"></Image>
        </HStack>

        <Box>
          <Text fontWeight={"semibold"} p={"10px"} fontSize={"22px"}>Bring The Spring</Text>
          <HStack>
            <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/615_384_spring22_her_160222_01.jpg"></Image>
            <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/615_384_spring22_him_160222_02.jpg"></Image>
          </HStack>
        </Box>
        <Box>
          <Text fontWeight={"semibold"} p={"10px"} fontSize={"22px"}>Occasion Store</Text>
          <HStack>
            <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/615_384_party_edit_160222_01.jpg"></Image>
            <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/615_384_traditional_saga_160222_02.jpg"></Image>
          </HStack>
        </Box>
        <Box>
          <Text fontWeight={"semibold"} p={"10px"} fontSize={"22px"}>Pick Your Styles</Text>
          <HStack>
            <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/405_538_shorts_and_skirts_160222_01.jpg"></Image>
            <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/405_538_onesies_160222_02.jpg"></Image>
            <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/405_538_pajamas_160222_03.jpg"></Image>
          </HStack>
        </Box>
        <Box>
          <Text fontWeight={"semibold"} p={"10px"} fontSize={"22px"}>The Brand Edit</Text>
          <HStack>
            <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/299_384_pinekids_160222_01.jpg"></Image>
            <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/299_384_carters_160222_02.jpg"></Image>
            <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/615_384_babyhug_160222_03.jpg"></Image>
          </HStack>
        </Box>
        <Box>
          <Text fontWeight={"semibold"} p={"10px"} fontSize={"22px"}>Trendy Add Ons</Text>
          <HStack>
            <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/405_538_casual_shoes_160222_01.jpg"></Image>
            <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/405_538_smart_watches_160222_02.jpg"></Image>
            <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/405_538_sunglasses_160522_03.jpg"></Image>
          </HStack>
        </Box>
        <CarouselCard/>
        <Amazon/>
    </>
  );
};

export default Home;
