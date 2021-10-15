import React from "react";
import ladies from "../img/black-beautiful-ladies-smiling 1.png";
import line from "../img/Vector 3.png";

const StoryPage1 = () => {
  return (
    <div className="story-pg-1 storypg">
      <div className="story-pg-1__elipse elipse">
        <img src={ladies} alt="laughing ladies" className="ladies" />
      </div>
      <div className="story-pg-1__right-container write-up">
        <h2 className="title">Tolu & Joy's Experience</h2>
        <p className="story-pg-1__rounded-block rounded-block">customer</p>
        <p className="body">
          I had the best experience shopping with vasiti. Usability of the
          website was great, very good customer service, an all round great
          experience. I would definately be coming back! I had the best
          experience shopping with vasiti. Usability of the website was great,
          very good customer service, an all round great experience. I would
          definately be coming back!
        </p>
        <a href="./share-your-story" className="story-pg-1__share share">
          Share your own story!
        </a>
        <img src={line} alt="line" className="vector" />
      </div>
    </div>
  );
};

export default StoryPage1;
