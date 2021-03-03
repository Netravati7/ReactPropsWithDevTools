import React from "react";
import Card from "./Card";
import contact from "../contact";
import Avatar from "./Avatar";

function createCard(contact) {
  return (
    <Card
      id={contact.id}
      key={contact.id}
      name={contact.name}
      img={contact.imgURl}
      tel={contact.tel}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contact</h1>
      <Avatar img="https://cdn.statically.io/img/wallpapercart.com/wp-content/uploads/2019/04/Cute-Baby-Girl-with-White-Umbrella-wallpaper-1920x1080.jpg?quality=100&f=auto" />
      {contact.map(createCard)}

      {/* <Card
        name={contact[0].name}
        img={contact[0].imgURl}
        tel={contact[0].tel}
        email={contact[0].email}
      />
      <Card
        name={contact[1].name}
        img={contact[1].imgURl}
        tel={contact[1].tel}
        email={contact[1].email}
      />
      <Card
        name={contact[2].name}
        img={contact[2].imgURl}
        tel={contact[2].tel}
        email={contact[2].email}
      />
      <Card
        name={contact[3].name}
        img={contact[3].imgURl}
        tel={contact[3].tel}
        email={contact[3].email}
      /> */}
    </div>
  );
}

export default App;
