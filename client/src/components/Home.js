import React,{useState,useEffect} from 'react';
import axios from 'axios';
let url;
const Home = () => {
    const [obj,setObj] = useState({
        flag:true,searchByName:'',searchByMarks:'',sortByName:'',sortByMark:'',data:[]
        ,choose:''
    });
    useEffect(()=>{
        url=`http://localhost:8000/home?searchByName=${obj.searchByName}&searchByMarks=${obj.searchByMarks}&sortByName=${obj.sortByName}&sortByMark=${obj.sortByMark}`
        console.log({mark:obj.sortByMark,name:obj.sortByName,sName:obj.searchByName,smark:obj.searchByMarks});
    },[obj.searchByMarks,obj.searchByName,obj.sortByMark,obj.sortByName])
    useEffect(()=>{
        console.log({url})
        axios.get(url).then(res=>{
            setObj(p=>({...p,data:res.data,searchByMarks:'',searchByName:'',sortByMark:'',sortByName:'',choose:''}));
        }).catch(err=>{
            alert(err.response.data.error)
        });
    },[obj.flag]);
    const handleGo = (e) => {
        e.preventDefault();
        setObj({...obj,flag:!obj.flag});
    } 
    const handleClear = (e) => {
        e.preventDefault();
        setObj({...obj,searchByMarks:'',searchByName:'',sortByMark:'',sortByName:'',choose:''});
    }
    const handleSearch = (e) => {
        setObj({...obj,choose:e.target.value});
    }
    const handleRadio = (e) => {
        setObj({...obj,sortByMark:e.target.value});
    }
    const handleRadio1 = (e) => {
        setObj({...obj,sortByName:e.target.value}); 
    }
    const handleChange = (e) => {
        setObj({...obj,[e.target.name]:e.target.value});
    }
   
  return (
    <>
        <h1>Header</h1><br/>
        searchByMarks:<input type='radio' value='mark' checked={obj.choose==='mark'} onChange={handleSearch}/><br/>
        searchByName:<input type='radio' value='name' checked={obj.choose==='name'} onChange={handleSearch}/><br/>
        {obj.choose==='mark' && <input type='text' name='searchByMarks' value={obj.searchByMarks} onChange={handleChange}/>}
        {obj.choose==='name' && <input type='text' name='searchByName' value={obj.searchByName} onChange={handleChange}/>}<br/>
        <p>-----------------------</p>
        sortByMark:ASC<input type='radio' checked={obj.sortByMark==='ASC'} value='ASC' onChange={handleRadio}/>
        DESC<input type='radio' value='DESC' checked={obj.sortByMark==='DESC'} onChange={handleRadio}/><br/>
        <p>-----------------------</p>
        sortByName:ASC<input type='radio' checked={obj.sortByName==='ASC'} value='ASC' onChange={handleRadio1}/>
        DESC<input type='radio' checked={obj.sortByName==='DESC'}  value='DESC' onChange={handleRadio1}/><br/>
        <p>-----------------------</p>
        <button onClick={handleGo}>Go</button><br/>
        <button onClick={handleClear}>Clear</button><br/>
        <p>-----------------------</p>
        <table>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>S1</td>
                    <td>s2</td>
                    <td>s3</td>
                    <td>Total</td>
                </tr>
            </thead>
            <tbody>
                {obj.data.map((d,i)=><tr key={i}>
                    <td>{i+1}</td>
                    <td>{d.name}</td>
                    <td>{d.s1}</td>
                    <td>{d.s2}</td>
                    <td>{d.s3}</td>
                    <td>{d.total}</td>
                </tr>)}
            </tbody>
        </table>

    </>
  )
}

export default Home