import Swal from "sweetalert2";

export const showEditAlert = (): void => {
  Swal.fire("Editado", "El usuario ha sido editado.", "success");
};

export const showDeleteConfirmationAlert = (userName: string): Promise<{ isConfirmed: boolean }> => {
  return Swal.fire({
    title: `¿Estás seguro de eliminar a ${userName}?`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "No, cancelar",
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.cancel) {
      showCancelAlert();
    }
    return result;
  });
};

export const showDeleteSuccessAlert = (): void => {
  Swal.fire("Eliminado", "El usuario ha sido eliminado.", "success");
};

export const showCancelAlert = (): void => {
  Swal.fire({
    icon: "error",
    title: "Cancelado",
    text: "El usuario no ha sido eliminado.",
    confirmButtonText: "OK",
    confirmButtonColor: "#7B5CF3",
  });
};

export const showWarningAlert = (message: string): void => {
  Swal.fire({
      icon: "warning",
      title: "Advertencia",
      text: message,
      confirmButtonText: "OK",
      confirmButtonColor: "#FF7043",
  });
};