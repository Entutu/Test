
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Desktop1 from "./components/Desktop1";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|desktop-1)">
          <Desktop1 {...desktop1Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const desktop1Data = {
    backgroundLarge1: "https://anima-uploads.s3.amazonaws.com/projects/617eb9bd803e798dde254bc8/releases/61822f1fe1fbdf8794997b4f/img/background-large-1@1x.png",
    backgroundLarge2: "https://anima-uploads.s3.amazonaws.com/projects/617eb9bd803e798dde254bc8/releases/617ec09ee6a8124b90d45d8b/img/background-large-2@1x.png",
    frame365961: "https://anima-uploads.s3.amazonaws.com/projects/617eb9bd803e798dde254bc8/releases/617ec09ee6a8124b90d45d8b/img/frame-36596-1@1x.png",
    heroBg: "https://anima-uploads.s3.amazonaws.com/projects/617eb9bd803e798dde254bc8/releases/61823178e1fbdf8794997b5b/img/hero-bg-1@1x.png",
    takeABiteOutOfSmartContractAutomati: "https://anima-uploads.s3.amazonaws.com/projects/617eb9bd803e798dde254bc8/releases/617ec09ee6a8124b90d45d8b/img/take-a-bite-out-of-smart-contract-automation@1x.png",
    viewDemo: "VIEW DEMO",
    untitled11: "https://anima-uploads.s3.amazonaws.com/projects/617eb9bd803e798dde254bc8/releases/617ec09ee6a8124b90d45d8b/img/untitled-1-1@2x.png",
    layer311: "https://anima-uploads.s3.amazonaws.com/projects/617eb9bd803e798dde254bc8/releases/61822f1fe1fbdf8794997b4f/img/layer-31-1@1x.png",
    text6: "Roam the Open DeFi Waters",
    text7: "Trustless DAO Treasury Management",
    text8: "Strike as a Community",
    frame36605: "https://anima-uploads.s3.amazonaws.com/projects/617eb9bd803e798dde254bc8/releases/61822f1fe1fbdf8794997b4f/img/frame-36605@1x.png",
    text9: "Smart Contract Automation",
    frame36606: "https://anima-uploads.s3.amazonaws.com/projects/617eb9bd803e798dde254bc8/releases/61822f1fe1fbdf8794997b4f/img/frame-36606@1x.png",
    frame36608: "https://anima-uploads.s3.amazonaws.com/projects/617eb9bd803e798dde254bc8/releases/61823178e1fbdf8794997b5b/img/frame-36608@1x.png",
    frame36607: "https://anima-uploads.s3.amazonaws.com/projects/617eb9bd803e798dde254bc8/releases/61822f1fe1fbdf8794997b4f/img/frame-36607@1x.png",
    poolsharksprotocol2: "https://anima-uploads.s3.amazonaws.com/projects/617eb9bd803e798dde254bc8/releases/61822f1fe1fbdf8794997b4f/img/poolsharks-protocol-2@2x.png",
    homepage2: "https://anima-uploads.s3.amazonaws.com/projects/617eb9bd803e798dde254bc8/releases/61822f1fe1fbdf8794997b4f/img/homepage-2@1x.png",
    logo8: "https://anima-uploads.s3.amazonaws.com/projects/617eb9bd803e798dde254bc8/releases/61822f1fe1fbdf8794997b4f/img/logo-7@2x.png",
};

