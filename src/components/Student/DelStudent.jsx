import React,{useState} from 'react'
import {api} from '../../api/api.js'

const DelStudent = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [details, setDetails] = useState({firstname:'',lastname:'',rollno:''});

    const handleInputs = (e)=>{
      setSearchQuery(e.target.value);
      setDetails({
        firstname:'',
        lastname: '',
        rollno:'',
        cityName:'',
        busRoute:''

      })
    }

    const handleSearch = () => {
      api.get('/admin/getstudetails/'+searchQuery)
      .then(res=>{
          setDetails(res.data.student);
      }).catch((err)=>{
        console.log(err);
        alert('Student Not Found');
      })
    };

  const deleteStud = (id)=>{
    console.log(id);
    api.delete('/admin/deletestudent/'+id).then(res=>{
      alert('Success!!!!');
      setSearchQuery('');
      setDetails({
        firstname: "",
        lastname: "",
        rollno:'',
        cityName:'',
        busRoute:''
      })
    })
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
                <button 
                  className="bg-[#004466] text-white text-[15px] font-[poppins] rounded-md px-2 py-2"
                  onClick={handleSearch}> Search </button>
            </div>
      </div>

      { details.firstname.length>0 &&
        <div className='h-[200px] md:w-[350px] solid border p-2 border-slate-200 rounded-md w-full shadow-md'>
            <table className='h-[60%] w-full'>
                <tbody className='font-[poppins]'>
                    <tr>
                        <th>FirstName :</th>
                        <td className='font-[poppins]'>{details.firstname}</td>
                    </tr>
                    <tr>
                        <th>LastName :</th>
                        <td>{details.lastname}</td>
                    </tr>
                    <tr>
                        <th>Roll No. :</th>
                        <td>{details.rollno}</td>
                    </tr>
                    <tr>
                        <th>City :</th>
                        <td>{details.cityName}</td>
                    </tr>
                    <tr>
                        <th>BusRoute :</th>
                        <td>{details.busRoute}</td>
                    </tr>
                </tbody>
            </table>
            <div className='flex justify-center items-center mt-2'>
                <button onClick={()=>deleteStud(details.rollno)} className="bg-[#004466] text-white font-[poppins] rounded-md px-5 py-2">Delete</button>
            </div>
      </div>}

    </div>
  )
}

export default DelStudent