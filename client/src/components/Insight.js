import React,{useEffect,useState} from 'react'
import axios from 'axios';
const Insight = () => {
    const [data,setData] = useState({
        topScorrer:[],highScorrer:0,mediumScorrer:0,lowScorrer:0,
        s1_100:[],s2_100:[],s3_100:[]
    });
    useEffect(()=>{
        axios.get('http://localhost:8000/insight').then(res=>{
            setData({topScorrer:res.data.topScorrer,highScorrer:res.data.highScorrer,mediumScorrer:res.data.mediumScorrer,lowScorrer:res.data.lowScorrer
            ,s1_100:res.data.s1_100,s2_100:res.data.s2_100,s3_100:res.data.s3_100});
        }).catch(err=>{
            alert(err.response.data)
        })
    },[]);
  return (
    <>
    <h1>TopScorrer</h1><br/>
    <p>---------------------</p>
    {data.topScorrer.map((d,i)=><div key={i}>
        Name:{d.name} || s1:{d.s1} || s2:{d.s2} || s3:{d.s3} || total:{d.total}
    </div>)}
    <p>---------------------</p>
    <h4>HighScoreCount:</h4>{data.highScorrer}<br/>
    <h4>mediumScoreCount:</h4>{data.mediumScorrer}<br/>
    <h4>lowScoreCount:</h4>{data.lowScorrer}<br/>
    <p>---------------------</p>
    <h4>S1_100's:</h4><br/>
    {data.s1_100.map((d,i)=><p key={i}>{d}</p>)}<br/>
    <h4>S2_100's:</h4><br/>
    {data.s2_100.map((d,i)=><p key={i}>{d}</p>)}<br/>
    <h4>S3_100's:</h4><br/>
    {data.s3_100.map((d,i)=><p key={i}>{d}</p>)}<br/>
    <p>---------------------</p>
    </>
  )
}

export default Insight