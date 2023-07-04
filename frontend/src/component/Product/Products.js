import React, { Fragment, useEffect } from "react";
import "./Products.css";
import { useParams } from "react-router-dom";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";

const Products = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { products, loading, error, productsCount } = useSelector(
    (state) => state.products
  );

  const keyword = params.keyword;
  useEffect(() => {
    dispatch(getProduct(keyword));
  }, [dispatch, keyword]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <h2 className="ProductsHeading  ">Products</h2>
          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
