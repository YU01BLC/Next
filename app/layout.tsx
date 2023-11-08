import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { theme } from "./common/theme";
import { ThemeProvider } from "@mui/material/styles";
import Error from "./error";
import { ErrorBoundary } from "react-error-boundary";
// metaデータ定義
export const metadata = {
  title: "next study",
  description: "test",
};

export default function RootLayout(props: {
  children: React.ReactNode;
  reactHookForm: React.ReactNode;
  zod: React.ReactNode;
  ErrorBoundary: React.ReactNode;
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="ja">
      <body>
        <ErrorBoundary
          fallback={<Error error={props.error} reset={props.reset} />}
        >
          <Container>
            <ThemeProvider theme={theme}>
              {props.children}
              <Grid container spacing={4}>
                <Grid item xs>
                  {props.reactHookForm}
                </Grid>
                <Grid item xs>
                  {props.zod}
                </Grid>
              </Grid>
            </ThemeProvider>
          </Container>
        </ErrorBoundary>
      </body>
    </html>
  );
}
