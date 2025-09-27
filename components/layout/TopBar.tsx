"use client";
import {
  Box,
  Button,
  Center,
  HStack,
  Img,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../../app/new-landing/components/Container";

const ContactUsButton = () => {
  return (
    <Button
      width={{ base: "120px", md: "150px" }}
      height={{ base: "40px", md: "50px" }}
      textTransform="uppercase"
      bg="transparent"
      color="#000"
      border="2px solid #000"
      borderRadius="12px"
      fontSize={{ base: "12px", md: "14px" }}
      fontWeight="600"
      fontFamily="nunito"
      _hover={{ bg: "#000", color: "#fff" }}
      onClick={() => window.open("mailto:code3spaces@gmail.com", "_blank")}
    >
      Contact Us
    </Button>
  );
};

const TelegramButton = () => {
  return (
    <Button
      width={{ base: "120px", md: "150px" }}
      height={{ base: "40px", md: "50px" }}
      textTransform="uppercase"
      bg="#000"
      color="#fff"
      borderRadius="12px"
      fontSize={{ base: "12px", md: "14px" }}
      fontWeight="600"
      fontFamily="nunito"
      _hover={{ bg: "#333" }}
      onClick={() => window.open("https://t.me/onchainug", "_blank")}
    >
      Telegram
    </Button>
  );
};

const TwitterButton = () => {
  return (
    <Button
      width={{ base: "120px", md: "150px" }}
      height={{ base: "40px", md: "50px" }}
      textTransform="uppercase"
      bg="#1DA1F2"
      color="#fff"
      borderRadius="12px"
      fontSize={{ base: "12px", md: "14px" }}
      fontWeight="600"
      fontFamily="nunito"
      _hover={{ bg: "#0d8bd9" }}
      onClick={() => window.open("https://twitter.com/code3spaces", "_blank")}
    >
      Twitter
    </Button>
  );
};

export const TopBar = () => {
  return (
    <Box
      width="full"
      backgroundRepeat="repeat"
      backgroundImage="url(/home/desktop-pattern.png)"
      pb={{ base: "72px", md: "30px" }}
      pt={{ base: "32px", md: "20px" }}
    >
      <Container width="full">
        <HStack px="29px" width="full" justifyContent="space-between">
          <Link href="/">
            <HStack columnGap="7px">
              <Image
                width={25}
                height={25}
                src="/img/logocode3spaces.png"
                alt="Code 3 Spaces"
                style={{ objectFit: "contain" }}
              />
              <Text
                position="relative"
                fontFamily="Kodchasan"
                fontWeight="600"
                fontSize={{ base: "19px", md: "27px" }}
              >
                CODE 3 SPACES
              </Text>
            </HStack>
          </Link>
          <HStack spacing="12px">
            <ContactUsButton />
            <TelegramButton />
            <TwitterButton />
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};
