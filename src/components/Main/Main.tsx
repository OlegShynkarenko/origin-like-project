import React from "react";
import { DummyBanner } from "../DummyBanner";
import { Header } from "@shared/Header";
import { Content } from "../Content";
import { Route, Switch } from "react-router";
import { shop } from "../../pages/shop";
import { access } from "../../pages/access";
import { help } from "../../pages/help";
import { Footer } from "@shared/Footer";
import { Navbar } from "../Navbar";
import { StyledContentWrapper as ContentWrapper } from "../../App/StyledContentWrapper";

export const Main: React.FC = () => {
  return (
    <>
      <Navbar />
      <ContentWrapper>
        <DummyBanner />
        <Header />
        <Content>
          <Switch>
            <Route exact path="/" component={shop} />
            <Route path="/access" component={access} />
            <Route path="/help" component={help} />
          </Switch>
        </Content>
        <Footer />
      </ContentWrapper>
    </>
  );
};
