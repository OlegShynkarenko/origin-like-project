import React, { useState, useEffect } from "react";
import * as styles from "./styles";
import { connect } from "react-redux";
import { State, Game } from "@store/reducers/getGamesReducer";
import { Card } from "../../components/Card";
import { Pagination } from "../../components/Pagination/Pagination";
import { Dispatch } from "redux";
import { getGamesListForACertainPage } from "@store/actionCreators/getGamesList";

interface IShopComponent {
  games: Array<Game>;
  getGamesListForACertainPage: (page: number) => void;
}

const ShopComponent = (props: IShopComponent) => {
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    props.getGamesListForACertainPage(currentPage);
  }, [currentPage]);
  const games = props.games.slice(0, -1);
  const totalPages = props.games.slice(-1)[0];
  const renderCards = () => {
    return games.map((el: Game) => {
      return (
        <Card
          key={el.id}
          title={el.title}
          category={el.category}
          worksOnWindows={el.worksOnWindows}
          worksOnMac={el.worksOnMac}
          worksOnLinux={el.worksOnLinux}
          price={el.price}
        />
      );
    });
  };

  const paginate = (e: React.MouseEvent<HTMLButtonElement>, num: number) => {
    setCurrentPage(num);
  };

  const onPrevPageClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const onNextPageClick = () => {
    setCurrentPage(currentPage + 1);
  };

  const backToFirstPage = () => {
    setCurrentPage(1);
  };

  const forwardToLastPage = () => {
    // @ts-ignore
    setCurrentPage(totalPages);
  };
  return (
    <div>
      <styles.contentWrapper>{renderCards()}</styles.contentWrapper>
      <div>
        {totalPages && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            paginate={paginate}
            prev={onPrevPageClick}
            next={onNextPageClick}
            firstPage={backToFirstPage}
            lastPage={forwardToLastPage}
          />
        )}
      </div>
    </div>
  );
};

function mapStateToProps(state: State) {
  return {
    games: state.games
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    getGamesListForACertainPage: (page: number) =>
      dispatch(getGamesListForACertainPage({ page }))
  };
}

export const Shop = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopComponent);
