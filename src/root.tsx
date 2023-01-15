// @refresh reload
import { createTheme, CssBaseline, ThemeProvider } from "@suid/material";
import { Suspense } from "solid-js";
import {
  useLocation,
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";

export default function Root() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <Html lang="en">
      <Head>
        <Title>ChatIS by IS2511</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <Body>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Suspense>
            <ErrorBoundary>
              <Routes>
                <FileRoutes />
              </Routes>
            </ErrorBoundary>
          </Suspense>
        </ThemeProvider>
        <Scripts />
      </Body>
    </Html>
  );
}
