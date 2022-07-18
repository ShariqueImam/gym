import React from "react";
import { MainHeading } from "../UI/Heading";
const Food = ({auto}) => {
  const style = {
    wrapper: "w-[90%] md:w-[32%] lg:w-[25%] mx-auto",
    container: "flex flex-wrap gap-4",
    item:`  px-4 py-1 transition duration-[200ms] border-2 border-transparent 
    ${auto ? 'bg-neutral-900 text-gray-500':'hover:border-orange-600  hover:bg-neutral-700 cursor-pointer bg-neutral-700 text-gray-200'} `,
    heading:'text-3xl text-gray-200 my-8'
  };
  return (
    <div className={style.wrapper}>
      <h2 className={style.heading}>Veggies</h2>
      <div className={style.container}>
        <p className={style.item}>Broccoli</p>
        <p className={style.item}>Cauliflower</p>
        <p className={style.item}>Onion</p>
        <p className={style.item}>Bell pepper</p>
        <p className={style.item}>Eggplant</p>
        <p className={style.item}>Cabbage</p>
        <p className={style.item}>Asparagus</p>
        <p className={style.item}>Spinach</p>
        <p className={style.item}>Cucumber</p>
        <p className={style.item}>Tomato</p>
      </div>
      <h2 className={style.heading}>Cereals</h2>
      <div className={style.container}>
        <p className={style.item}>Rice</p>
        <p className={style.item}>Quinoa</p>
        <p className={style.item}>Couscous</p>
        <p className={style.item}>Buckwheat</p>
        <p className={style.item}>Millet groats</p>
        <p className={style.item}>Amaranth</p>
        <p className={style.item}>Semolina</p>
        <p className={style.item}>Cornmeal</p>
        <p className={style.item}>Bulgur</p>
      </div>
      <h2 className={style.heading}>Ingredients</h2>
      <div className={style.container}>
        <p className={style.item}>Avocado</p>
        <p className={style.item}>Beans</p>
        <p className={style.item}>Eggs</p>
        <p className={style.item}>Mushrooms</p>
        <p className={style.item}>Cottage cheese</p>
        <p className={style.item}>Milk</p>
        <p className={style.item}>Tofu</p>
        <p className={style.item}>Hummus</p>
        <p className={style.item}>Plant milk</p>
        <p className={style.item}>Protein powder</p>
      </div>
      <h2 className={style.heading}>Meat & Fish (Optional)</h2>
      <div className={style.container}>
        <p className={style.item}>Beef</p>
        <p className={style.item}>Turkey</p>
        <p className={style.item}>Chicken</p>
        <p className={style.item}>Seafood</p>
        <p className={style.item}>Fish</p>
      </div>
      <h2 className={style.heading}>Fruit & Berries (Optional)</h2>
      <div className={style.container}>
        <p className={style.item}>Сitrus</p>
        <p className={style.item}>Apple</p>
        <p className={style.item}>Pear</p>
        <p className={style.item}>Kiwi</p>
        <p className={style.item}>Bananas</p>
        <p className={style.item}>Persimmon</p>
        <p className={style.item}>Peach</p>
        <p className={style.item}>Berries</p>
        <p className={style.item}>Grape</p>
      </div>
    </div>
  );
};

export default Food;
