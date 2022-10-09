import data from '../data.json'

export type Data = typeof data;

export type SortKeys = keyof Omit<Data[0], 'date'>;

export type SortOrder = "ascn" | "desc";

export interface SortDataProps  {
    tableData: Data,
    sortKey: SortKeys,
    reverse: boolean,
}

export interface SortButtonProps {
    sortOrder: SortOrder,
    sortKeys: SortKeys,
    onClick: () => void,
    rowKey: SortKeys,
    rowLabel: string,
}