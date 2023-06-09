import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from './Card';
import axios from 'axios';
import InfiniteScroll from "react-infinite-scroll-component";

const NewsArticles = ({ initialData }) => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // const [nextPage, setNextPage] = useState(initialData.nextPage);
  const [noOfPages, setNoOfPages] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [length, setLength] = useState(20);
  const [location, setLocation] = useState();

  useEffect(() => {
    if ('geolocation' in navigator) {
      // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
      navigator.geolocation.getCurrentPosition(function(position) {

        let lati = Math.trunc(position.coords.latitude);
        let long = Math.trunc(position.coords.longitude);
        setLocation({lati, long });
      });
    }
  }, []);



  useEffect(() => {
    if (initialData.data != undefined) {
      setArticles(initialData.data.data);
      setCurrentPage(initialData.data.nextPage);
    }
    handleClick();
  }, []);

  function FindUserLocation(){
    if(location && location.lati === 52 && location.long === 5){
      return "NL";
    }
    else{
      return "NotNL";
    }
  }

  async function handleClick() {
    try {
      const response = await axios.get(`https://es-backend.onrender.com/api/news/getNews/${currentPage}/${noOfPages}`);
      const newArticles = [...articles, ...response.data.data];
      setArticles(newArticles);
      setCurrentPage(response.data.nextPage);
      setLength(5 * noOfPages);
      setNoOfPages(2);
      if (!response.data.data.length) {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error loading next pages:', error);
    }
  }

  return (
    <Container>
      <div className='trending flex mb-5'>
        <h2>&#128293; LATEST NEWS</h2>
      </div>
      <div className='news-articles '>
        {FindUserLocation() === "NL" ?
          <>
            {articles.map((article, i) => (
              <Card article={article} key={i} />
            ))}
            {hasMore === true ?
              <div className='flex justify-center'>
                <button className='btn btn-outline btn-success ' onClick={handleClick}>Read More..</button> </div> : <div className='flex justify-center'>
                <h3 className="Justify-items-center">You reached the End of Articles.</h3>
              </div>
            }
          </>
          :
          <InfiniteScroll
            dataLength={length}
            next={handleClick}
            hasMore={hasMore}
            loader={<h3> Loading...</h3>}
            endMessage={<h4>Nothing more to show</h4>}
          >
            {articles.map((article, i) => (
              <Card article={article} key={i} />
            ))}
          </InfiniteScroll>
        }

      </div>

    </Container>
  )
};


export default NewsArticles;

const Container = styled.div`
  .trending{
    h2{
      font-weight: bolder;
      font-size: 1.5rem;
    }
  }`;
