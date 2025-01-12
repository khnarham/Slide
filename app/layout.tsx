import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Metadata } from "next";
import ReactQueryProvider from "@/providers/react-guery-provider";
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap" });
import { Toaster } from 'sonner'
import { ReactReduxContext } from "react-redux";
import ReduxProvider from "@/providers/redux-provider";

export const metadata: Metadata = {
  title: 'Slide',
  description: 'Automate DMs and comments on instagram',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body  className={jakarta.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
              <ReduxProvider>
            <ReactQueryProvider>
            {children}   
            </ReactQueryProvider>
              </ReduxProvider>
            <Toaster />

          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
