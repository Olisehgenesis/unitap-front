import Image from "next/image";
import { heroBrand } from "./types";
import { Box, chakra } from "@chakra-ui/react";

const valueHeaderConfig = {
  color: "#000",
  width: "full",
  fontFamily: "plusJakartaSans",
  fontWeight: "200",
  fontSize: { base: "24px", md: "20px", lg: "30px", xl: "40px" },
  lineHeight: { base: "30px", md: "35px", lg: "45.48px", xl: "50px" },
  "text-transform": "capitalize",
};

export const heroBrands: heroBrand[] = [
  {
    id: 0,
    name: "Code 3 Spaces",
    href: "https://t.me/olisehgenesis",
    src: "/img/logocode3spaces.png",
  },
  {
    id: 1,
    name: "TechCon Kampala",
    href: "#techcon",
    src: "/img/logotechcon.png",
  },
  {
    id: 2,
    name: "Arbitrum",
    href: "https://arbitrum.io/",
    src: "/home/brands/ARBITRUM.svg",
  },
  {
    id: 3,
    name: "Optimism ",
    href: "https://www.optimism.io/",
    src: "/home/brands/OPTIMISM.svg",
  },
  {
    id: 4,
    name: "Polygon",
    href: "https://polygon.technology/",
    src: "/home/brands/POLYGON.svg",
  },
  {
    id: 5,
    name: "Metis",
    href: "https://www.metis.io/",
    src: "/home/brands/METIS.svg",
  },
  { id: 6, name: "XDC", href: "https://xdc.org/", src: "/home/brands/XCD.svg" },
  {
    id: 7,
    name: "Celo",
    href: "https://celo.org/",
    src: "/home/brands/CELO.svg",
  },
  {
    id: 8,
    name: "Glo Dollar",
    href: "https://www.glodollar.org/",
    src: "/home/brands/GLO.svg",
  },
  {
    id: 9,
    name: "Gnosis",
    href: "https://www.gnosis.io/",
    src: "/home/brands/GNOSIS.svg",
  },
  {
    id: 10,
    name: "Linea",
    href: "https://linea.build/",
    src: "/home/brands/LINEA.svg",
  },
  {
    id: 11,
    name: "ENS",
    href: "https://ens.domains/",
    src: "/home/brands/ens.svg",
  },
  {
    id: 12,
    name: "Sonic",
    href: "https://blog.sonic.game/",
    src: "/home/brands/sonic.svg",
  },
  {
    id: 13,
    name: "Questbook",
    href: "https://www.questbook.xyz/",
    src: "/home/brands/questbook.svg",
  },
  {
    id: 14,
    name: "Giveth",
    href: "https://giveth.io/",
    src: "/home/brands/giveth.svg",
  },
  {
    id: 15,
    name: "Gitcoin",
    href: "https://www.gitcoin.co/",
    src: "/home/brands/gitcoin.svg",
  },
  {
    id: 16,
    name: "Octant",
    href: "https://octant.app/",
    src: "/home/brands/octant.svg",
  },
  {
    id: 17,
    name: "Pairwise",
    href: "https://x.com/pairwisevote",
    src: "/home/brands/pairwise.svg",
  },
  {
    id: 18,
    name: "BrightID",
    href: "https://www.brightid.org/",
    src: "/home/brands/bright id.svg",
  },
  {
    id: 19,
    name: "Thrive",
    href: "https://www.thriveprotocol.com/",
    src: "/home/brands/thrive.svg",
  },
];

