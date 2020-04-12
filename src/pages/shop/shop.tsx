import React from "react";
import * as styles from "./styles";
import { connect } from "react-redux";
import { State, Game } from "@store/reducers/getGamesReducer";
import { Card } from "../../components/Card/card";

const ShopComponent: React.FC = (props: any) => {
  const renderCards = () => {
    return props.games.map((el: Game) => {
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
  return (
    <div>
      <styles.contentWrapper>{renderCards()}</styles.contentWrapper>
    </div>
  );
};

function mapStateToProps(state: State) {
  return {
    games: state.games
  };
}

export const Shop = connect(
  mapStateToProps,
  null
)(ShopComponent);
