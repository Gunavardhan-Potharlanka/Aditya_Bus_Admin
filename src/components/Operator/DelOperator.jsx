import React,{useEffect, useState} from 'react'
import {api} from '../../api/api.js'

const DelOperator = () => {
    const [Data, setData] = useState([]);
    const [clicked, setClicked] = useState(false);
    const fetch = async()=>{
      try {
        await api.get('/admin/alloperators').then(res=>{
          // console.log(res.data);
          setData(res.data);
        })
        
      } catch (error) {
          console.log(error)
      }
    }
    useEffect(()=>{
      fetch();
    }, []);
    
    const [searchQuery, setSearchQuery] = useState('');
    const [details, setDetaisl] = useState({
      firstname: "",
      lastname: "",
      operator_id:"",
      phoneNumber: ""
    });
    const handleInputs = (e)=>{
      setSearchQuery(e.target.value);
      setDetaisl({
        firstname: "",
        lastname: "",
        operator_id:"",
        phoneNumber: ""
      })
    }
  const handleSearch = () => {
    api.get('/op/getOp/'+searchQuery).then(res=>{
        setDetaisl(res.data.operator);
    }).catch((err)=>{
      alert('Operator not found');
    })
  };
  const deleteOp = async(id)=>{
    console.log(id);
    await api.delete('/op/delOp/'+id).then(res=>{
      alert('Success!!!!');
      setSearchQuery('');
      setDetaisl({
        firstname: "",
        lastname: "",
        operator_id:"",
        phoneNumber: ""
      })
    })
    window.location.reload();
  }
  const handleTabledelete = (id)=>{
    setClicked(!clicked);
    deleteOp(id);
  }
  return (
    <div className='h-full w-full px-5 flex flex-col gap-5 justify-center items-center'>
      <div className='w-full flex justify-center gap-2'>
            <input type="text"
                    className="md:max-w-[280px] w-full flex-1 font-[poppins] solid border rounded-md shadow-md px-4 py-2  outline-none "
                    value={searchQuery}
                    onChange={(e) => handleInputs(e)}
                    placeholder="Search ..."
            />
            <div>
                <button  className="bg-[#004466] text-white text-[15px] font-[poppins] rounded-md px-2 py-2" onClick={handleSearch}>Search</button>
            </div>
      </div>
      
      { details.firstname.length>0 &&
        <div className='h-[200px] md:w-[350px] solid border p-2 border-slate-200 rounded-md w-full shadow-md'>
            <table className='h-[60%] w-full'>
                <tbody className='font-[poppins]'>
                    <tr>
                        <th>Name :</th>
                        <td className='font-[poppins]'>{details.firstname} {details.lastname}</td>
                    </tr>
                    <tr>
                        <th>Op Id:</th>
                        <td>{details.operator_id}</td>
                    </tr>
                    <tr>
                        <th>Mobile :</th>
                        <td>{details.phoneNumber}</td>
                    </tr>
                </tbody>
            </table>
            <div className='flex justify-center items-center mt-5'>
                <button onClick={()=>deleteOp(details.operator_id)} className="bg-[#004466] text-white font-[poppins] rounded-md px-5 py-2">Delete</button>
            </div>
      </div>}
      {Data.length>0 && <table className='solid border rounded-md' cellPadding={7}>
                  <tr className='border'>
                    <th>S.No</th>
                    <th>Operator Id</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Actions</th>
                    <th></th>
                  </tr>

                  {
        
                    Data.map((item,ind)=>{
                      return <tr key={ind} className='text-center'>
                        <td>{ind+1}</td>
                        <td>{item.operator_id}</td>
                        <td>{item.firstname}</td>
                        <td>{item.lastname}</td>
                        <td><button onClick={()=>handleTabledelete(item.operator_id)} className="bg-[#004466] text-white font-[poppins] rounded-md px-3 py-1">Delete</button></td>
                      </tr>
                    })
                  }
              </table>}
      
    </div>
  )
}

export default DelOperator