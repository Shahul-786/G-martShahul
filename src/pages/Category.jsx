import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useParams, useLocation } from "react-router-dom";
import { Container, Row, Col,Image } from "react-bootstrap";
import BreadCrumbs from "../components/BreadCrumbs";
import CategoryAccordions from '../components/CategoryAccordions';
import SortBtn from "../components/SortBtn";
import {categoryBannerAdImagedata} from '../utils/adimage/categorybanneradimage';

const Category = ({ products }) => {
  const [showdata, setShowdata] = useState([]);

  //sortbtn
  const [selectedSortItem, setSelectedSortItem] = useState("Discount");
  const handleDropdownSelect = (selected) => {
    setSelectedSortItem(selected);
  };
  console.log("selectedSortItem", selectedSortItem);

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const { category } = useParams();
  console.log("category : ", category);
  console.log("products : ", products);
  //breadcrumbs
  const { pathname } = useLocation();
  console.log("pathname", pathname);
  const titles = pathname.split("/");
  console.log("titles", titles);
  const mainTitle = titles[1];
  const mainUrl = "/" + titles[1];
  console.log("mainTitle", mainTitle);
  console.log("mainUrl", mainUrl);
  const catTitle = titles[2];
  const catUrl = pathname;
  console.log("catTitle", catTitle);
  console.log("catUrl", catUrl);

  let filteredProducts;
  if (category === "ApplePears") {
    // Check if 'apples' and 'pears' properties exist in the products object
    if (products && products.apples && products.pears) {
      filteredProducts = [...products.apples, ...products.pears];
    } else {
      console.error("Products data is incomplete.");
      return <div>Error loading products.</div>;
    }
  } else if (category === "AvacadoPeachPlum") {
    // Check if 'avocados','nectarines','peaches properties exist in the products object
    if (
      products &&
      products.avacados &&
      products.peaches &&
      products.nectarines
    ) {
      filteredProducts = [
        ...products.avacados,
        ...products.peaches,
        ...products.nectarines,
      ];
    } else {
      console.error("Products data is incomplete.");
      return <div>Error loading products.</div>;
    }
  } else if (category === "BananaMelonCoconut") {
    // Check if 'bananas','coconuts','melons properties exist in the products object
    if (products && products.coconuts && products.melons && products.bananas) {
      filteredProducts = [
        ...products.coconuts,
        ...products.melons,
        ...products.bananas,
      ];
    } else {
      console.error("Products data is incomplete.");
      return <div>Error loading products.</div>;
    }
  } else if (category === "CherriesBerriesDragonfruit") {
    // Check if 'cherries','berries','dragonfruits' properties exist in the products object
    if (
      products &&
      products.cherries &&
      products.berries &&
      products.dragonfruits
    ) {
      filteredProducts = [
        ...products.cherries,
        ...products.berries,
        ...products.dragonfruits,
      ];
    } else {
      console.error("Products data is incomplete.");
      return <div>Error loading products.</div>;
    }
  } else if (category === "CitrusMangosGrapes") {
    // Check if 'citrus','grspes', properties exist in the products object
    if (products && products.grapes && products.citrus) {
      filteredProducts = [...products.grapes, ...products.citrus];
    } else {
      console.error("Products data is incomplete.");
      return <div>Error loading products.</div>;
    }
  } else if (category === "Dates") {
    // Check if 'wetdates' properties exist in the products object
    if (products && products.wetdates) {
      filteredProducts = [...products.wetdates];
    } else {
      console.error("Products data is incomplete.");
      return <div>Error loading products.</div>;
    }
  } else if (category === "GiftAssortedXlPacks") {
    // Check if 'giftpacks' properties exist in the products object
    if (products && products.giftpacks) {
      filteredProducts = [...products.giftpacks];
    } else {
      console.error("Products data is incomplete.");
      return <div>Error loading products.</div>;
    }
  } else if (category === "PomegranatePapayaPineapple") {
    // Check if 'pomegranates','pineapples','papayas' properties exist in the products object
    if (
      products &&
      products.pomegranates &&
      products.papayas &&
      products.pineapples
    ) {
      filteredProducts = [
        ...products.pineapples,
        ...products.pomegranates,
        ...products.papayas,
      ];
    } else {
      console.error("Products data is incomplete.");
      return <div>Error loading products.</div>;
    }
  } else if (category === "SeasonalMinorFruits") {
    // Check if 'guavas','custardapples' properties exist in the products object
    if (products && products.guavas && products.custardapples) {
      filteredProducts = [...products.guavas, ...products.custardapples];
    } else {
      console.error("Products data is incomplete.");
      return <div>Error loading products.</div>;
    }
  } else if (category === "makeup") {
    // Check if 'Lips','Nails','Eyes','Facepack','makeuptools' properties exist in the products object
    if (
      products &&
      products.Lips &&
      products.Nails &&
      products.Eyes &&
      products.FaceMakeUp &&
      products.MakeupToolsBrushes
    ) {
      filteredProducts = [
        ...products.Lips,
        ...products.Nails,
        ...products.Eyes,
        ...products.FaceMakeUp,
        ...products.MakeupToolsBrushes,
      ];
    } else {
      console.error("Products data is incomplete.");
      return <div>Error loading products.</div>;
    }
  }else if (category === "skincare") {
    // Check if 'Serum','FaceMask','Moisturizes',properties exist in the products object
    if (
      products &&
      products.Serum &&
      products.FaceMask &&
      products.Moisturizers 
      
    ) {
      filteredProducts = [
        ...products.Serum,
        ...products.FaceMask ,
        ...products.Moisturizers,
      ];
    } else {
      console.error("Products data is incomplete.");
      return <div>Error loading products.</div>;
    }
  }else if (category === "mensfashion") {
    // Check if 'ClothingAccessories','WesternWear','FootWear','EyeWear','InnerWear' properties exist in the products object
    if (
      products &&
      products.ClothingAccessories &&
      products.WesternWear &&
      products.MensFootWear &&
      products.MensEyeWear &&
      products.InnerWear
    ) {
      filteredProducts = [
        ...products.ClothingAccessories,
        ...products.WesternWear,
        ...products.MensFootWear,
        ...products.MensEyeWear,
        ...products.InnerWear,
      ];
    } else {
      console.error("Products data is incomplete.");
      return <div>Error loading products.</div>;
    }
  }else if (category === "womensfashion") {
    // Check if 'EthinicWear','TraditionalWear','EyeWear','Watches','FootWear'properties exist in the products object
    if (
      products &&
      products.EthinicWear &&
      products.TraditionalWear &&
      products.EyeWear &&
      products.Watches &&
      products.FootWear 
      
    ) {
      filteredProducts = [
        ...products.EthinicWear,
        ...products.TraditionalWear ,
        ...products.EyeWear,
        ...products.Watches,
        ...products.FootWear,
      ];
    } else {
      console.error("Products data is incomplete.");
      return <div>Error loading products.</div>;
    }
  }else if (category === "kidsfashion") {
    // Check if 'JuniorBoyShirt','JuniorBoyTracks','JuniorBoyInnerWear',
    //'JuniorGirlGowns','JuniorGirlCasualWear','JuniorGirlInnerWear','BabyGirl','BabyBoy','Toys'
    //properties exist in the products object
    if (
      products &&
      products.JuniorBoyShirt &&
      products.JuniorBoyTracks &&
      products.JuniorBoyInnerWear &&
      products.JuniorGirlGowns &&
      products.JuniorGirlCasualWear &&
      products.JuniorGirlInnerWear 
     
      
    ) {
      filteredProducts = [
        ...products.JuniorBoyShirt,
        ...products.JuniorBoyTracks ,
        ...products.JuniorBoyInnerWear,
        ...products.JuniorGirlGowns,
        ...products.JuniorGirlCasualWear,
        ...products.JuniorGirlInnerWear,
        ...products.BabyGirl,
        ...products.BabyBoy,
        ...products.Toys,
      ];
    } else {
      console.error("Products data is incomplete.");
      return <div>Error loading products.</div>;
    }
  }
  else if (category === "infants") {
    // Check if 'JuniorBoyShirt','JuniorBoyTracks','JuniorBoyInnerWear',
    //'JuniorGirlGowns','JuniorGirlCasualWear','JuniorGirlInnerWear','BabyGirl','BabyBoy','Toys'
    //properties exist in the products object
    if (
      products &&
      products.BabyGirl &&
      products.BabyBoy &&
      products.Toys 
      
    ) {
      filteredProducts = [
        ...products.BabyGirl,
        ...products.BabyBoy,
        ...products.Toys,
      ];
    } else {
      console.error("Products data is incomplete.");
      return <div>Error loading products.</div>;
    }
  } 

  //Electronics
  else if (category === "MobilesTablets") {
    // Check if 'Smartphone','•	MobileAccessories','Tablets'properties exist in the products object
    if (
      products &&
      products.Smartphone &&
      products.MobileAccessories &&
      products.Tablets 
    ) {
      filteredProducts = [
        ...products.Smartphone,
        ...products.MobileAccessories,
        ...products.Tablets,
      ];
    } else {
      console.error("Products data is incomplete.");
      return <div>Error loading products.</div>;
    }
  }else if (category === "TvSpeaker") {
    // Check if 'Tv','HomeTheatre','TvRemote'properties exist in the products object

if (
    products &&
    products.Tv &&
    products.HomeTheatre &&
    products.TvRemote 
) {
filteredProducts = [
    ...products.Tv,
    ...products.HomeTheatre,
    ...products.TvRemote,
];
} else {
console.error("Products data is incomplete.");
return <div>Error loading products.</div>;
}
}else if (category === "HomeAppliances") {
    // Check if 'WashingMachine','Irons','Fans'properties exist in the products object
    
    if (
        products && 
        products.WashingMachine &&
        products.Irons &&
        products.Fans 
        ) {
        filteredProducts = [
            ...products.WashingMachine,
            ...products.Irons,
            ...products.Fans,
        ];
} else {
console.error("Products data is incomplete.");
return <div>Error loading products.</div>;
}
}else if (category === "Computers") {
    // Check if 'Laptop', 'Desktop', 'Monitor' properties exist in the products object
    
    if (
        products &&
        products.Laptop &&
        products.Desktop &&
        products.Monitor
        ) {
        filteredProducts = [
            ...products.Laptop,
            ...products.Desktop,
            ...products.Monitor,
        ];
        } else {
        console.error("Products data is incomplete.");
        return <div>Error loading products.</div>;
        }
        }
  //Electronics
  else if (category === "MobilesTablets") {
    // Check if 'Smartphone','•	MobileAccessories','Tablets'properties exist in the products object
    if (
      products &&
      products.Smartphone &&
      products.MobileAccessories &&
      products.Tablets 
    ) {
      filteredProducts = [
        ...products.Smartphone,
        ...products.MobileAccessories,
        ...products.Tablets,
      ];
    } else {
      console.error("Products data is incomplete.");
      return <div>Error loading products.</div>;
    }
  }else if (category === "TvSpeaker") {
    // Check if 'Tv','HomeTheatre','TvRemote'properties exist in the products object

if (
    products &&
    products.Tv &&
    products.HomeTheatre &&
    products.TvRemote 
) {
filteredProducts = [
    ...products.Tv,
    ...products.HomeTheatre,
    ...products.TvRemote,
];
} else {
console.error("Products data is incomplete.");
return <div>Error loading products.</div>;
}
}else if (category === "HomeAppliances") {
    // Check if 'WashingMachine','Irons','Fans'properties exist in the products object
    
    if (
        products && 
        products.WashingMachine &&
        products.Irons &&
        products.Fans 
        ) {
        filteredProducts = [
            ...products.WashingMachine,
            ...products.Irons,
            ...products.Fans,
        ];
} else {
console.error("Products data is incomplete.");
return <div>Error loading products.</div>;
}
}else if (category === "Computers") {
    // Check if 'Laptop', 'Desktop', 'Monitor' properties exist in the products object
    
    if (
        products &&
        products.Laptop &&
        products.Desktop &&
        products.Monitor
        ) {
        filteredProducts = [
            ...products.Laptop,
            ...products.Desktop,
            ...products.Monitor,
        ];
        } else {
        console.error("Products data is incomplete.");
        return <div>Error loading products.</div>;
        }
        }

  //BagsAndLuggages
  else if (category === "BagsTravelLuggages") {
    // Bags Luggages
    if (
      products &&
      products.BagsAndBackpacks &&
      products.DuffleBags &&
      products.TrolleysAndSuitcases &&
      products.ShoppingAndOtherbags
    ) {
      filteredProducts = [
        ...products.BagsAndBackpacks,
        ...products.DuffleBags,
        ...products.TrolleysAndSuitcases,
        ...products.ShoppingAndOtherbags,
      ];
    } else {
      console.error("Products data is incomplete.");
      return <div>Error loading products.</div>;
    }
  } else {
    // Handle other categories or render an appropriate message
    return <div>Invalid category specified.</div>;
  }

  //sortbtn filter
  if (selectedSortItem == "All Products") {
    console.log("based on all Products sorting");
    // Example usage:
    filteredProducts = shuffleArray(filteredProducts);
  } else if (selectedSortItem == "Discount") {
    console.log("based on discount");
    filteredProducts = filteredProducts
      .slice()
      .sort((a, b) => b.discount - a.discount);
  } else if (selectedSortItem == "Popularity") {
    console.log("based on popularity");
    filteredProducts = filteredProducts
      .slice()
      .sort((a, b) => b.ratings - a.ratings);
  } else if (selectedSortItem == "Price:High to Low") {
    console.log("based on ascending price");
    filteredProducts = filteredProducts.slice().sort((a, b) => b.mrp - a.mrp);
  } else if (selectedSortItem == "Price:Low to High") {
    console.log("based on descending price");
    filteredProducts = filteredProducts.slice().sort((a, b) => a.mrp - b.mrp);
  } else {
    console.log("selectedSortItem is empty");
  }

  // filteredProducts = shuffleArray(filteredProducts);

//ProductlistAdImage
const [categoryBannerAdImage,setcategoryBannerAdImage] = useState("");
  
useEffect(()=>{
  if(category){
    console.log("subcategoryAdImageData key :",category);
    setcategoryBannerAdImage(categoryBannerAdImagedata[category]);
  }
},[category])

  return (
    <Container fluid className="product-list-container">
      {/* First Row with Breadcrumbs */}
      <Row>
        <Col>
          <BreadCrumbs
            mainTitle={mainTitle}
            mainUrl={mainUrl}
            catTitle={catTitle}
            catUrl={catUrl}
          />
        </Col>
      </Row>
      {/* Second Row with Two Columns */}
      <Row>
        {/* Left Column with Category Accordions */}
        <Col md={3} lg={3}>
          <CategoryAccordions mainCategory={mainTitle} />
        </Col>
        {/* right column with product list */}
        <Col md={9}>
        {categoryBannerAdImage && <Row>
              <Col>
                <Image
                  src={categoryBannerAdImage}
                  fluid
                  rounded
                  style={{ height: '200px',width:"100%",objectFit:"cover"}}
                />
              </Col>
            </Row>}
          <Row className=" mt-3 justify-content-end">
            <Col>
              <SortBtn
                selectedSortItem={selectedSortItem}
                handleDropdownSelect={handleDropdownSelect}
              />
            </Col>
          </Row>
          <Row className=" mt-3">
            {filteredProducts.map((product) => (
              <Col key={product.productId} xs={12} md={6} lg={4}>
                <ProductCard product={product} category={category} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Category;