import { useParams } from "react-router-dom";
import Cards from ".././Cards"; 
import productData from "../../data-files/PopularProductsData";

const Catagory_product_page = () => {
  const { category } = useParams();

  const filteredProducts = productData.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold capitalize mb-4">
        {category} Products
      </h1>

      <div className="container justify-center items-center flex flex-wrap gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <Cards
              key={index}
              imageSrc={product.image}
              discount={product.discount}
              title={product.name}
              description={product.description}
              rating={product.rating}
              prize={product.price}
              discountPrize={product.discountPrice}
            />
          ))
        ) : (
          <p className="text-gray-500 col-span-full">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Catagory_product_page;
