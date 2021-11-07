import React, { Component } from "react";
import Testifieritem from "./Testifieritem";

class Testifiers extends Component {
  state = {
    testifiers: [
      {
        id: "1",
        avatar_pic: "avatar_picture/Ellipse-22.png",
        usersName: "Joseph Ike",
        location: "In Ikeja",
        post: <p className="colorTag">Customer</p>,
        content: (
          <p>
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
            voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex
            duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt
            mollit dolore cillum minim tempor enim.
          </p>
        ),
      },
      {
        id: "2",
        avatar_pic: "avatar_picture/Ellipse-23.png",
        usersName: "Adetola Fashina",
        location: "Ibadan",
        post: <p className="colorTag">Customer</p>,
        content: (
          <p>
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deser <br />{" "}
            unt ut voluptate aute id deserunt nisi. Amet minim mollit non
            deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veniam consequat sunt
            nostrud amet.
          </p>
        ),
      },
      {
        id: "3",
        avatar_pic: "avatar_picture/Ellipse-24.png",
        usersName: "Emmanuel Fayemi",
        location: "In Akoka",
        post: <p className="colorTag">Customer</p>,
        content: (
          <p>
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
            voluptate aute id deserunt nisi. Elit aute irure tempor cupidatat
            incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet
            minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          </p>
        ),
      },
      {
        id: "4",
        avatar_pic: "avatar_picture/Ellipse-22b.png",
        usersName: "Chisom Obilor",
        location: "In Magodo",
        post: "Vendor",
        content: (
          <p>
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
            voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex
            duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt
            mollit dolore cillum minim tempor enim.
          </p>
        ),
      },
      {
        id: "5",
        avatar_pic: "avatar_picture/Ellipse-23b.png",
        usersName: "Adunoluwa Adeyemi",
        location: "Iwo Road",
        post: "Vendor",
        content: (
          <p>
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
            voluptate aute id deserunt nisi. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit. Exercitation veniam consequat sunt nostrud
            amet.
          </p>
        ),
      },
      {
        id: "6",
        avatar_pic: "avatar_picture/Ellipse-24b.png",
        usersName: "Chidi Okeke",
        location: "In Somolu",
        post: "Vendor",
        content: (
          <p>
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
            voluptate aute id deserunt nisi. Elit aute irure tempor cupidatat
            incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet
            minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          </p>
        ),
      },
    ],
  };
  render() {
    return (
      <div className="col">
        <div className="col__container">
          {this.state.testifiers.map((testifier) => (
            <Testifieritem key={testifier.id} testifier={testifier} />
          ))}
        </div>
      </div>
    );
  }
}

export default Testifiers;
