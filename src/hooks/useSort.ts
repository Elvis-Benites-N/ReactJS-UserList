import { useMemo, useState } from "react";

interface SortConfig<T> {
    key: keyof T;
    direction: "asc" | "desc";
}

const useSort = <T,>(data: T[], initialSortConfig: SortConfig<T> | null = null) => {
    const [sortConfig, setSortConfig] = useState<SortConfig<T> | null>(initialSortConfig);

    const sortedData = useMemo(() => {
        if (!sortConfig) return data;

        return [...data].sort((a, b) => {
            const order = a[sortConfig.key] < b[sortConfig.key] ? -1 : a[sortConfig.key] > b[sortConfig.key] ? 1 : 0;
            return sortConfig.direction === "asc" ? order : -order;
        });
    }, [data, sortConfig]);

    const requestSort = (key: keyof T) => {
        setSortConfig((prevConfig) => ({
            key,
            direction: prevConfig && prevConfig.key === key && prevConfig.direction === "asc" ? "desc" : "asc",
        }));
    };

    return { sortedData, sortConfig, requestSort };
};

export default useSort;
