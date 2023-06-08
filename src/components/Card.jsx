import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

export default function Card(article) {
  article = article.article;
  return (
    <CardStyle>
      <div className="es-article-block card card-side bg-base-50 ">
        <figure><Image src={article.image} alt="Image" /></figure>
        <div className="card-body col-span-2 " key={article.id}>
          <a href='#' className='text-left genre bg-black text-white '>{article.genre}</a>
          <h2 className="card-title ">{article.title}</h2>
          <p className='text-clip overflow-hidden'>{article.content}</p>
          <div className="card-actions justify-between">
            <h3 className='author'>{article.author}</h3>
            <h3 className='date'>{article.date}</h3>
          </div>
        </div>
      </div>
      <div className="divider divider-vertical"></div>
    </CardStyle>
  )
}

const CardStyle = styled.div`
  .es-article-block{
    justify-content: center;
    align-items: center;
    border-radius: 0;
    width: 100%;
    height: 100%;
    figure{
      img{
      width: 200px;
      height: 200px;
      transition: 0.3s all ease-in-out;
      overflow: hidden;
      &:hover{
        transition: 0.3s all ease-in-out;
      transform: scale(1.05);
      }
    }
    
  }
    .card-body{
      padding - left : 5px;
    .genre{
      width:70px;
    height: 20px;
    border-radius: 5px;
    }
    .card-actions{
      margin-top: 50px;
      .author{
      color:red;
    font-family: sans-mono;
      }
    .date{
      color:gray;
    font-family: sans-mono;
      }
  }
}`