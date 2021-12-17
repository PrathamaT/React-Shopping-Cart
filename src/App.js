import "./App.css";
import Nav from "./components/Nav/Nav";
import Panel from "./components/Panel/Panel";
import ProductsWrapper from "./components/ProductsWrapper/ProductWrapper";
import { useEffect, useState } from "react";
import useHttp from "./components/hooks/use-http";

function App() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const { error, sendRequest: fetchProducts } = useHttp();

  useEffect(() => {
    const transformProductsInfo = (productObject) => {
      const transformedData = productObject.articles.map((productData) => {
        return {
          id: productData.productId,
          title: productData.title,
          image: productData.images[0].url,
          oldPrice: productData.oldPrice
            ? productData.oldPrice.formatted
            : null,
          newPrice: productData.price.formatted,
          price: productData.price.amount,
          rating: productData.averageRating,
          shippingTime:
            productData.shippingTimeMin +
            "-" +
            productData.shippingTimeMax +
            " dagar",
        };
      });
      setProducts(transformedData);
      setAllProducts([...transformedData]);
    };

    fetchProducts(
      {
        url: "https://shop-bff.fyndiq.se/code-assignment/articles",
        headers: {
          market: "SE",
          locale: "sv-SE",
        },
      },
      transformProductsInfo
    );
  }, [fetchProducts]);

  const filterLessThanAmount = (amount) => {
    setProducts((products) =>
      products.filter((product) => product.price < amount)
    );
  };

  const removeFilter = () => {
    setProducts(allProducts);
  };

  const sortProducts = (condition) => {
    console.log("cond: ", condition);
    switch (condition) {
      case "most_relevant":
        removeFilter();
        break;
      case "most_expensive":
        setProducts((products) => [
          ...products.sort((p1, p2) => p2.price - p1.price),
        ]);
        break;
      case "least_expensive":
        setProducts((products) => [
          ...products.sort((p1, p2) => p1.price - p2.price),
        ]);
        break;
      case "highest_rated":
        setProducts((products) => [
          ...products.sort((p1, p2) => p2.rating - p1.rating),
        ]);
        break;
      case "lowest_rated":
        setProducts((products) => [
          ...products.sort((p1, p2) => p1.rating - p2.rating),
        ]);
        break;
      default:
        break;
    }
  };

  const searchByName = (name) => {
    setProducts(
      allProducts.filter(
        (product) => product.title.toLowerCase().indexOf(name) !== -1
      )
    );
  };

  return (
    <div className="App">
      <Nav searchByName={searchByName} />
      <Panel
        filterCheaperThan={filterLessThanAmount}
        removeFilter={removeFilter}
        sortProducts={sortProducts}
      />
      <ProductsWrapper products={products}></ProductsWrapper>
    </div>
  );
}

export default App;
