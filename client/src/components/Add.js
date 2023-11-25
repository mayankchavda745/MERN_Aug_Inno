import React,{useState} from 'react';
import axios from 'axios';

const Add = () => {
    const [form,setForm] = useState({
        name:'',s1:null,s2:null,s3:null,total:null
    });
    const handleChange = (e) => {
        setForm({...form,[e.target.name]:e.target.value});
    }
    const handleAdd = (e) => {
        e.preventDefault();
        const {name,s1,s2,s3,total} = form;
        axios.post('http://localhost:8000/add',{name,s1,s2,s3,total}).then(res=>{
            alert(res.data);
            setForm({name:'',s1:0,s2:0,s3:0,total:0});
        }).catch(err=>{
            alert(err.response.data.error);
        });
    }
  return (
    <>
        Name:<input name='name' type='text' value={form.name} onChange={handleChange}/><br/>
        S1:<input name='s1' type='number' value={form.s1} onChange={handleChange}/><br/>    
        S2:<input name='s2' type='number' value={form.s2} onChange={handleChange}/><br/>    
        S3:<input name='s3' type='number' value={form.s3} onChange={handleChange}/><br/>
        Total:<input name='total' type='text' value={form.total} onChange={handleChange}/><br/>
        <button onClick={handleAdd}>Add</button>    
    </>
  )
}

export default Add