import React,{useState} from 'react'
const DelStudent = () => {
    const [searchQuery, setSearchQuery] = useState('');
//     const [data, setData] = useState({});

//   const fetchData = async () => {
//     // Fetch data from backend using searchQuery
//     // For demonstration, I'm using a placeholder URL
//     const response = await fetch(https://api.example.com/data?search=${searchQuery});
//     const jsonData = await response.json();
//     setData(jsonData); // Update data state with fetched data
//   };

  const handleSearch = () => {
    fetchData(); // Call fetchData when search button is clicked
  };
  const details = {
    "firstname": "Ramya Sri",
    "lastname": "Rayudu",
    "rollno": "21A91A05I1",
    "college": "AEC",
    "branch": "CSE",
    "year": 3,
    "semester": 6,
    "passout": 2025,
    "email": "21A91A05I1@aec.edu.in",
    "phoneNumber": "8096199515",
    "cityName": "Oobalanka",
    "busRoute": "Ravulapalem",
    "feePaid": false,
    "isBusCanceled": false,
  }
  return (
    <div className='h-full w-full px-5 flex flex-col gap-5 justify-center items-center'>
      <div className='w-full flex justify-center gap-2'>
            <input type="text"
                    className="md:max-w-[280px] w-full flex-1 font-[poppins] solid border rounded-md shadow-md px-4 py-2  outline-none "
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search ..."
            />
            <div>
                <button  className="bg-[#004466] text-white text-[15px] font-[poppins] rounded-md px-2 py-2" onClick={handleSearch}>Search</button>
            </div>
      </div>

      <div className='h-[250px] md:w-[350px] solid border p-2 border-slate-200 rounded-md w-full shadow-md'>
            <table className='h-[70%] w-full'>
                <tbody className='font-[poppins]'>
                    <tr>
                        <th>Name :</th>
                        <td className='font-[poppins]'>{details.firstname+" "+details.lastname}</td>
                    </tr>
                    <tr>
                        <th>RollNo :</th>
                        <td>{details.rollno}</td>
                    </tr>
                    <tr>
                        <th>City :</th>
                        <td>{details.cityName}</td>
                    </tr>
                    <tr>
                        <th>Route :</th>
                        <td>{details.busRoute}</td>
                    </tr>
                </tbody>
            </table>
            <div className='flex justify-center items-center mt-5'>
                <button  className="bg-[#004466] text-white font-[poppins] rounded-md px-5 py-2">Delete</button>
            </div>
      </div>

    </div>
  )
}


export default DelStudent