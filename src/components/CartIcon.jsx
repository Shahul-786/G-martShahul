import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Nav, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartIcon = () => {
  const { getTotalItems } = useContext(CartContext);

  return (
    <Nav.Link as={Link} to="/cart" className='position-relative'>
        <span>
      <FontAwesomeIcon icon={faShoppingCart} size="lg" />
     
      {getTotalItems() > 0 && (
        <Badge bg="primary" pill className="position-absolute top-0 start-50 translate-middle-y">
          {getTotalItems()}
        </Badge>
      )}
       </span>
    </Nav.Link>
  );
};

export default CartIcon;