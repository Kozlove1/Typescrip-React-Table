import { SortDataProps } from "./interface";
import data from '../data.json';

export function sortData(props: SortDataProps) {
    const sortedData = data.sort((a, b) => {
      return a[props.sortKey] > b[props.sortKey] ? 1 : -1;
    });

    if (props.reverse) {
      return sortedData.reverse();
    }
  
    return sortedData;
  }