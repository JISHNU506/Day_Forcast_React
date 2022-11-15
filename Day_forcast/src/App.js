import logo from './logo.svg';

import { useEffect,useState } from 'react';
import Mid from './Mid';
import Wtr from './Wtr';



function App() {
const [WhethData, setWhethData] = useState([])




  useEffect(() => {
    fetch("http://api.openweathermap.org/data/2.5/forecast?q=calicut&appid=3ef9508ade9f84ce48b23a883f7d96c6")
    .then(response=>response.json())
    .then((res)=>{
      console.log(res);
      const data=res.list.filter((item)=>{
        return item.dt_txt.includes("12:00:00")
      })
      setWhethData(data)
    })
    .catch("error")
  

  }, [])
  
  return (
  <>


<Wtr wdata={WhethData}/>
  
</>
  );
}

export default App;
