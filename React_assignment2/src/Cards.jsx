import React, { useState } from "react";
import CardsInfo from "./Cards.info";
import "font-awesome/css/font-awesome.min.css";
import { isElement } from "react-dom/test-utils";

function CardsMaker() {
  const result = CardsInfo.map((val) => (
    <>
      <div className="carditem" id="getjob">
        <div className="image">
          <img src={val.image} alt="card image" />
        </div>
        <div className="title">
          <h4>{val.title}</h4>
        </div>
        <div className="subtitle">
          <span className="auther">{val.author}</span>
          <span className="articledate"> | {val.publishedDate}</span>
        </div>
        <div className="cardtextcontent">
          <p>{val.description}</p>
        </div>
      </div>
    </>
  ));
  return result;
}

function Filter() {
  const [catState, setCatState] = useState();
  var result = [];
  function handelClick() {
    setCatState(catState=> !catState)
    let cat = document.querySelectorAll(".filterOption");
    cat.forEach((val, i) => {
      result.push(val);
    });
    result.forEach((e) => {
      if(catState){e.classList.value = "filterOption active"}
      else{ e.classList.value = "filterOption" }
    });
  }

  return (
    <>
      <div className="filter-head">Latest Posts</div>
      <div className="fa-solid fa-filter" id="filtericon"></div>
      <span className="filtercat"> Filter by Category</span>
      <div className="catagory-filter">
        <div className={`filterOption active`} onClick={handelClick}>
          All
        </div>
        <div className={`filterOption`} onClick={handelClick}>
          Artifitial Inteligence
        </div>
        <div className={`filterOption`} onClick={handelClick}>
          Cloud Computing
        </div>
        <div className={`filterOption`} onClick={handelClick}>
          DevOps
        </div>
        <div className={`filterOption`} onClick={handelClick}>
          Programming languages
        </div>
        <div className={`filterOption`} onClick={handelClick}>
          Mobile Application Development
        </div>
        <div className={`filterOption`} onClick={handelClick}>
          Technology and tools
        </div>
        <div className={`filterOption`} onClick={handelClick}>
          Get a Job in Tech Company
        </div>
        <div className={`filterOption`} onClick={handelClick}>
          Others
        </div>
      </div>
    </>
  );
}

const Cards = () => {
  return (
    <>
      <Filter />
      <div className="cardsHolder">
        <CardsMaker />
      </div>
    </>
  );
};

export default Cards;
