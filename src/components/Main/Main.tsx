import React from "react";
import { DummyBanner } from "../DummyBanner";
import { Header } from "@shared/Header";
import { Content } from "../Content";
import { Route, Switch } from "react-router";
import { Shop } from "../../pages/shop";
import { access } from "../../pages/access";
import { help } from "../../pages/help";
import { Footer } from "@shared/Footer";
import { Navbar } from "../Navbar";
import { StyledContentWrapper as ContentWrapper } from "../../App/StyledContentWrapper";
import { Profile } from "../Profile/Profile";
import { PrivateRoute } from "../../router/PrivateRoute";

export const Main: React.FC = () => {
  return (
    <>
      <Navbar />
      <ContentWrapper>
        <DummyBanner />
        <Header />
        <Content>
          <Switch>
            <Route exact path="/" component={Shop} />
            <Route path="/access" component={access} />
            <Route path="/help" component={help} />
            <PrivateRoute>
              <Route exact path="/profile" component={Profile} />
            </PrivateRoute>
          </Switch>
        </Content>
        <Footer />
      </ContentWrapper>
    </>
  );
};
