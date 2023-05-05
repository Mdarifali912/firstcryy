import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  // useBreakpointValue,
  useDisclosure,
  Image,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import { Input } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
// import { DesktopNav } from "@react-icons/all-files/fa/DesktopNav";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box width={"100%"} zIndex={"1"}>
      <Flex
        h={"50px"}
        bg={useColorModeValue("white", "blue.800")}
        color={useColorModeValue("blue.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Image
          href="/"
            mt={"10px"}
            cursor={"pointer"}
            h={"40px"}
            src="https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png"
          ></Image>

          <InputGroup w={"210px"} mt={"10px"} ml={"20px"}>
            <InputRightElement
              pointerEvents="none"
              children={<SearchIcon color="red.400" />}
            />
            <Input
              focusBorderColor="red.400"
              placeholder="Search for a Category and Brand"
            />
          </InputGroup>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Select border={"none"} w={"34%"}  placeholder="More">
            <option value="option1">Find Stores</option>
            <option value="option2">Find Preschool</option>
            <option value="option3">Open store</option>
            <option value="option3">Open a preschools</option>
          </Select>
          <Button 
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"grey"}
            bg={"white.300"}
            href={"/productpage"}
            _hover={{
              bg: "rgb(255,217,28)",
            }}
          >
            Product 
          </Button>
          <Button
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"grey"}
            bg={"white.300"}
            href={"/login"}
            _hover={{
              bg: "rgb(255,217,28)",
            }}
          >
            Log In
          </Button>

          <Button
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"grey"}
            bg={"white.300"}
            href={"/signup"}
            _hover={{
              bg: "rgb(255,217,28)",
            }}
          >
            Sign Up
          </Button>
          {/* <BsCartDash/> */}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack
      fontWeight={"bold"}
      gap={"0.2rem"}
      justifyContent={"center"}
      alignItems={"center"}
      direction={"row"}
      spacing={4}
    >
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                // textDecoration={"underline"}
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={400}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

//   interface  {
//     label: string;
//     subLabel?: string;
//     children?: Array<NavItem>;
//     href?: string;
//   }

const NAV_ITEMS = [
  {
    label: "Select location",

    href: "./delhi",
  },
  {
    label: "Store & Preschools",
    href: "./Store & Preschools",
  },
  {
    label: "Support",
    href: "./Support",
  },
  {
    label: "Track Order",
    href: "./Track Order",
  },
  {
    label: "firstcry parenting",
    href: "./firstcry parenting",
  },
  {
    label: "Offers",
    href: "./offers",
  },
  {
    label: "Shortlist",
    href: "./Shortlist",
  },
  // {
  //   label: 'Inspiration',
  //   children: [
  //     {
  //       label: 'Explore Design Work',
  //       subLabel: 'Trending Design to inspire you',
  //       href: '#',
  //     },
  //     {
  //       label: 'New & Noteworthy',
  //       subLabel: 'Up-and-coming Designers',
  //       href: '#',
  //     },
  //   ],
  // },
  // {
  //   label: 'Find Work',
  //   children: [
  //     {
  //       label: 'Job Board',
  //       subLabel: 'Find your dream design job',
  //       href: '#',
  //     },
  //     {
  //       label: 'Freelance Projects',
  //       subLabel: 'An exclusive list for contract work',
  //       href: '#',
  //     },
  //   ],
  // },
  // {
  //   label: 'Learn Design',
  //   href: '#',
  // },
  // {
  //   label: 'Hire Designers',
  //   href: '#',
  // },
];
