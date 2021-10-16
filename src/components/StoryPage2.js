import React from "react";
import lady from "../img/woman-shoppingbag-card 1.png";
import line from "../img/Vector 3.png";

const StoryPage2 = () => {
  return (
    <div className="story-pg-2 storypg">
      <div className="story-pg-2__elipse elipse">
        <img src={lady} alt="lady" className="story-pg-2__lady" />
      </div>
      <div className="story-pg-2__left-container write-up">
        <h2 className="title">Josiah’s Experience</h2>
        <p className="story-pg-2__rounded-block rounded-block">vendor</p>
        <p className="body">
          I had the best experience shopping with vasiti. Usability of the
          website was great, very good customer service, an all round great
          experience. I would definately be coming back! I had the best
          experience shopping with vasiti. Usability of the website was great,
          very good customer service, an all round great experience. I would
          definately be coming back!
        </p>
        <a href="./share-your-story" className="story-pg-2__share share">
          Share your own story!
        </a>
        <img src={line} alt="line" className="vector" />
      </div>
    </div>
  );
};

export default StoryPage2;