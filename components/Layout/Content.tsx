import React from "react";
import { Box } from "@mui/material";
import TopBar from "./TopBar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

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
