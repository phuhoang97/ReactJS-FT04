// rfce

import React, { useContext } from "react";
import "./ParentContext.css";
import { themeContext } from "./ParentContext";

function CompC() {
  const theme = useContext(themeContext);
  return (
    <div>
      <p className={theme}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
        repellat, magni ipsam doloremque eius optio recusandae beatae
        necessitatibus fuga, repudiandae consequuntur harum animi voluptas?
        Optio aut perferendis iste odit rem.
      </p>
    </div>
  );
}

export default CompC;
