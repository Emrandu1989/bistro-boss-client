

const FoodCard = ({item}) => {
    const {recipe, name,  image,price, _id} = item
    return (
        <>
            <div className="card relative bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
   <p className="absolute top-0 right-5 text-white px-2 rounded-md bg-slate-900">${price}</p>
  <div className="card-body flex flex-col items-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline  bg-slate-100 border-0 border-b-4 mt-4 border-orange-400">Add To Cart</button>
    </div>
  </div>
</div>   
        </>
    );
};

export default FoodCard;