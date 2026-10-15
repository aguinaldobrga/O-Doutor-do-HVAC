import { type ReactNode } from "react";
import { QueryProvider } from "./QueryProvider";
import { RouterProvider } from "./RouterProvider";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <QueryProvider>
      <RouterProvider>
        {children}
      </RouterProvider>
    </QueryProvider>
  );
}