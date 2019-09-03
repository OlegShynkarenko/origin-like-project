import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Navbar } from "../components/Navbar";
import { Content } from "../components/Content";
import { shop } from "../pages/shop";
import { access } from "../pages/access";
import { help } from "../pages/help";
import { authentication } from "../pages/authentication";
import { Header } from "../components/shared/Header";
import { Footer } from "../components/shared/Footer";
import { DummyBanner } from "../components/DummyBanner";
import { StyledContentWrapper as ContentWrapper } from "./StyledContentWrapper";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <ContentWrapper>
          <DummyBanner />
          <Header />
          <Content>
            <Switch>
              <Route exact path="/" component={shop} />
              <Route path="/access" component={access} />
              <Route path="/help" component={help} />
              <Route path="/login" component={authentication} />
              <Route path="/register" component={authentication} />
            </Switch>
          </Content>
          <Footer />
        </ContentWrapper>
      </div>
    </BrowserRouter>
  );
};

export default App;
