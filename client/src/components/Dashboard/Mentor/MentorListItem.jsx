import React from "react";

import "./MentorListItem.css";

export default function MentorListItem({item}) {
 

  return (
    <div className='card'>
      <div className="card_photo">
        <img src={item?.photo}></img>
      </div>
        <h3>{item?.firstname} {item?.lastname}</h3>

      <div className="card_description">
        <p>{item?.description}</p>

      </div>
      <div className="card_tag">
        <p>{item?.skill}</p>

      </div>
      <div className="card_tag">
        <p>{item?.location}</p>

      </div>

      <div>
        <button className="card_btn">view profile</button>
      </div>

    </div>
  );
}