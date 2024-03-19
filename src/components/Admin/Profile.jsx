import React from 'react'
import { useEffect } from 'react'
import { api } from '../../api/api'
import { useState } from 'react'
const Profile = () => {
    const [data, setData] = useState({});
    const decodeJwt = (token) => {
        if (!token) {
          console.error('No JWT token provided');
          return null;
        }
      
        try {
          const base64Url = token.split('.')[1];
          const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) =>
            '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
          ).join(''));
      
          return JSON.parse(jsonPayload);
        } catch (error) {
          console.error('Error decoding JWT token:', error);
          return null;
        }
      };
      const token = localStorage.getItem('ZyklonX_PhaseDoom').split(' ')[1];
      const decodedToken = decodeJwt(token);
      let userid = decodedToken.id;
    const getDetails = ()=>{
        api.get('/admin/profile/'+userid).then(res=>{
            // console.log(res.data);
            setData(res.data);
        })
    }
    useEffect(()=>{
        getDetails();
    },[])
  return (
    <div>
        <table border={2} cellPadding={1} cellSpacing={5}>
              <tr>
                <th>1</th>
                <th>FirstName :</th>
                 <td>{data.firstName}</td>
              </tr>
              <tr>
                <th>2</th>
                <th>LastName :</th>
                 <td>{data.lastName}</td>
              </tr>
              <tr>
                <th>3</th>
                <th>Mobile No. :</th>
                 <td>{data.phoneNumber}</td>
              </tr>
        </table>
   </div>
  )
}

export default Profile
