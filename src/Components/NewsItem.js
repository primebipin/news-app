import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


// import './App.css'
export class NewsItem extends Component {


  render() {
   let {title, description,imageUrl,newsUrl,author,date,source,mode}=this.props;
    return (
   <div className='my-3'>
      <div className={` ${mode==='light'?'dark':'light'} `}>
      <div className={`absolute right-0 top-0 rounded-lg bg-red-500 px-2 py-1 text-sm font-semibold ${mode==='dark'?'dark':'light'}`}>
          {source}
        </div>
         <img src={imageUrl?imageUrl:"https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg"} className="card-img-top" alt="..."/>
         <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-textZ">{description}</p>
            <p className="card-text"><small className={mode==='dark'?'dark':'light'}>By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl}   className={`btn btn-primary`}>Read more</a>
         </div>
      </div>
   </div>
      
    )
  }
}


export default NewsItem