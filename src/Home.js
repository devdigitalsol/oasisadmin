import { useState } from "react";
import Pledge from "./Pledge";
import Selfie from "./Selfie";
import logo from "./oasislogoSmall.png";
import Casestudy from "./Casestudy";
const Home = () => {
  const [showPledge, setShowPledge] = useState(true);
  const [showSelfie, setShowSelfie] = useState(false);
  const [showCasestudy, setShowCasestudy] = useState(false);
  return (
    <>
      <header>
        <div className="container">
          <img src={logo} alt="logo" />
        </div>
      </header>
      <section>
        <div className="container">
          <div className="tabHeader">
            <button
              className={showPledge ? "active" : null}
              onClick={() => {
                setShowPledge(true);
                setShowSelfie(false);
                setShowCasestudy(false);
              }}
            >
              Pledge
            </button>
            <button
              className={showSelfie ? "active" : null}
              onClick={() => {
                setShowPledge(false);
                setShowSelfie(true);
                setShowCasestudy(false);
              }}
            >
              Selfie
            </button>
            <button
              className={showCasestudy ? "active" : null}
              onClick={() => {
                setShowPledge(false);
                setShowSelfie(false);
                setShowCasestudy(true);
              }}
            >
              Casestudy
            </button>
          </div>
          {showPledge && <Pledge />}
          {showSelfie && <Selfie />}
          {showCasestudy && <Casestudy />}
        </div>
      </section>
    </>
  );
};
export default Home;
