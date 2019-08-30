import React from "react";
import styled from "styled-components";

import { Navbar } from "./components/Navbar/Navbar";
import { Header } from "./components/Header/Header";
import { DummyContent } from "./components/DummyContent";
import { Footer } from "./components/Footer/Footer";

const ContentWrapper = styled.div`
  padding-left: 280px;
  width: calc(100% - 280px);
  height: 100%;
  font-size: 1rem;
  color: #fff;
`;

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <ContentWrapper>
        <DummyContent />
        <Header />
        <DummyContent />
        <DummyContent />
        <DummyContent />
        <DummyContent />
        <DummyContent />
        <Footer />
      </ContentWrapper>
    </div>
  );
};

export default App;
