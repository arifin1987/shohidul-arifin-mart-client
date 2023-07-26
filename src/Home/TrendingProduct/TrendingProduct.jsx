

const TrendingProduct = ({item}) => {
    const{image,name,_id,quantity,price}= item;
    return (
        <div>
            <img src={image} alt="" />
            <h1>{name}</h1>
            <p>{quantity}</p>
            <p>{price}</p>
            <button className=" btn border-sky-500">Add to Cart</button>
            
        </div>
    );
};

export default TrendingProduct;