import { useState } from "react";

/* 
    props = {
        name: "Emily",
        cities: ["SF", "Davis"]
    }
*/

export default function Custom(props) {
    const { name, age } = props;
//   const [name, setName] = useState(props.name);
  const cities = props.cities;
//   const age = props.age;

  return (
    <div>
      <h1>{name}{age}</h1>
      <div>
        {cities?.map((city, index) => (
          <p key={index}>{city}</p>
        ))}
      </div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
