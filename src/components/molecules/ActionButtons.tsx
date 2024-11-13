import React from "react";
import Button from "../atoms/Button";
import { User } from "../../types/User";
import { showWarningAlert } from "../../utils/sweetAlertUtils";
import { deleteUser, fetchUserById } from "../../services/userService";
interface ActionButtonsProps {
    selectedUsers: User[];
    onEdit: (user: User) => void;
    onDelete: (users: User[]) => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ selectedUsers, onEdit, onDelete }) => {
    const handleEditClick = async () => {
        if (selectedUsers.length > 0) {
            if (selectedUsers.length === 1) {
                const userId = selectedUsers[0].id;
                
                try {
                    const user = await fetchUserById(userId);
                    onEdit(user);
                } catch (error) {
                    showWarningAlert("Hubo un error al obtener los datos del usuario.");
                }
            } else {
                showWarningAlert("Solo puedes editar un usuario a la vez.");
            }
        }
        else {
            showWarningAlert("Por favor selecciona al menos un usuario para editar.");

        }
    };

    const handleDeleteClick = async () => {
        if (selectedUsers.length > 0) {
          try {
            for (const user of selectedUsers) {
              await deleteUser(user.id);
            }
            
            onDelete(selectedUsers);
          } catch (error) {
            console.error('Error al eliminar los usuarios:', error);
          }
        } else {
          showWarningAlert("Por favor selecciona al menos un usuario para eliminar.");
        }
      };

    return (
        <div className="d-flex justify-content-start align-items-center">
            <Button
                className="btn btn-sm btn-outline-primary px-4 me-2"
                onClick={handleEditClick}
                icon="bi-pencil"
                label="Editar"
            />
            <Button
                className="btn btn-sm btn-outline-danger px-4 me-2"
                onClick={handleDeleteClick}
                icon="bi-trash3"
                label="Eliminar"
            />
        </div>
    );
};

export default ActionButtons;
