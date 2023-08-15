import React from "react";
import { Box } from "@mui/material";
import TopBar from "./TopBar";

interface IContentProps {
  topbar: boolean;
  children?: any;
}

const Content = (props: IContentProps) => {
  return (
    <>
      <Box>
        {props?.topbar && <TopBar></TopBar>}
        {props.children}
      </Box>
    </>
  );
};

export default Content;
