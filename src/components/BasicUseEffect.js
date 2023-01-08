import React, { useEffect, useState } from "react";

const BasicUseEffect = () => {
  const [count, setCounts] = useState(0);
  const [item, setItem] = useState("");
  useEffect(() => {
    console.log("useEffect invoked");
  }, [count]);
  return (
    <>
      <button onClick={() => setCounts((prev) => prev + 1)}>
        Click Me{count}
      </button>
      <input
        type="text"
        value={item}
        onChange={(event) => setItem(event.target.value)}
      />
    </>
  );
};

export default BasicUseEffect;
