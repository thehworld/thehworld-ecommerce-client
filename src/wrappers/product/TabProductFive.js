import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import ProductGridTwo from "./ProductGridTwo";
import { useEffect, useState } from "react";
import axios from "axios";
import { getAllCategories, getAllProductsFromCategory } from "../../apis/api";

const TabProductFive = ({
  spaceTopClass,
  spaceBottomClass,
  category,
  productTabClass
}) => {


  // All Categories
  const [allCategories, setallCategories] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);


  const getAllCategoryHandler = () => {
    setisLoading(true)  
    getAllCategories().then((res) => {
          if(res){
            setallCategories(res);
            setisLoading(false);  
          }
      }).catch((err) => {

      })
  }

  const [categoryIdForProductDetails, setcategoryIdForProductDetails] = useState([]);
  
  const [productDetails, setproductDetails] = useState([]);
  const getAProductDetails = (e, id) => {
        e.preventDefault();
        setcategoryIdForProductDetails(id);
        getAllProductsFromCategory(id).then((res) => {
              console.log("All Products From Category - ", res);
              setproductDetails(res);
        }).catch((err) => {
              console.log(err);
        })
  }


  useEffect(() => {
      getAllCategoryHandler()
  }, [])
  


  return (
    <div className={clsx("product-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <Tab.Container defaultActiveKey="bestSeller">
          <Nav
            variant="pills"
            className={clsx("product-tab-list-2 mb-60", productTabClass)}
          >
            {isLoading ? (
              <p>
                Loading ... 
              </p>
            ) : (
                <>
                {allCategories && allCategories.map((cate, index) => {
                    return(
                <Nav.Item onClick={(e) => getAProductDetails(e, cate._id)}>
                  <Nav.Link eventKey="newArrival">
                    <h4>{cate.categoryName}</h4>
                  </Nav.Link>
                </Nav.Item>
                    )
                })
                }
                </>
            )}
          
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="newArrival">
              <div className="row">
                <ProductGridTwo
                  category={category}
                  type="new"
                  limit={8}
                  spaceBottomClass="mb-25"
                  categoryProduct={productDetails}
                />
              </div>
            </Tab.Pane>
            
          </Tab.Content>
        </Tab.Container>
        <div className="view-more text-center mt-20 toggle-btn6 col-12">
          <Link
            className="loadMore6"
            to={process.env.PUBLIC_URL + "/shop-grid-standard"}
          >
            VIEW MORE PRODUCTS
          </Link>
        </div>
      </div>
    </div>
  );
};

TabProductFive.propTypes = {
  category: PropTypes.string,
  productTabClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default TabProductFive;
