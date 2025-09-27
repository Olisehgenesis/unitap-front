import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import Progressbar from "@/components/progress";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StyledJsxRegistry from "@/components/styled-components";
import GoogleAnalytics from "@/components/google-analytics";

import "./globals.scss";

import { Providers } from "./providers";
import { ProviderSelection } from "@/components/ProviderSelection";
import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";

const notoSansFont = Noto_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  adjustFontFallback: false,
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Code 3 Spaces - Blockchain Startup Incubator | TechCon Kampala 2025",
  description: "Uganda's premier blockchain startup incubator and developer empowerment initiative. Join TechCon Kampala 2025 - The Future Gets Built Here. Building dApps that solve local challenges through continuous education and hands-on development.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className="">
      <body
        className={`bg-white dark:bg-gray10 dark:text-white ${notoSansFont}`}
      >
        <div className="bg-holder"></div>
       
            <StyledJsxRegistry>
              <ProviderSelection>{children}</ProviderSelection>
            </StyledJsxRegistry>
         
       

        <Progressbar />

        <FloatingWhatsAppButton />
        <SpeedInsights />
      </body>
    </html>
  );
}
