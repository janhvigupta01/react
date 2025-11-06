/* eslint-disable react-refresh/only-export-components */

import React, { createContext } from "react";
import { useState } from "react";
import { food_items } from "../food";
export const dataContext = createContext();
const UserContext = ({ children }) => {
  let [cate, setCate] = useState(food_items);
  let [input, setInput] = useState("");
  let [showCart,setShowCart]=useState(false)
let data={
input,
setInput,
cate,
setCate,
showCart,
setShowCart
}
  return (
    <div>
      <dataContext.Provider value={data}>
        {children}
      </dataContext.Provider>
    </div>
  );
};

export default UserContext;








































// /* eslint-disable react-refresh/only-export-components */

// import React, { createContext } from "react";
// import { useState } from "react";
// import { food_items } from "../food";
// export const dataContext = createContext();
// const UserContext = ({ children }) => {
//   let [cate, setCate] = useState(food_items);
//   let [input, setInput] = useState("");

//   return (
//     <div>
//       <dataContext.Provider value={{ input, cate, setCate, setInput }}>
//         {children}
//       </dataContext.Provider>
//     </div>
//   );
// };

// export default UserContext;
