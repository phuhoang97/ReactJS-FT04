//rfce và rfc

import React, { useState } from "react";

function DemouseState() {
  // Có 2 loại component: class component và function component
  // Từ phiên bản 16.8.x đã chuyển sang sử dụng function component

  // Cách khai báo state trong function component
  // const [nameState, setNameState] = useState(0);
  // console.log(nameState);
  // Trong đó:
  // + nameState: là tên state
  // + setNameState: là 1 hàm để thay đổi lại giá trị cho nameState
  // + initState: là giá trị khởi tạo ban đầu

  // Kiểu dữ liệu:
  // Kiểu dữ liệu nguyên thủy: number, string, boolean, ...
  // number
  const [count, setCount] = useState(0);

  // string
  const [text, setText] = useState("Bách Cọp");

  const handleChangeState = () => {
    setText("Nam Anh hay trốn !!!");
  };

  // Boolean
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  // Kiểu dữ liệu phức tạp: Array, Object
  // Array
  const [arrList, setArrList] = useState([1, 2, 3, 4]);

  const handleRandomNumber = () => {
    setArrList([...arrList, Math.floor(Math.random() * 10)]);
  };

  // Array + Object
  const [listUser, setListUser] = useState([
    { id: 1, name: "Nam Anh", age: 20 },
    { id: 2, name: "Nam", age: 27 },
    { id: 3, name: "Trưởng buồng", age: 27 },
  ]);

  // Object
  const [objList, setObjList] = useState({
    objCount: 10,
    objArr: [1, 3, 5, 7],
  });

  const handleRandom = () => {
    setObjList({
      objCount: objList.objCount,
      objArr: [...objList.objArr, Math.floor(Math.random() * 10)],
    });
  };

  return (
    <div>
      <h2>Demo useState</h2>
      <h3>Number: </h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Up</button>
      <button onClick={() => setCount(count - 1)}>Down</button>
      <h3>String: </h3>
      <p>{text}</p>
      <button onClick={handleChangeState}>Change State</button>
      <h3>Boolean: </h3>
      {toggle ? (
        <div>
          <div>Chúc các bạn học tập tốt !!!</div>
          <button onClick={handleToggle}>Click</button>
        </div>
      ) : (
        <div>
          <div>Chăm chỉ lênnn !!!</div>
          <button onClick={handleToggle}>Click</button>
        </div>
      )}

      <h3>Array :</h3>
      <p>{arrList.toString()}</p>
      <button onClick={handleRandomNumber}>Random Number</button>

      <hr />
      <h3>List User</h3>
      <table border={1}>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>

        {listUser.map((e, i) => (
          <tr key={i}>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.age}</td>
          </tr>
        ))}
      </table>
      <hr />
      <h3>Object: </h3>
      <p>{objList.objCount}</p>
      <button
        onClick={() =>
          setObjList({ objCount: objList.objCount + 1, objArr: objList.objArr })
        }
      >
        Up
      </button>
      <button
        onClick={() =>
          setObjList({ objCount: objList.objCount - 1, objArr: objList.objArr })
        }
      >
        Down
      </button>
      <p>{objList.objArr.toString()}</p>
      <button onClick={handleRandom}>Random</button>
    </div>
  );
}

export default DemouseState;
