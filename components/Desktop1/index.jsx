import React from "react";
import styled from "styled-components";
import { MontserratBoldWhite35px } from "../../styledMixins";
import "./Desktop1.css";

function Desktop1(props) {
  const {
    backgroundLarge1,
    backgroundLarge2,
    frame365961,
    heroBg,
    takeABiteOutOfSmartContractAutomati,
    viewDemo,
    untitled11,
    layer311,
    text6,
    text7,
    text8,
    frame36605,
    text9,
    frame36606,
    frame36608,
    frame36607,
    poolsharksprotocol2,
    homepage2,
    logo8,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-1 screen">
        <OverlapGroup>
          <BackgroundLarge1 src={backgroundLarge1} />
          <BackgroundLarge2 src={backgroundLarge2} />
          <Frame365961 src={frame365961} />
          <HeroBg src={heroBg} />
          <TakeABiteOutOfSmartContractAutomati src={takeABiteOutOfSmartContractAutomati} />
          <Frame36593>
            <VIEWDEMO>{viewDemo}</VIEWDEMO>
          </Frame36593>
          <Untitled11 src={untitled11} />
          <Layer311 src={layer311} />
          <Text1>{text6}</Text1>
          <Text2>{text7}</Text2>
          <Text3>{text8}</Text3>
          <Frame36605 src={frame36605} />
          <Text4>{text9}</Text4>
          <Frame36606 src={frame36606} />
          <Frame36608 src={frame36608} />
          <Frame36607 src={frame36607} />
          <PoolSharksprotocol2 src={poolsharksprotocol2} />
          <Homepage2 src={homepage2} />
          <Logo8 src={logo8} />
        </OverlapGroup>
      </div>
    </div>
  );
}

const OverlapGroup = styled.div`
  ${MontserratBoldWhite35px}
  width: 3420px;
  height: 8191px;
  position: relative;
  margin-left: -959px;
`;

const BackgroundLarge1 = styled.img`
  position: absolute;
  width: 1744px;
  height: 4096px;
  top: 0;
  left: 655px;
  object-fit: cover;
`;

const BackgroundLarge2 = styled.img`
  position: absolute;
  width: 2047px;
  height: 4095px;
  top: 4096px;
  left: 655px;
`;

const Frame365961 = styled.img`
  position: absolute;
  width: 2341px;
  height: 3761px;
  top: 1248px;
  left: 526px;
  object-fit: cover;
`;

const HeroBg = styled.img`
  position: absolute;
  width: 3420px;
  height: 384px;
  top: 531px;
  left: 0;
`;

const TakeABiteOutOfSmartContractAutomati = styled.img`
  position: absolute;
  width: 348px;
  height: 12px;
  top: 242px;
  left: 1062px;
`;

const Frame36593 = styled.div`
  position: absolute;
  width: 156px;
  height: 32px;
  top: 303px;
  left: 1199px;
  display: flex;
  background-color: var(--blueprimaryselected);
  border-radius: 8px;
  box-shadow: 0px 0px 8px #ced8f7;
`;

const VIEWDEMO = styled.div`
  margin-top: 5px;
  width: 126px;
  height: 22px;
  margin-left: 15px;
  font-family: var(--font-family-montserrat);
  font-weight: 700;
  color: var(--black);
  font-size: var(--font-size-xxxs);
  text-align: right;
  letter-spacing: 1.17px;
`;

const Untitled11 = styled.img`
  position: absolute;
  width: 241px;
  height: 227px;
  top: 119px;
  left: 2058px;
`;

const Layer311 = styled.img`
  position: absolute;
  width: 1050px;
  height: 656px;
  top: 4846px;
  left: 1102px;
`;

const Text1 = styled.h1`
  position: absolute;
  width: 526px;
  top: 2677px;
  left: 1086px;
  letter-spacing: 0;
`;

const Text2 = styled.div`
  position: absolute;
  width: 683px;
  top: 1849px;
  left: 1594px;
  letter-spacing: 0;
`;

const Text3 = styled.div`
  position: absolute;
  width: 416px;
  top: 4594px;
  left: 1864px;
  text-align: right;
  letter-spacing: 0;
`;

const Frame36605 = styled.img`
  position: absolute;
  width: 732px;
  height: 311px;
  top: 1125px;
  left: 1059px;
`;

const Text4 = styled.div`
  position: absolute;
  width: 517px;
  top: 1025px;
  left: 1059px;
  text-shadow: 0px 2.8378028869628906px 2.8378028869628906px #00000040;
  letter-spacing: 0;
`;

const Frame36606 = styled.img`
  position: absolute;
  width: 732px;
  height: 311px;
  top: 2779px;
  left: 1059px;
`;

const Frame36608 = styled.img`
  position: absolute;
  width: 732px;
  height: 311px;
  top: 1951px;
  left: 1567px;
`;

const Frame36607 = styled.img`
  position: absolute;
  width: 732px;
  height: 311px;
  top: 4709px;
  left: 1567px;
`;

const PoolSharksprotocol2 = styled.img`
  position: absolute;
  width: 347px;
  height: 70px;
  top: 146px;
  left: 1059px;
  object-fit: cover;
`;

const Homepage2 = styled.img`
  position: absolute;
  width: 910px;
  height: 848px;
  top: 86px;
  left: 1254px;
`;

const Logo8 = styled.img`
  position: absolute;
  width: 82px;
  height: 63px;
  top: 34px;
  left: 1058px;
`;

export default Desktop1;
