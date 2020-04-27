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

const LIMIT_OF_PAGINATED_PAGES_TO_SHOW = 10;

export const Pagination = (props: any) => {
  const { currentPage, totalPages, prev, next, firstPage, lastPage } = props;
  let pages = Array.from(Array(totalPages).keys());

  currentPage >= totalPages - LIMIT_OF_PAGINATED_PAGES_TO_SHOW
    ? (pages = pages.slice(
        totalPages - LIMIT_OF_PAGINATED_PAGES_TO_SHOW,
        totalPages
      ))
    : (pages = pages.slice(
        currentPage,
        currentPage + LIMIT_OF_PAGINATED_PAGES_TO_SHOW
      ));

  return (
    <PaginationList>
      <Button onClick={firstPage} disabled={currentPage === 1}>
        <ChevronLeftIcon label="" />
      </Button>
      <Button onClick={prev} disabled={currentPage === 1}>
        prev
      </Button>
      {pages.map(num => (
        <PaginationItem key={num}>
          <PaginationLink
            style={
              currentPage === num
                ? { color: colors.N0, background: colors.N800 }
                : { color: colors.N800 }
            }
            onClick={(e: any) => props.paginate(e, num)}
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
