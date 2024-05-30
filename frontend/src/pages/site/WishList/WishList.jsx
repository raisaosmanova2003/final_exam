import React, { useContext } from 'react'
import MainContext from '../../../context/context'

const WishList = () => {
    const {WishList,deleteFromWishlist}=useContext(MainContext)
  return (
    <div>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Image</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
  {
  WishList.map ((item,index)=>(
    <tr key={index}>
      <th scope="row">{index+1}</th>
      <td><img width={"80px"} src={item.image} alt="" /></td>
      <td>{item.title}</td>
      <td>{item.price}</td>
      <td><i onClick={()=>{deleteFromWishlist(item)}} className="fa-solid fa-trash"></i></td>
    </tr>
))
  }
    
    
  </tbody>
</table>
    </div>
  )
}

export default WishList
