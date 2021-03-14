import coffeeOne from "../../assets/images/coffee/1.jpg";
import coffeeTwo from "../../assets/images/coffee/2.jpg";
import coffeeThree from "../../assets/images/coffee/3.jpg";
import titleSeperator from "../../assets/images/title-separator.png";
import "./imageSection.scss";

const ImageSection = () => {
  return (
    <section>
      <div className="title-section">
        <h2>The Coffee</h2>
        <img src={titleSeperator} alt="coffee seperator" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
      </div>

      <div className="coffee-section container">
        <div className="coffee-section__child">
          <div className="coffee-section__group">
            <img src={coffeeOne} alt="coffee" className="coffee-images" />
            <h3>Coffee</h3>
            <p className="coffee-text">
              Quisque rutrum, aenean imperdiet. Etiam ultricies nisi vel augue.
              Curabitur ullamcorper ultricies nisi, nam eget dui. Etiam rhoncus
              maecenas tempus,
            </p>
          </div>
          <div className="coffee-section__group">
            <img src={coffeeTwo} alt="coffee" className="coffee-images" />
            <h3>Coffee</h3>
            <p className="coffee-text">
              Quisque rutrum, aenean imperdiet. Etiam ultricies nisi vel augue.
              Curabitur ullamcorper ultricies nisi, nam eget dui. Etiam rhoncus
              maecenas tempus,
            </p>
          </div>
          <div className="coffee-section__group">
            <img src={coffeeThree} alt="coffee" className="coffee-images" />
            <h3>Coffee</h3>
            <p className="coffee-text">
              Quisque rutrum, aenean imperdiet. Etiam ultricies nisi vel augue.
              Curabitur ullamcorper ultricies nisi, nam eget dui. Etiam rhoncus
              maecenas tempus,
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
