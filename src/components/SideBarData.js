import { useContext, useState } from 'react';
import {api } from '../api/api.js'
import { BusContext } from '../context/BusContext.jsx';
// const context = useContext(BusContext);
export const Data = [
  {
    name: "Operators",
    children: [
      {
        title: "Add operator",
        path: "addop",
      },
      {
        title: "Remove operator",
        path: "removeop",
      },
      {
        title: "View operator",
        path: "viewop",
      },
    ],
  },
  {
    name: "Students",
    children: [
      {
        title: "Add Student",
        path: "addst",
      },
      {
        title: "Remove Student",
        path: "removest",
      },
      {
        title: "View Student",
        path: "viewst",
      },
    ],
  },
  {
    name: "Profile",
    children: [
      {
        title: "My profile",
        path: "adpro",
      },
      {
        title: "Change Password",
        path: "chgpsswd",
      },
    ],
  },
];
export const Array = [
  {
    name: 234,
    students: 52,
    city: "Rajahmundry",
  },
  {
    name: 233,
    students: 57,
    city: "Kakinada",
  },
  {
    name: 232,
    students: 45,
    city: "Pithapuram",
  },
  {
    name: 236,
    students: 56,
    city: "Pithapuram",
  },
  {
    name: 237,
    students: 45,
    city: "Pithapuram",
  },
  {
    name: 239,
    students: 25,
    city: "Pithapuram",
  },
  {
    name: 240,
    students: 65,
    city: "Pithapuram",
  },
  {
    name: 334,
    students: 92,
    city: "Rajahmundry",
  },
  {
    name: 234,
    students: 68,
    city: "Rajahmundry",
  },
  {
    name: 234,
    students: 73,
    city: "Rajahmundry",
  },
  {
    name: 234,
    students: 89,
    city: "Rajahmundry",
  },
  {
    name: 265,
    students: 77,
    city: "Kakinada",
  },
  {
    name: 222,
    students: 67,
    city: "Kakinada",
  },
  {
    name: 289,
    students: 23,
    city: "Kakinada",
  },
  {
    name: 297,
    students: 78,
    city: "Kakinada",
  },
  {
    name: 322,
    students: 37,
    city: "Kakinada",
  }
];
export const CityLabels = [
  "Rajahmundry",
  "Kakinada",
  "Pitapuram",
  "Rayavaram",
  "Kesavaram",
];
export const CityData = [208, 308, 450, 257, 234];
export const StudentByBus = (num)=>{
  const [data, setData] = useState([]);
  try{
    api.get('/admin/stdbybus/'+num).then(res=>{
      setData(res.data);
    })
  }catch(err){
    console.log(err.response);
  }
  return data;
}


export const getTodayData = async()=>{
  try{
    return await api.get('/admin/getTodayData');
  }catch(err){
    console.log(err);
  }
}