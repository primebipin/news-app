import React, { Component } from 'react'
// import { Link } from 'react-router-dom';

import NewsItem from './NewsItem'

import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {

   static defaultProps ={
         country : 'in',
         pageSize: 8,
         category: 'general',

   }

   static propTypes = {
         country : PropTypes.string,
         pageSize: PropTypes.number,
         category: PropTypes.string
   }

   capital =(string)=>{
      return string.charAt(0).toUpperCase() + string.slice(1);
   }

   constructor(props){
      super(props);
      this.state={
         articles: [],
         loading : false,
         page : 1,
         totalResults: 0,
          mode: 'light',
          hasMore : true
        

      }
      document.title = `${this.capital(this.props.category)} - NewMonkey`;
      this.toggleMode = this.toggleMode.bind(this);

   }
   

   toggleMode() {
      this.setState(prevState => ({
        mode: prevState.mode === 'light' ? 'dark' : 'light'
        
      }));
    }

   async componentDidMount(){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9cb1de8c9fa7477d934edbaf5fc368cf&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      this.fetchMoreData();
      let data =await fetch(url);
      let parsedData= await data.json();
      console.log(parsedData);
      this.setState({articles: parsedData.articles,
         totalResults:parsedData.totalResults,
      loading: false});
   }

   
  

   handlePreClick=async ()=>{
      console.log("pre");
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9cb1de8c9fa7477d934edbaf5fc368cf&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      let data =await fetch(url);
      let parsedData= await data.json();
      console.log(parsedData);
      this.setState({
         page: this.state.page-1,
         articles: parsedData.articles

      })

   }
   handleNextClick=async ()=>{
      console.log("next");
      if(!(this.state.page +1 > Math.ceil(this.state.totalResults/5))){
     
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9cb1de8c9fa7477d934edbaf5fc368cf&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;

      this.setState({loading:true});
      let data =await fetch(url);
      let parsedData= await data.json();
      console.log(parsedData);
      this.setState({
         page: this.state.page+1,
         articles: parsedData.articles,
         loading:false
      })
   }

   }

   fetchMoreData =async () => {
      this.setState({page: this.state.page+1})
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9cb1de8c9fa7477d934edbaf5fc368cf&page=1&pageSize=${this.props.pageSize}`;

      let data =await fetch(url);
      let parsedData= await data.json();
      console.log(parsedData);
      this.setState({articles: this.state.articles?.concat(parsedData.articles),
         totalResults:parsedData.totalResults,
      loading: false})
    };

   

  render() {
   const { mode } = this.state;
    return (
      <>
         <h1 className={`text-center  bg-${!mode}`} >NewsMonkey - {this.capital(this.props.category)} Top headLines </h1>
         {this.state.loading && <Spinner/>};

         <InfiniteScroll
          dataLength={this.state.articles?.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles?.length !== this.state.totalResults}
          loader={<Spinner className="my-3"/>}
        >
         <div className={`container container-${mode} bg-${!mode}`}>
         <div className="row md-3">
            {this.state.articles?.map((element)=>{
           return <div className="col-md-3"  key={element.url}>
           <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} mode = {mode}/>
           </div>
  })}
       
         </div>
         </div>
         
         </InfiniteScroll>
        
         {/* <div className="container d-flex justify-content-between">
      <button disabled={this.state.page<=1} type="button"  className="btn btn-dark " onClick={this.handlePreClick}> &larr; Previous</button>
      <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/5)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
      </div> */}
      </>
    )
  }
}

export default News
