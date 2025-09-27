"use client";
import { Box, VStack } from "@chakra-ui/react";
import { Values } from "./Values";
import { Features } from "./Features";
import { Web3 } from "./Web3";
import { Countdown } from "./Countdown";
import { TechConCard } from "./TechConCard";
import { TeamSection } from "./TeamSection";
import { ContactSection } from "./ContactSection";
import { RefObject } from "react";
import { Container } from "./Container";

interface ContentProps {
  valuesRef: RefObject<HTMLDivElement | null>;
}
export const Content = ({ valuesRef }: ContentProps) => {
  return (
    <>
      <Box
        backgroundRepeat="repeat-x"
        backgroundImage="url(/home/desktop-pattern.png)"
        width="full"
      >
        <Container>
          <Box ref={valuesRef} />
          <Values />
        </Container>
      </Box>
      <Box
        width="full"
        backgroundRepeat="repeat"
        backgroundImage="url(/home/desktop-pattern.png)"
      >
        <Container>
          <Features />
        </Container>
      </Box>
      <Box
        backgroundRepeat="repeat"
        backgroundImage="url(/home/desktop-pattern.png)"
        width="full"
        py="60px"
      >
        <Container>
          <VStack spacing="60px">
            <Countdown />
            <TechConCard />
          </VStack>
        </Container>
      </Box>
      <Box
        backgroundRepeat="repeat"
        backgroundImage="url(/home/desktop-pattern.png)"
        width="full"
        py="60px"
      >
        <Container>
          <TeamSection />
        </Container>
      </Box>
      <Box
        backgroundRepeat="repeat"
        backgroundImage="url(/home/desktop-pattern.png)"
        width="full"
      >
        <Web3 />
      </Box>
      <Box
        backgroundRepeat="repeat"
        backgroundImage="url(/home/desktop-pattern.png)"
        width="full"
        py="60px"
      >
        <Container>
          <ContactSection />
        </Container>
      </Box>
    </>
  );
};
