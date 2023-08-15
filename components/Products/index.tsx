import { Box, Typography, Button } from "@mui/material";
import SearchInput from "./SearchInput";
import { useEffect, useState } from "react";
import FullFeaturedCrudGrid from "./ProductTable2";
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
      setDataRow(JSON.parse(dataLocal || ""));
    }

    const products = async () => {
      try {
        const listProducts = await listProductsQuery();
        setDataRow(JSON.parse(dataLocal || ""));
        console.log(typeof JSON.parse(dataLocal || ""), "data local");
        if (JSON.parse(dataLocal || "").length <= 0) {
          localStorage.setItem(
            "dataRow",
            JSON.stringify([...JSON.parse(dataLocal || ""), listProducts])
          );
          setDataRow([...JSON.parse(dataLocal || ""), listProducts]);
        }

        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    products();
  }, []);

  let searchedFolio = dataRow;

  if (searchFolio.length >= 1) {
    searchedFolio = dataRow.filter((dato: any) => {
      return dato.id.includes(searchFolio);
    });
  }
  return (
    <Box sx={{ padding: "40px 30px" }}>
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
      <Box
        sx={{
          height: 400,
          width: "100%",
          background: "#FFFFFF",
          borderRadius: "20px",
          marginTop: "20px",
        }}
      >
        <FullFeaturedCrudGrid
          rows={searchedFolio}
          dataRow={dataRow}
          setDataRow={setDataRow}
          dialogData={dialogData}
          setDialogData={setDialogData}
          loading={loading}
        />
      </Box>
    </Box>
  );
};

export default index;
