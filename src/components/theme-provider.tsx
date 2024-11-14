"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [mounted, setMounted] = React.useState(false);

  // Only render the theme provider on the client side
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Avoid rendering the theme provider during SSR
  }
  return (
    <React.StrictMode>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </React.StrictMode>
  );
}
