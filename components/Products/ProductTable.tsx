import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface IProductTableProps {
  rows: any[];
  columns: GridColDef[];
}

const ProductTable = (props: IProductTableProps) => {
  return (
    <DataGrid
      sx={{ padding: "20px 30px" }}
      rows={props.rows}
      columns={props.columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
    />
  );
};

export default ProductTable;
