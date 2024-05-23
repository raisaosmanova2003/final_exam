import React, { useContext } from 'react'
import MainContext from '../../../context/context'

const Basket = () => {
  const {basket, addToBasket,deleteFrombasket}=useContext(MainContext)
  return (
    <div>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Image</th>
      <th scope="col">Title</th>
      <th scope="col">Count</th>
      <th scope="col">Price</th>
      <th scope="col">Add</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
{
  basket.map((item,index)=>(
    <tr key={index}>
      <th scope="row">{index+1}</th>
      <td><img src={item.image} alt="" /></td>
      <td>{item.title}</td>
      <td>{item.count}</td>
      <td>{item.totalPrice}</td>
      <td><button onClick={()=>{addToBasket(item._id)}} className='btn btn-primary'>Add</button></td>
      <td><button onClick={()=>{deleteFrombasket(item._id)}} className='btn btn-danger'>Delete</button></td>
    </tr>
  ))
}
    
   
  </tbody>
</table>
    </div>
  )
}

export default Basket
