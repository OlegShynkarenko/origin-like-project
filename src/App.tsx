import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar/Navbar";
import { Content } from "./components/Content/Content";
import { Shop } from "./components/Navbar/Shop/Shop";
import { Access } from "./components/Navbar/Access/Access";
import { Help } from "./components/Navbar/Help/Help";
import { Authentication } from "./components/Navbar/Authentication/Authentication";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { DummyBanner } from "./components/DummyBanner";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 280px;
  width: calc(100% - 280px);
  min-height: 100vh;
  font-size: 1rem;
  color: #fff;
`;

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
              <Route exact path="/" component={Shop} />
              <Route path="/access" component={Access} />
              <Route path="/help" component={Help} />
              <Route path="/login" component={Authentication} />
              <Route path="/register" component={Authentication} />
            </Switch>
          </Content>
          <Footer />
        </ContentWrapper>
      </div>
    </BrowserRouter>
  );
};

export default App;
