import React from "react";
import Button from "./Button";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const renderPageButtons = () => {
        const buttons = [];
        
        const maxVisibleButtons = window.innerWidth < 768 ? 3 : 5;
        const startPage = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2));
        const endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);

        if (startPage > 1) {
            buttons.push(
                <span key="start-ellipsis" className="mx-1">...</span>
            );
        }

        for (let page = startPage; page <= endPage; page++) {
            buttons.push(
                <Button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`btn btn-sm p5-11 mx-1 ${page === currentPage ? 'btn-primary text-white fw-600' : 'bg-white text-primary'}`}
                    label={page}
                />
            );
        }

        if (endPage < totalPages) {
            buttons.push(
                <span key="end-ellipsis" className="mx-1">...</span>
            );
        }

        return buttons;
    };

    return (
        <div className="d-flex flex-wrap align-items-center justify-content-center">
            <Button
                className={`btn btn-light btn-sm me-2 ${currentPage === 1 ? "" : "text-primary btn"}`}
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                label="Anterior"
            />

            {renderPageButtons()}

            <Button
                className={`btn btn-light btn-sm ms-2 ${currentPage === totalPages ? "" : "text-primary btn"}`}
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                label="Siguiente"
            />
        </div>
    );
};

export default Pagination;
