import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { v4 } from "uuid";
import { formater } from "@/callFunction/FormaterPrice";
import { dateFormater } from "@/callFunction/FormaterDate";
import { deleteProductQuery } from "@/callFunction/DeleteProductQuery";

import LoadingButton from "@mui/lab/LoadingButton";
import { createProductQuery } from "@/callFunction/CreateProductQuery";
import CreateProductDialog from "./Dialogs/CreateProductDialog";
import DetailProductDialog from "./Dialogs/DetailProductDialog";

interface IProductDialogProps {
  dialogData: {
    open: boolean;
    action: string;
    data: string;
  };
  setDialogData: Dispatch<SetStateAction<any>>;
  setDataRow: Dispatch<SetStateAction<any>>;
}

const buttonSx: any = [];
buttonSx["eliminar"] = {
  background: "#B71413",
  border: "none",
  ":hover": {
    background: "#D11413",
    border: "none",
  },
  color: "#FFFFFF",
};

buttonSx["agregar"] = {
  background: "#239329",
  border: "none",
  ":hover": {
    background: "#23B129",
    border: "none",
  },
  color: "#FFFFFF",
};

buttonSx["visualizar"] = {
  background: "#B71413",
  border: "none",
  ":hover": {
    background: "#D11413",
    border: "none",
  },
  color: "#FFFFFF",
};

const ProductDialog = (props: IProductDialogProps) => {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [datosEdit, setDatosEdit] = useState([
    { cantidad: "", fechaAlta: "", id: "", nombre: "", precioUnitario: "" },
  ]);

  useEffect(() => {
    let datos = JSON.parse(localStorage.getItem("dataRow") || "");
    datos = datos.filter((dato: any) => {
      return dato.id.includes(props.dialogData.data);
    });
    setDatosEdit(datos);
  }, [props.dialogData]);

  const textDialog = (action: string, folio?: string) => {
    if (action === "eliminar") {
      return (
        <DialogContentText id="alert-dialog-description">
          ¿Estás seguro que deseas eliminar este producto?
        </DialogContentText>
      );
    }
    if (action === "agregar") {
      return <CreateProductDialog />;
    }
    if (action === "visualizar") {
      return (
        <DetailProductDialog
          dialogData={props.dialogData}
          setDialogData={props.setDataRow}
          datosEdit={datosEdit}
        />
      );
    }
  };

  const handleClose = (actionDialog: string, e: any) => {
    if (actionDialog === "eliminar" || actionDialog === "visualizar") {
      deleteProduct(props.dialogData.data);
    } else if (actionDialog === "agregar") {
      createProduct();
    } else {
      props.setDialogData({ open: false, action: props.dialogData.action });
    }
  };

  const action = props.dialogData.action;

  const createProduct = async () => {
    const name = (document.querySelector("#standard-name") as HTMLInputElement)
      .value;

    const quantity = (
      document.querySelector("#standard-quantity") as HTMLInputElement
    ).value;

    const price = (
      document.querySelector("#standard-price") as HTMLInputElement
    ).value;

    const formateador = new Intl.NumberFormat("en", {
      style: "currency",
      currency: "MXN",
    });

    const fechaAlta = dateFormater();
    const id = v4();

    const data = {
      id,
      fechaAlta,
      nombre: name,
      cantidad: quantity,
      precioUnitario: formater(Number(price)),
    };
    if (name !== "" && quantity !== "" && price !== "") {
      setLoading(true);
      const resp = await createProductQuery(data);
      props.setDataRow(resp);
      props.setDialogData({ open: false, action: props.dialogData.action });
      setLoading(false);
    }
  };

  const deleteProduct = async (folio: string) => {
    setLoading(true);
    setDisabled(true);
    const resp = await deleteProductQuery(folio);

    localStorage.setItem("dataRow", JSON.stringify(resp));
    props.setDataRow(resp);
    props.setDialogData({ open: false, action: props.dialogData.action });
    setLoading(false);
    setDisabled(false);
  };

  return (
    <Dialog
      open={props.dialogData.open || false}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {action === "agregar"
          ? "Agregar producto"
          : action === "visualizar"
          ? datosEdit.length > 0
            ? datosEdit[0]?.nombre
            : ""
          : "Eliminar producto"}
      </DialogTitle>
      <DialogContent>{textDialog(action, props.dialogData.data)}</DialogContent>
      <DialogActions>
        <LoadingButton
          sx={buttonSx[action]}
          onClick={(e) => handleClose(action, e)}
          loading={loading}
          variant="outlined"
        >
          {action !== "visualizar" ? action : "Eliminar"}
        </LoadingButton>
        {/* <Button onClick={(e) => handleClose(action, e)} sx={buttonSx[action]}>
          {action !== "visualizar" ? action : ""}
        </Button> */}
        <Button onClick={() => handleClose("", "")} color="primary" autoFocus>
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductDialog;
