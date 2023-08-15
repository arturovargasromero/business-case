import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Dispatch, SetStateAction } from "react";

interface ISearchInputProps {
  setSearchFolio: Dispatch<SetStateAction<string>>;
}

const SearchInput = (props: ISearchInputProps) => {
  const searchEvent = (e: any) => {
    props.setSearchFolio(e);
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #A6A6A6",
        borderRadius: "10px",
        padding: "5px",
        marginRight: "10px",
        background: "#FFFFFF",
      }}
    >
      <SearchIcon sx={{ color: "#858585" }} />
      <input
        id="inputSearch"
        type="text"
        style={{
          border: "none",
          background: "transparent",
          outline: "none",
        }}
        onChange={(e) => {
          searchEvent(e.target.value);
        }}
      />
    </Box>
  );
};

export default SearchInput;
