import React from "react";
// Import the providers to be collected in one file
import { ThemeProvider } from "./components/theme-provider";

export default function Providers({ children }: Providerprops) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}
