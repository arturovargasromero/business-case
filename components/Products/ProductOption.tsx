import { Box, Button } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { GridRowId } from "@mui/x-data-grid";

import { Dispatch, SetStateAction } from "react";

interface IProductOptionProps {
  folio: GridRowId;
  setDataRow: Dispatch<SetStateAction<string>>;
  setDialogData: Dispatch<SetStateAction<any>>;
  dialogData: {
    open: boolean;
    action: string;
    data: string;
  };
}

const ProductOption = (props: IProductOptionProps) => {
  return (
    <Box>
      <Button
        sx={{
          background: "#E49B59",
          color: "#FFFFFF",
          margin: "0 5px",
          ":hover": {
            background: "#E4B559",
          },
        }}
        onClick={() => {
          props.setDialogData({
            open: true,
            action: "visualizar",
            data: props.folio,
          });
        }}
      >
        <VisibilityIcon />
      </Button>
      <Button
        sx={{
          background: "#B71413",
          color: "#FFFFFF",
          margin: "0 5px",
          ":hover": {
            background: "#D11413",
          },
        }}
        onClick={() => {
          props.setDialogData({
            open: true,
            action: "eliminar",
            data: props.folio,
          });
        }}
      >
        <DeleteIcon />
      </Button>
    </Box>
  );
};

export default ProductOption;
