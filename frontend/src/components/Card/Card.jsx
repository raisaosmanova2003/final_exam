import React, { useContext, useEffect, useState } from 'react'
import './Card.css'
import {useParams } from 'react-router-dom';
import MainContext from '../../context/context'
import axios from 'axios';
import { Link } from 'react-router-dom'
const Card = () => {
const [data,setData]=useState([])
const {id}=useParams()
const {addToBasket,addToWishlist,searchData,sortingData}=useContext(MainContext)

useEffect(()=>{
    axios.get('http://localhost:8080/api/products').then((res)=>{
        setData([...res.data])
    }).catch((err)=>{
        console.log("error")
    })
},[])

  return (
    <section className='vinesco_card'>
    <select name="" id="" onChange={sortingData}>
        <option value="default">default</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
        <option value="0-9">0-9</option>
        <option value="9-0">9-0</option>
      </select>
      <input type="text" name="" id="" placeholder='search' onChange={searchData}/>


      <div className="vinesco_cards">
      
      {/* {
        data.map((item,index)=>(
            <div key={index} className="vines_card">
            <div className="vines_card_img">
                <img src={item.image} alt="" />
            </div>
            <div className="vines_card_title">
                <h3>{item.title}</h3>
                <span>${item.price}</span> <br />
                <div className="vines_card_title_btn">
                <button className='add' onClick={()=>{addToBasket(item._id)}} >Add To Card</button>
                <button className='wish' > <i  onClick={()=>{
            addToWishlist(item)
          }} class="fa-solid fa-heart"></i></button>
          <Link to={`/detail/${item._id}`}><button>Detail</button></Link>
                </div>
                
            </div>
        </div>
        ))
      } */}
        
        {
          data.map((item,index)=>(
          <div key={index}>
            <img src={item.image}alt="" />
            <button onClick={()=>{addToBasket(item._id)}}></button>
            <button onClick={()=>{addToWishlist(item)}}></button>
           <Link to={`/detail/${item._id}`}> <button> detail</button></Link>
          </div>
          ))
        }
      </div>
    </section>
  )
}

export default Card
