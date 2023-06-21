import React, { useState } from "react";

function BaiTH05() {
  const [searchData, setSearchData] = useState("");
  const [data, setData] = useState([
    { name: "John", age: 25 },
    { name: "Mary", age: 30 },
    { name: "Peter", age: 35 },
    { name: "Jane", age: 40 },
  ]);

  const handleChange = (e) => {
    setSearchData(e.target.value);
  };

  const handleClick = () => {
    let find = data.find((element, index) => {
      return element.name === searchData;
    });
    setSearchData(find);
  };

  return (
    <div>
      <input type='text' onChange={handleChange} />
      <button onClick={handleClick}>Search</button>
      <ul>
        {searchData ? (
          <li>
            {searchData.name} - {searchData.age}
          </li>
        ) : (
          data.map((e, i) => (
            <li>
              {e.name} - {e.age}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default BaiTH05;
