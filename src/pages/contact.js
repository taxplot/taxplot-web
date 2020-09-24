import React from "react";
import Layout from "../components/Layout";
import { Box, Typography } from "@material-ui/core";
import theme from "../style/theme";

export default function ContactMe() {
  return (
    <Layout>
      <Box display="flex" flexDirection="column" flexGrow={1}>
        <Box
          flexGrow={1}
          textAlign="center"
          paddingTop={4}
          paddingBottom={12}
          paddingX={8}
          style={{
            color: theme.palette.common.gray
          }}
        >
          <Box marginBottom={4}>
            <Typography
              color="inherit"
              variant="h2"
              style={{
                fontWeight: "bold",
                fontFamily:
                  "monospace",
                marginBottom: 4
              }}
            >
              chris@taxplot.com
            </Typography>
            
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
