import React from "react";
import * as styles from "./styles";
import { connect } from "react-redux";
import { State } from "../../components/Authentication/types/logIn";
import gameTitleSrc from "../../assets/division.png";
import appleLogo from "../../assets/apple.svg";
import linuxLogo from "../../assets/linux.svg";
import windowsLogo from "../../assets/windows.svg";

const ShopComponent: React.FC = (props: any) => {
  const renderCards = () => {
    // @ts-ignore
    return props.games.games.map(el => {
      return (
        <styles.cardWrapper key={el.id}>
          <img style={{ maxWidth: "100%" }} src={gameTitleSrc} />
          <div style={{ textOverflow: "ellipsis", maxWidth: "100%" }}>
            <styles.title>{el.title}</styles.title>
            <styles.category>{`Category: ${el.category}`}</styles.category>
          </div>
          <styles.priceAndOsWrapper>
            <styles.supportedOsWrapper>
              {el.worksOn.Windows && <img src={windowsLogo} />}
              {el.worksOn.Mac && <img src={appleLogo} />}
              {el.worksOn.Linux && <img src={linuxLogo} />}
            </styles.supportedOsWrapper>
            <styles.price>{`$ ${el.price.finalAmount}`}</styles.price>
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
  return state;
}

export const Shop = connect(
  mapStateToProps,
  null
)(ShopComponent);
