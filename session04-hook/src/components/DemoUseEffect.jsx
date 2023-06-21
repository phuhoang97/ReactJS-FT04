import React, { useEffect, useState } from "react";

function DemoUseEffect() {
  // useEffect dùng để: callAPI, listen DOM event, update DOM, ...
  // useEffect được thay thế cho componentDidMount and componentDidUpdate:
  // trong useEffect có 3 trường hợp
  // - Trường hợp 1: useEffect(callback);
  // Tính chất:
  // + useEffect(or Callback) sẽ luôn được gọi mỗi khi component mount
  // + useEffect(Callback) sẽ được gọi mỗi khi component được re-render
  // + Gọi callback ngay sau khi component thêm element vào DOM

  // - Trường hợp 2: useEffect(callback, [])
  // => Ở những phiên bản cũ: [] cleanUp, còn ở phiên bản mới deps
  // Tính chất:
  // + useEffect(or Callback) sẽ luôn được gọi mỗi khi component mount
  // + callback sẽ chỉ được chạy 1 lần khi component được re-render

  // - Trường hợp 3: useEffect(callback, [deps]) // dependencies
  // Tính chất:
  // + useEffect(or Callback) sẽ luôn được gọi mỗi khi component mount
  // + Callback sẽ được gọi mỗi khi deps thay đổi

  //   const [text, setText] = useState("");

  // Trường hợp 1
  //   useEffect(() => {
  //     console.log("Hello world");
  //   });

  // Trường hợp 2
  //   useEffect(() => {
  //     console.log("useEffect đang được chạy");
  //   }, []);

  // Trường hợp 3
  //   const [count, setCount] = useState(0);
  //   useEffect(() => {
  //     console.log("useEffect đang được chạy");
  //   }, [text, count]);

  return (
    <div>
      <h2>Demo useEffect</h2>
      <input type='text' onChange={(e) => setText(e.target.value)} />
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Up</button>
      <button onClick={() => setCount(count - 1)}>Down</button>
      {console.log("Component được re-render")}
    </div>
  );
}

export default DemoUseEffect;
