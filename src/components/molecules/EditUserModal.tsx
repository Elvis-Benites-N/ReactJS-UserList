import React, { FC, useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { User } from "../../types/User";

interface EditUserModalProps {
    show: boolean;
    onHide: () => void;
    selectedUser: User | null;
    onSave: (user: User) => void;
}

const EditUserModal: FC<EditUserModalProps> = ({ show, onHide, selectedUser, onSave }) => {
    const [editData, setEditData] = useState<User | null>(selectedUser);

    useEffect(() => {
        setEditData(selectedUser);
    }, [selectedUser]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setEditData((prev) => (prev ? { ...prev, [name]: value } : null));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (editData) {
            onSave(editData);
            onHide();
        }
    };

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Editar Usuario</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit} className="p-3 row">
                    <Form.Group className="mb-3 col-sm-12 col-md-6">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={editData?.name || ""}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 col-sm-12 col-md-6">
                        <Form.Label>Género</Form.Label>
                        <Form.Select
                            name="gender"
                            value={editData?.gender || "Female"}
                            onChange={handleChange}
                            required
                        >
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3 col-sm-12 col-md-6">
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control
                            type="text"
                            name="address"
                            value={editData?.address || ""}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 col-sm-12 col-md-6">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control
                            type="text"
                            name="phone"
                            value={editData?.phone || ""}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 col-sm-12 col-md-6">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={editData?.email || ""}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 col-sm-12 col-md-6">
                        <Form.Label>Edad</Form.Label>
                        <Form.Control
                            type="text"
                            name="age"
                            value={editData?.age || ""}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="col-sm-12 mt-3">
                        <Button variant="primary" type="submit" className="w-100">
                            Guardar cambios
                        </Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default EditUserModal;
