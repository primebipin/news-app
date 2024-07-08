import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

 import './newsItem.css'

const NewsItem = (props)=> {
   let { title, description, imageUrl, newsUrl, author, date, source,mode } = props;
   

   let myStyle= {
    color: props.mode==='dark'?'white':'black',
    backgroundColor: props.mode==='dark'?'#3e454e':'white'
 }

   return (
       <div className="my-3">
           <div className={`card`} style={myStyle}>
               <div style={{
                   display: 'flex',
                   justifyContent: 'flex-end',
                   position: 'absolute',
                   right: '0'
               }
               }> 
                   <span className= {`badge rounded-pill bg-${mode==='dark'?'the':'danger'}`}> {source} </span>
               </div>
               <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." />
               <div className="card-body" style={myStyle}>
                   <h5 className="card-title">{title}  </h5>
                   <p className="card-text">{description}</p>
                   <p className="card-text"><small className={`text-${myStyle}`}>By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                   <a rel="noreferrer" href={newsUrl} target="_blank" className={`btn btn-${mode==='dark'?'dark':'primary'}`}>Read More</a>
               </div>
           </div>
       </div>
   )

}

export default NewsItem