import React from "react";

function DemoUseMemo() {
  // useMemo:
  // useMemo được sử dụng để tối ưu hóa việc tính toán lại giá trị của một biến hoặc một phần tử JSX
  // khi các dependencies của nó thay đổi. Nó có cú pháp như sau:
  // const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
  return (
    <div>
      <h3>Demo useMemo</h3>
    </div>
  );
}

export default DemoUseMemo;
