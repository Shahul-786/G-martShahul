import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

const SortBtn = ({selectedSortItem,handleDropdownSelect}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Dropdown onSelect={handleDropdownSelect}>
      <Dropdown.Toggle style={{backgroundColor: "white",color:"black",borderColor: isHovered ? 'blue' : 'lightblue',}} id="dropdown-basic" onMouseEnter={()=>setIsHovered(true)}
      onMouseLeave={()=>setIsHovered(false)} >
        Sort By : {selectedSortItem}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="Popularity">Popularity</Dropdown.Item>
        <Dropdown.Item eventKey="Price:High to Low">Price:High to Low</Dropdown.Item>
        <Dropdown.Item eventKey="Price:Low to High">Price:Low to High</Dropdown.Item>
        <Dropdown.Item eventKey="Discount">Discount</Dropdown.Item>
        <Dropdown.Item eventKey="All Products">All Products</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SortBtn;