export const values = [
  {
    id: 0,
    arrow: (
      <Box
        left={{ base: "", md: "-50px" }}
        position={{ base: "relative", md: "absolute" }}
        bottom={{ md: "-186px" }}
        boxSize={{ base: "87px", md: "186px" }}
      >
        <Image
          priority={false}
          fill
          src="/home/values/value-arrow-1.svg"
          alt="arrow"
        />
      </Box>
    ),
    title: (
      <chakra.span
        {...valueHeaderConfig}
        textAlign={{ base: "center", md: "initial" }}
        display="inline-block"
      >
        <chakra.span display={{ md: "block" }}>
          Build <chakra.span fontWeight="800">dApps</chakra.span> that
        </chakra.span>{" "}
        <chakra.span display={{ md: "block" }}>
          {" "}
          solve <chakra.span fontWeight="800">local challenges</chakra.span>{" "}
        </chakra.span>
        <chakra.span fontWeight="800">in East Africa</chakra.span>
      </chakra.span>
    ),
    description:
      "Code 3 Spaces incubates 10-15 startups per cohort building dApps in payments & financial inclusion, agriculture & supply chain, identity & civic tech, and business integration with Web3.",
    img: {
      src: {
        base: "/home/values/value-1-mini.png",
        md: "/home/values/value-1.png",
      },
      ratio: { base: 333 / 324, md: 653 / 619 },
      mx: "auto",
    },
  },
  {
    id: 1,
    reverse: true,
    title: (
      <chakra.span
        {...valueHeaderConfig}
        textAlign={{ base: "center", md: "initial" }}
        display="inline-block"
      >
        <chakra.span display="block">
          {" "}
          University <chakra.span fontWeight="800">Chapters</chakra.span>{" "}
        </chakra.span>

        <chakra.span>
          <chakra.span display="block" fontWeight="800">
            {" "}
            Across Uganda
          </chakra.span>{" "}
          and <chakra.span fontWeight="800">East Africa</chakra.span>
        </chakra.span>
      </chakra.span>
    ),
    description:
      "Active chapters at ISBAT University, Victoria University, Cavendish University, Kyambogo University. Coming soon: Makerere University, Mbarara University, KIU, and Nkumba University.",
    img: {
      src: {
        base: "/home/values/value-2-mini.png",
        md: "/home/values/value-2.png",
      },
      ratio: { base: 314 / 226, md: 628 / 400 },
    },
  },
  {
    arrow: (
      <Box
        position={{ base: "relative", md: "absolute" }}
        bottom={{ md: "-132px" }}
        left={{ md: "60px" }}
        right={{ base: "0px", md: "initial" }}
        mt="0px"
        width={{ md: "full" }}
        ml={{ base: "auto", md: "initial" }}
        mr={{ base: "calc(50% - 100px)", md: "initial" }}
        boxSize={{ base: "84px", md: "132px" }}
      >
        <Image fill src="/home/values/value-arrow-2.svg" alt="arrow" />
      </Box>
    ),
    id: 2,
    title: (
      <chakra.span
        {...valueHeaderConfig}
        textAlign={{ base: "center", md: "initial" }}
        display="inline-block"
      >
        <chakra.span display={{ base: "inline", md: "block" }}>
          <chakra.span fontWeight="800">Code Fridays</chakra.span> and{" "}
        </chakra.span>
        <chakra.span display={{ base: "inline", md: "block" }}>
          intensive <chakra.span fontWeight="800">coding sessions</chakra.span>
        </chakra.span>
        <chakra.span display={{ base: "inline", md: "block" }}>
          {" "}
          for hands-on learning{" "}
        </chakra.span>
      </chakra.span>
    ),
    description:
      "Regular Code Fridays where participants build projects from scratch, intensive coding sessions including overnight sessions for deep focus, and structured monthly events (2 per month: 1 online, 1 hybrid at university chapters).",
    img: {
      src: {
        base: "/home/values/value-3-mini.png",
        md: "/home/values/value-3.png",
      },
      mb: { base: "20px", md: "initial" },
      ratio: { base: 336 / 323, md: 672 / 618 },
    },
  },
  {
    id: 3,
    reverse: true,
    title: (
      <chakra.span
        {...valueHeaderConfig}
        textAlign={{ base: "center", md: "initial" }}
      >
        <chakra.span display="block">
          <chakra.span fontWeight="800">2025 Goals</chakra.span>
          {" - "}
          <chakra.span fontWeight="800">10+ projects</chakra.span> deployed
        </chakra.span>
        <chakra.span display="block">
          and <chakra.span fontWeight="800">100+ active</chakra.span> community
        </chakra.span>
        <chakra.span display="block">
          members across <chakra.span fontWeight="800">East Africa</chakra.span>
        </chakra.span>
      </chakra.span>
    ),
    description:
      "Targeting 10+ projects deployed, 20+ developers per university chapter, 30+ smart contracts deployed, 100+ active community members, and 40+ active developers onboarded by end of 2025.",
    img: {
      src: {
        base: "/home/values/value-4-mini.png",
        md: "/home/values/value-4.png",
      },
      ratio: { base: 339 / 259, md: 678 / 466 },
    },
  },
];

export const featuresData = [
  {
    id: 0,
    img: "/home/features/cross-chain.png",
    title: "Startup Incubation",
    description:
      "3-6 month cohort-based programs incubating 10-15 startups building dApps in payments, agriculture, identity, and business integration with Web3",
  },
  {
    id: 1,
    img: "/home/features/brain.png",
    title: "Code Fridays",
    description: "Regular events where participants build projects from scratch, fostering innovation and hands-on learning",
  },
  {
    id: 2,
    img: "/home/features/plug-play.png",
    title: "University Chapters",
    description:
      "Active chapters across Uganda universities with structured monthly events and hybrid learning opportunities",
  },
  {
    id: 3,
    img: "/home/features/decentralized.png",
    title: "Community Building",
    description:
      "Building East Africa's largest blockchain developer community with continuous education and mentorship programs",
  },
];
