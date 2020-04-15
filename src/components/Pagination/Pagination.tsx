import React from "react";
import ChevronLeftIcon from "@atlaskit/icon/glyph/chevron-left";
import ChevronRightIcon from "@atlaskit/icon/glyph/chevron-right";
import {
  PaginationList,
  PaginationItem,
  PaginationLink,
  Button
} from "./styles";
import colors from "../../utils/colors";

export const Pagination = (props: any) => {
  const { currentPage, totalPages, prev, next, firstPage, lastPage } = props;
  let pages = Array.from(Array(totalPages).keys());

  currentPage >= totalPages - 10
    ? (pages = pages.slice(totalPages - 10, totalPages))
    : (pages = pages.slice(currentPage, currentPage + 10));

  return (
    <PaginationList>
      <Button onClick={firstPage} disabled={currentPage === 1}>
        <ChevronLeftIcon label="" />
      </Button>
      <Button onClick={prev} disabled={currentPage === 1}>
        prev
      </Button>
      {pages.map(num => (
        <PaginationItem
          key={num}
          style={currentPage === num ? { background: colors.N800 } : {}}
        >
          <PaginationLink
            style={currentPage === num ? { color: colors.N0 } : {}}
            onClick={(e: any) => props.paginate(e, num)}
            href="!#"
          >
            {num}
          </PaginationLink>
        </PaginationItem>
      ))}
      <Button onClick={next} disabled={currentPage === totalPages}>
        next
      </Button>
      <Button onClick={lastPage} disabled={currentPage === totalPages}>
        <ChevronRightIcon label="" />
      </Button>
    </PaginationList>
  );
};
