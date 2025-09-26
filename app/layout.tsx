import type { Metadata } from "next";
import { config } from "@/utils/wallet/wagmi";
import { Noto_Sans } from "next/font/google";
import UnitapProvider from "@/context";
import Progressbar from "@/components/progress";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StyledJsxRegistry from "@/components/styled-components";
import GoogleAnalytics from "@/components/google-analytics";

import "./globals.scss";

import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
import { Providers } from "./providers";
import { ChakraUIProviders } from "@/components/ChakraProvider";
import { HeaderSelection } from "@/components/HeaderSelection";
import { ProviderSelection } from "@/components/ProviderSelection";

const notoSansFont = Noto_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  adjustFontFallback: false,
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unitap",
  description: "Bright ID faucet",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialState = cookieToInitialState(
    config,
    (await headers()).get("cookie"),
  );

  return (
    <html lang="en" dir="ltr" className="">
      <body
        className={`bg-white dark:bg-gray10 dark:text-white ${notoSansFont}`}
      >
        <div className="bg-holder"></div>
        <Providers initialState={initialState}>
          <UnitapProvider>
            <StyledJsxRegistry>
              <ProviderSelection>{children}</ProviderSelection>
            </StyledJsxRegistry>
          </UnitapProvider>
        </Providers>

        <Progressbar />

        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}

        <SpeedInsights />
      </body>
    </html>
  );
}
