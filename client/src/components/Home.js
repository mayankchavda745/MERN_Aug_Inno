import React,{useState,useEffect} from 'react';
import axios from 'axios';
let url;
const Home = () => {
    const [obj,setObj] = useState({
        flag:true,searchByName:'',searchByMarks:'',sortByName:'',sortByMark:'',data:[]
    });
    useEffect(()=>{
        url=`http://localhost:8000/home?searchByName=${obj.searchByName}&searchByMarks=${obj.searchByMarks}&
        sortByName=${obj.sortByName}&sortByMark=${obj.sortByMark}`
    },[obj.searchByMarks,obj.searchByName,obj.sortByMark,obj.sortByName])
    useEffect(()=>{
        axios.get(url).then(res=>{
            setObj(p=>({...p,data:res.data}));
        }).catch(err=>{
            alert(err.response.data.error)
        });
    },[obj.flag]);
  return (
    <>
        <h1>Header</h1><br/>
        searchByMarks:<input type='radio'/><br/>
        searchByName:<input type='radio'/><br/>
        <input type='text'/><br/>
        sortByMark:<input type='radio'/><br/>
        sortByName:<input type='radio'/><br/>
        <button>Go</button><br/>
        <button>Clear</button><br/>
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