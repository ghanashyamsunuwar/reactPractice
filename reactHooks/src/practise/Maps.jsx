import React from "react";

const Maps = () => {
  const data = [
    {
      name: "janam",
      age: "eleven",
      hobby: ["football", "gaming"],
      placevisit: [
        {
          nepal: ["kathmandu", "udayapur"],
        },
        "india",
        "china",
      ],
    },
    {
      name: "ghana",
      age: "ten",
      hobby: ["football", "gaming"],
      placevisit: [
        {
          nepal: ["kathmandu", "udayapur"],
        },
        "india",
        "china",
      ],
    },
    {
      name: "ramesh",
      age: "one",
      hobby: ["football", "gaming"],
      placevisit: [
        {
          nepal: ["kathmandu", "udayapur"],
        },
        "india",
        "china",
      ],
    },
  ];
  return (
    <div style={{ color: "black" }}>
      {data.map((items) => (
        <ul>
          <li> name: {items.name}</li>
          <li> age: {items.age}</li>
          <li>Hobby :
            <ul>
            {items.hobby.map((hobbys, index)=>(
            <li key={index}>{hobbys}</li>
            ))}
              </ul>
            
          </li>
          <li></li>
          <li></li>
          </ul>
      ))}
    </div>
  );
};

export default Maps;
