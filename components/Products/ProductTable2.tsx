import { useState } from "react";
import { Box } from "@mui/material";
import {
  GridRowsProp,
  GridRowModesModel,
  DataGrid,
  GridColDef,
  GridEventListener,
  GridRowModel,
  GridRowEditStopReasons,
} from "@mui/x-data-grid";
import ProductOption from "./ProductOption";
import { Dispatch, SetStateAction } from "react";

interface IProductTableProps {
  rows: any[];
  dataRow: Dispatch<SetStateAction<string>>;
  setDataRow: Dispatch<SetStateAction<string>>;
  setDialogData: Dispatch<SetStateAction<string>>;
  dialogData: {
    open: boolean;
    action: string;
    data: string;
  };
  loading: boolean;
}

const initialRows: GridRowsProp = [
  {
    id: "A21",
    fechaAlta: new Date(),
    nombre: "Arturo",
    cantidad: "25",
    precioUnitario: "2000",
  },
];

interface EditToolbarProps {
  setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel
  ) => void;
}

export default function FullFeaturedCrudGrid(props: IProductTableProps) {
  const [rows, setRows] = useState(initialRows);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});

  const handleRowEditStop: GridEventListener<"rowEditStop"> = (
    params,
    event
  ) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const processRowUpdate = (newRow: GridRowModel) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "Folio", type: "string" },
    {
      field: "fechaAlta",
      headerName: "Fecha de alta",
      width: 170,
    },
    {
      field: "nombre",
      headerName: "Nombre",
      width: 120,
    },
    {
      field: "cantidad",
      headerName: "Cantidad",
      width: 130,
    },
    {
      field: "precioUnitario",
      headerName: "Precio Unitario",
      width: 170,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Opciones",
      width: 140,
      getActions: ({ id }) => {
        return [
          <ProductOption
            folio={id}
            setDataRow={props.setDataRow}
            setDialogData={props.setDialogData}
            dialogData={props.dialogData}
          />,
        ];
      },
    },
  ];
  return (
    <>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          "& .actions": {
            color: "text.secondary",
          },
          "& .textPrimary": {
            color: "text.primary",
          },
        }}
      >
        <DataGrid
          sx={{
            padding: "20px 30px",
            "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
              outline: "none !important",
            },
          }}
          rows={props.rows}
          columns={columns}
          loading={props.loading}
          rowModesModel={rowModesModel}
          onRowModesModelChange={handleRowModesModelChange}
          onRowEditStop={handleRowEditStop}
          processRowUpdate={processRowUpdate}
          slotProps={{
            toolbar: { setRows, setRowModesModel },
          }}
        />
      </Box>
    </>
  );
}
