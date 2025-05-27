import "./Education.css";

const Education = () => {
  return (
    <section id="education">
      <div className="section__header">
        <h2 className="shine">Education</h2>
      </div>

     <div className="timeline">
        <div className="container-education left-container">
            <img src="/src/assets/education/google.png" alt="" id="education-image"/>
          <div className="text-box">
            <h2>AlPhabet Inc</h2>
            <small>2018 - 2019</small>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              dolore dignissimos labore ab deserunt eos quasi corrupti, magni
              eaque cupiditate.
            </p>
          </div>
        </div>
        <div className="container-education right-container">
            <img src="/src/assets/education/amazon.png" alt="" />
          <div className="text-box">
            <h2>AlPhabet Inc</h2>
            <small>2018 - 2019</small>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              dolore dignissimos labore ab deserunt eos quasi corrupti, magni
              eaque cupiditate.
            </p>
          </div>
        </div>
        <div className="container-education left-container">
            <img src="/src/assets/education/tesla.png" alt="" />
          <div className="text-box">
            <h2>AlPhabet Inc</h2>
            <small>2018 - 2019</small>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              dolore dignissimos labore ab deserunt eos quasi corrupti, magni
              eaque cupiditate.
            </p>
          </div>
        </div>
        <div className="container-education right-container">
            <img src="/src/assets/education/toyota.png" alt="" />
          <div className="text-box">
            <h2>AlPhabet Inc</h2>
            <small>2018 - 2019</small>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              dolore dignissimos labore ab deserunt eos quasi corrupti, magni
              eaque cupiditate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
