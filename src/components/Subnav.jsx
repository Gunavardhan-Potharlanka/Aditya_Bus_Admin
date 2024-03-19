// import React from "react";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// const Subnav = ({ item }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [opacity, setOpacity] = useState(100);
//   return (
//     <div
//       className={`m-1 text-white cursor-pointer`}
//       onClick={() => setIsOpen(!isOpen)}
//       onMouseOver={() => setOpacity(50)}
//       onMouseOut={() => setOpacity(100)}
//     >
//       <h1 className={`p-2 text-[18px] rounded-[10px] bg-white-${opacity}`}>
//         {item.name}
//       </h1>
//       {isOpen && (
//         <div className="mt-1">
//           <hr />
//           {item.children.map((it, ind) => {
//             return (
//               <div className={`pt-2 px-5`} key={ind}>
//                 <Link to={it.path}>
//                   <p>{it.title}</p>
//                 </Link>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Subnav;


import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BusContext } from "../context/BusContext";
const Subnav = ({ item, ind }) => {
  const context = useContext(BusContext);
  const [isOpen, setIsOpen] = useState(true);
  const [isClicked, setClicked] = useState(false);
  useEffect(() => {
    setClicked(true);
    setIsOpen(ind == context.index);
  }, [context.index]);
  const HandleClick = () => {
    setClicked(!isClicked);
    context.setIndex(ind);
  };
  return (
    <div className={`m-1 text-white cursor-pointer`} onClick={HandleClick}>
      <h1 className={`p-2 text-[18px] rounded-[10px]`}>{item.name}</h1>
      {isOpen && isClicked && (
        <div className="mt-1">
          <hr />
          {item.children.map((it, ind) => {
            return (
              <div className={`pt-2 px-1.5`} key={ind}>
                <Link to={it.path}>
                  <p>{it.title}</p>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Subnav;