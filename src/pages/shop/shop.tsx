import React, { useState, useEffect } from "react";
import * as styles from "./styles";
import { connect } from "react-redux";
import { State, Game } from "@store/reducers/getGamesReducer";
import { Card } from "../../components/Card/card";
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
  }, [props.getGamesListForACertainPage, currentPage]);
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

  const paginate = (e: any, num: number) => {
    e.preventDefault();
    setCurrentPage(num);
    //props.getGamesListForACertainPage(currentPage)
  };

  const onPrevPageClick = () => {
    setCurrentPage(currentPage - 1);
    //props.getGamesListForACertainPage(currentPage)
  };

  const onNextPageClick = () => {
    setCurrentPage(currentPage + 1);
    //props.getGamesListForACertainPage(currentPage)
  };

  const backToFirstPage = () => {
    setCurrentPage(1);
    //props.getGamesListForACertainPage(currentPage)
  };

  const forwardToLastPage = () => {
    // @ts-ignore
    setCurrentPage(totalPages);
    //props.getGamesListForACertainPage(currentPage)
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
