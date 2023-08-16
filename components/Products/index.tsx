import { Box, Typography, Button } from "@mui/material";
import SearchInput from "./SearchInput";
import { useEffect, useState } from "react";
import ProductTable from "./ProductTable";
import ProductDialog from "./ProductDialog";
import { listProductsQuery } from "@/callFunction/ListProducsQuery";

const index = () => {
  const [dataRow, setDataRow] = useState<any>([]);
  const [searchFolio, setSearchFolio] = useState<string>("");
  const [dialogData, setDialogData] = useState<any>([
    { open: false, action: "agregar", data: [] },
  ]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const dataLocal = localStorage.getItem("dataRow");
    if (dataLocal === null) {
      localStorage.setItem("dataRow", "[]");
    }
    setTimeout(() => {
      setDataRow(JSON.parse(dataLocal || ""));
      setLoading(false);
    }, 2000);
  }, []);

  let searchedFolio = dataRow;

  if (searchFolio.length >= 1) {
    searchedFolio = dataRow.filter((dato: any) => {
      return dato.id.includes(searchFolio);
    });
  }
  return (
    <Box sx={{ padding: "40px 30px" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            maxWidth: "900px",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontWeight: "900",
              fontSize: "22px",
            }}
          >
            Alta de Productos
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <SearchInput setSearchFolio={setSearchFolio} />
            <Button
              sx={{
                maxWidth: "300px",
              }}
              variant="contained"
              onClick={() => {
                setDialogData({ open: true, action: "agregar" });
                // setOpenCreateProduct(true);
              }}
            >
              <Typography sx={{ fontSize: "14px" }}>Agregar</Typography>
            </Button>
            <ProductDialog
              dialogData={dialogData}
              setDialogData={setDialogData}
              setDataRow={setDataRow}
            />
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            height: 400,
            width: "100%",
            background: "#FFFFFF",
            borderRadius: "20px",
            marginTop: "20px",
            maxWidth: "900px",
          }}
        >
          <ProductTable
            rows={searchedFolio}
            dataRow={dataRow}
            setDataRow={setDataRow}
            dialogData={dialogData}
            setDialogData={setDialogData}
            loading={loading}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default index;
