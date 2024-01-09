import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Button } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";


const ProductCard = ({ product, category, subcategory }) => {
  const { pathname } = useLocation();
  const { cartItems, addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  let path = "";
  if (subcategory) {
    path = `${product.productId}`;
  } else if (category === "allproducts") {
    path = `${category}/${product.shortDesc.split(" ")[0]}/${
      product.productId
    }`;
  } else if (category) {
    path = `${product.shortDesc.split(" ")[0]}/${product.productId}`;
  } else {
    navigate("/");
  }

  const handleAddToCart = () => {
    // Call the function from useCart to add the product to the cart
    // console.log("add to cart button clicked")
    // console.log("Adding to cart:", product);
    addToCart(product);
    // console.log("Cart after adding:", cartItems); // Make sure this log shows the updated cart
    // console.log("add to cart button clicked")
  };
  const maxLength=39;
  const prod=product.shortDesc;
  const sd=prod.length > maxLength ? `${prod.slice(0,maxLength)}...`:prod;
  
  

  return (
    <Card
     style={{ borderRadius: "10%", padding: 20, marginBottom: 20,textDecoration:"none",boxShadow:"0 13px 15px rgba(0,0,0,.10),0 0 10px rgba(0,0,0,.10)", height:"460px",width:"290" }}
     className="card">
      <Link to={`${pathname}/${path}`} state={{ product }}>
        <Card.Img
          variant="top"
          className="card-img"
          src={product.productImage[0]}
          alt={product.productImage}
          style={{ width: 230, height: 230,paddingLeft:"40px" }}
        />
      </Link>
      <Card.Title style={{ position: "absolute", top: 30, right: 30 }}>
        <FontAwesomeIcon
          icon={regularHeart}
          style={{ width: "30", height: "30" }}
        />
      </Card.Title>
      <Card.Body>
        <Card.Title>{sd}</Card.Title>
        <Card.Text>
        {product.discount > 0 ? (
            <div className="d-flex flex-row justify-content-start gap-2">
              <p style={{ fontWeight: "bold" }}>
                &#x20B9;{" "}
                {(
                  product.mrp -
                  product.mrp * (product.discount / 100)
                ).toFixed()}
              </p>
              <p style={{ textDecoration: "line-through" }}>
                M.R.P:{product.mrp}
              </p>
              <p style={{ color: "green",backgroundColor: "#ABEBC6",borderRadius:"5px",padding:"0px 5px" }}>{product.discount}% off</p>
            </div>
          ) : (
            <p style={{ fontWeight: "bold" }}>&#x20B9; {product.mrp}</p>
          )}
        </Card.Text>
        <Button className="rounded-lg bg-white w-100 " onClick={handleAddToCart}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "black",
              alignItems: "center",
              marginRight: "20px",
              marginLeft: "20px",
             
            }}
          >
            <div style={{ fontSize: 20, fontWeight: 800 }}>Add</div>
            <div>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;