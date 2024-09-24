import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Router from "@src/Router";
import { theme } from "@src/themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </MantineProvider>
  );
}
