import React from "react";

import * as styles from "./styles";
import gameTitleSrc from "../../assets/division.png";
import windowsLogo from "../../assets/windows.svg";
import appleLogo from "../../assets/apple.svg";
import linuxLogo from "../../assets/linux.svg";

interface Props {
  title: string;
  category: string;
  worksOnWindows: boolean;
  worksOnMac: boolean;
  worksOnLinux: boolean;
  price: string;
}

export const Card = (props: Props) => {
  const {
    title,
    category,
    worksOnWindows,
    worksOnMac,
    worksOnLinux,
    price
  } = props;
  return (
    <styles.cardWrapper>
      <img style={{ maxWidth: "100%" }} src={gameTitleSrc} alt="Game title" />
      <div style={{ textOverflow: "ellipsis", maxWidth: "100%" }}>
        <styles.title>{title}</styles.title>
        <styles.category>{`Category: ${category}`}</styles.category>
      </div>
      <styles.priceAndOsWrapper>
        <styles.supportedOsWrapper>
          {worksOnWindows && <img src={windowsLogo} />}
          {worksOnMac && <img src={appleLogo} />}
          {worksOnLinux && <img src={linuxLogo} />}
        </styles.supportedOsWrapper>
        <styles.price>{`$ ${price}`}</styles.price>
      </styles.priceAndOsWrapper>
    </styles.cardWrapper>
  );
};
