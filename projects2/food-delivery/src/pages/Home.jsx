import React , {useContext} from "react";
import Nav from "../components/Nav";
import Categories from "../Category";
import Card from "../components/Card";
import { food_items } from "../food";
import { dataContext } from "../context/UserContext";
import { RxCross2 } from "react-icons/rx";
import Card2 from "../components/Card2";
const Home = () => {
  let {cate,setCate,input,showCart,setShowCart}=useContext(dataContext)

  function filter(category){
    if(category==="All"){
      setCate(food_items)
    }else{
      let newList = food_items.filter((item)=>(item.food_category===category))
      setCate(newList)
    }
  }
  let items-useSelector(state=>)
  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Nav />
      {!input? <div className="flex flex-wrap justify-center items-center gap-5 w-full">
        {Categories.map((item) => {
          return (
            <div className="w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl
             hover:bg-green-200 cursor-pointer transition-all duration-200" onClick={()=>filter(item.name)}>
              {item.icon}
              {item.name}
            </div>
          );
        })}
      </div>:null}
     
      <div className=" w-full flex px-5 flex-wrap gap-5 items-center justify-center pt-8 pb-8">
        {cate.map((item) => (
          <Card
            key={item.id}
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            type={item.food_type}
          />
        ))}
      </div>
      <div className={`w-full md:w-[40vw] h-full fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 ${showCart?"translate-x-0":"translate-x-full"}`}>
        <header className="w-full flex justify-between items-center">
        <span className="text-green-400 text-[18px] font-semibold ">Order items</span>
        <RxCross2 className=" w-[30px] h-[30px] text-green-400 text-[18px] font-semibold cursor-pointer hover:text-gray-600 " onClick={()=>setShowCart(false)} />
        </header>
        <Card2/>
      </div>
    </div>
  );
};

export default Home;
