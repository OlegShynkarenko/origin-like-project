import React from "react";
import * as styles from "./styles";
import { connect } from "react-redux";
import { State, Game } from "@store/reducers/getGamesReducer";
import gameTitleSrc from "../../assets/division.png";
import appleLogo from "../../assets/apple.svg";
import linuxLogo from "../../assets/linux.svg";
import windowsLogo from "../../assets/windows.svg";

const ShopComponent: React.FC = (props: any) => {
  const renderCards = () => {
    return props.games.map((el: Game) => {
      return (
        <styles.cardWrapper key={el.id}>
          <img
            style={{ maxWidth: "100%" }}
            src={gameTitleSrc}
            alt="Game title"
          />
          <div style={{ textOverflow: "ellipsis", maxWidth: "100%" }}>
            <styles.title>{el.title}</styles.title>
            <styles.category>{`Category: ${el.category}`}</styles.category>
          </div>
          <styles.priceAndOsWrapper>
            <styles.supportedOsWrapper>
              {el.worksOnWindows && <img src={windowsLogo} />}
              {el.worksOnMac && <img src={appleLogo} />}
              {el.worksOnLinux && <img src={linuxLogo} />}
            </styles.supportedOsWrapper>
            <styles.price>{`$ ${el.price}`}</styles.price>
          </styles.priceAndOsWrapper>
        </styles.cardWrapper>
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
