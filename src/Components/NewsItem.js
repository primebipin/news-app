import React, { Component } from 'react'

export class NewsItem extends Component {

   

  render() {
   let {title, description,imageUrl,newsUrl,author,date,source}=this.props;
    return (
   <div className='my-3'>
      <div className="card">
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger " style={{left:`90%`,zIndex:`1`}} >
          {source}
         </span>
         <img src={imageUrl?imageUrl:"https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg"} className="card-img-top" alt="..."/>
         <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-textZ">{description}</p>
            <p className='card-text'><small className='text-muted'>By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} className="btn btn-primary">Read more</a>
         </div>
      </div>
   </div>
      
    )
  }
}

export default NewsItem
