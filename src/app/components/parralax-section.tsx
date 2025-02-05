import OFFICE_URL from "../assets/office.png";

export const ParallaxSection = () => {
  return (
    <div className="parallax-container valign-wrapper">
      <div className="section no-pad-bot">
        <div className="container">
          <div className="row center">
            <h3 className="header col s12 teal-text">
              From Chaos to Structure
            </h3>
          </div>
        </div>
      </div>
      <div
        className="parallax"
        style={{ backgroundImage: `url(${OFFICE_URL})` }}
      ></div>
    </div>
  );
};
