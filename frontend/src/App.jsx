import { useEffect, useState } from "react";
import "./App.css";
import ROUTES from "./routes/routes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContext from "./context/context";
import { HelmetProvider } from "react-helmet-async";
import axios from "axios";
function App() {
  const [data, setData] = useState([]);
  const [orginal, setOrginal] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const router = createBrowserRouter(ROUTES);
  const [basket, setBasket] = useState(
    localStorage.getItem("basket")
      ? JSON.parse(localStorage.getItem("basket"))
      : []
  );
 
  useEffect(() => {
    axios.get("http://localhost:8080/api/products").then((res) => {
      setData([...res.data]);
      setOrginal(res.data);
    });
  }, []);
  
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  function addToBasket(id) {
    let basketItem = basket.find((x) => x._id == id);
    if (!basketItem) {
      let target = data.find((x) => x._id == id);
      let newItem = {
        ...target,
        count: 1,
        totalPrice: target.price,
      };
      setBasket([...basket, newItem]);
    } else {
      basketItem.count += 1,
        basketItem.totalPrice += basketItem.price,
        setBasket([...basket]);
    }
  }
  function deleteFrombasket(id) {
    let target = basket.find((x) => x._id == id);
    console.log(target);
    if (target.count > 1) {
      target.count -= 1, 
      target.totalPrice -= target.price;
      setBasket([...basket]);
    } else {
      setBasket([...basket.filter((x) => x._id != id)]);
    }
  }

  function addToWishlist(favorities) {
    const target = wishlist.find((x) => x._id == favorities._id);
    if (target) {
      alert("elave olunub");
    } else {
      setWishlist([...wishlist, favorities]);
      alert("elave olundu");
    }
  }
  function deleteFromWishlist(product) {
    const target = wishlist.find((x) => x._id == product._id);
    wishlist.splice(wishlist.indexOf(target), 1);
    setWishlist([...wishlist]);
  }

  // function searchData (searchvalue) {
  //   if (searchvalue = " ") {
  //     setData([...orginal]);
  //   } else {
  //     setData([
  //       ...orginal.filter((x) =>
  //         x.title
  //           .trim()
  //           .toLowerCase()
  //           .includes(searchvalue.trim().toLowerCase())
  //       ),
  //     ]);
  //   }
  // };

  function searchData (e){
    const searching=e.target.value.trim().toLowerCase();
    if(searching==""){
      setData([...orginal]);
    } else {
const search=data.filter((x)=>x.name.trim().toLowerCase().includes(searching))
setData([...search])
    }
  }
    function sortingData (e) {
    const sorting = e.target.value;
    if (sorting == "default") {
      setData([...orginal]);
    } else if (sorting == "A-Z") {
      const sortAZ = data.sort((a, b) => a.title.localeCompare(b.title));
      setData([...sortAZ]);
    } else if (sorting == "Z-A") {
      const sortZA = data.sort((a, b) => b.title.localeCompare(a.title));
      setData([...sortZA]);
    } else if (sorting == "0-9") {
      const sort09 = data.sort((a, b) => a.price - b.price);
      setData([...sort09]);
    } else if (sorting == "9-0") {
      const sort90 = data.sort((a, b) => b.price - a.price);
      setData([...sort90]);
    }
  };

  const contextdata = {
    data,
    setBasket,
    basket,
    setData,
    addToBasket,
    deleteFrombasket,
    addToWishlist,
    deleteFromWishlist,
    searchData,
    sortingData,
  };
  return (
    <MainContext.Provider value={contextdata}>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </MainContext.Provider>
  );
}

export default App;




