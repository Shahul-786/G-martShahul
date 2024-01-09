import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const CategoryAccordions = ({ mainCategory }) => {
  const categoriesByMainCategory = {
    premiumfruits: [
      "ApplePears",
      "AvacadoPeachPlum",
      "BananaMelonCoconut",
      "CherriesBerriesDragonfruit",
      "CitrusMangosGrapes",
      "Dates",
      "GiftAssortedXlPacks",
      "PomegranatePapayaPineapple",
      "SeasonalMinorFruits"
    ],
    Beauty: [
      "makeup",
      "skincare"
    ],
    SportsToysLuggages: ["BagsTravelLuggages"],
    HomeAndKitchenNeeds: [
      "Kitchenware",
      "HomeDecor",
      "Furniture",
      "BathroomAccessories",
    ],
    Fashion: [
      "MensFashion",
      "WomensFashion",
      "KidsFashion",
      "Infants",
    ],
    Electronics: [
        "MobilesTablets",
        "TvSpeaker",
        "HomeAppliances",
        "Computers",
      ],
  };
  const subcategoriesByCategory = {
    //premiumfruits
    ApplePears: ["apples", "pears"],
    AvacadoPeachPlum: ["avacados", "peaches", "nectarines"],
    BananaMelonCoconut: ["bananas", "melons", "coconuts"],
    CherriesBerriesDragonfruit: ["cherries", "berries", "dragonfruits"],
    CitrusMangosGrapes:["citrus","mangos","grapes"],
    Dates: ["wetdates"],
    GiftAssortedXlPacks:["giftpacks"],
    PomegranatePapayaPineapple:["pomegranates","papayas","pineapples"],
    SeasonalMinorFruits:["guavas","custardapples"],
    //beauty
    makeup: ["Lips", "Nails", "Eyes", "FaceMakeUp", "MakeupToolsBrushes"],
    skincare:["Serum", "FaceMask", "Moisturizers"],
    //sportstoysluggages
    BagsTravelLuggages: [
      "BagsAndBackpacks",
      "DuffleBags",
      "ShoppingAndOtherbags",
      // "TravelAccessories",
      "TrolleysAndSuitcases",
    ],
    // homekitchen
    Kitchenware: ["KitchenTools", "Cookware", "GasStove"],
    HomeDecor: ["InteriorNeeds", "Decors", "GiftingSets"],
    Furniture: ["Chairs", "Tables", "Mattress", "SofasAndCouches"],
    BathroomAccessories: ["MugsTubsBuckets", "HooksClipsLaundryEssentials"],
    //fashion
    MensFashion: [
      "ClothingAccessories",
      "WesternWear",
      "MensFootWear",
      "MensEyeWear",
      "InnerWear",
    ],
    WomensFashion: [
      "EthinicWear",
      "TraditionalWear",
      "EyeWear",
      "FootWear",
      "Watches",
    ],
    KidsFashion: [
      "JuniorBoyShirt",
      "JuniorBoyTracks",
      "JuniorBoyInnerWear",
      "JuniorGirlGowns",
      "JuniorGirlCasualWear",
      "JuniorGirlInnerWear",
      
    ],
    Infants: [
      "BabyGirl",
      "BabyBoy",
      "Toys",
    ],
    "Category C2": ["Subcategory C1.1", "Subcategory C1.2", "Subcategory C1.3"],
    //Electronics
    MobilesTablets: ["Smartphone", "MobileAccessories", "Tablets"],
    TvSpeaker: ["Tv", "HomeTheatre", "TvRemote"],
    HomeAppliances: ["WashingMachine", "Irons", "Fans"],
    Computers: ["Laptop", "Desktop", "Monitor"],
    
  };
  const { pathname } = useLocation();
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState(null);
  console.log("pathname:", pathname);
  useEffect(() => {
    // Parse the URL path segments
    const pathSegments = pathname
      .split("/")
      .filter((segment) => segment !== "");
    console.log("pathsegments", pathSegments);
    console.log("pathsegmaents:", pathSegments);
    // Set active categories based on path segments
    if (pathSegments.length >= 2) {
      setActiveCategory(pathSegments[1]);
    }
    if (pathSegments.length >= 3) {
      setActiveSubCategory(pathSegments[2]);
    }
  }, [location.pathname]);
  // const handleMainCategorySelect = (mainCategory) => {
  //   setActiveMainCategory(mainCategory);
  //   setActiveCategory(null); // Reset activeCategory when main category changes
  // };

  const handleCategorySelect = (category) => {
    setActiveCategory(category);
  };
  const handleSubCategorySelect = (Subcategory) => {
    setActiveSubCategory(Subcategory);
  };

  // Determine the current category based on the path (replace with your logic)
  console.log("mainCategory", mainCategory);
  console.log("categoriesbymaincategory", categoriesByMainCategory);
  console.log("subcategoriesByCategory", subcategoriesByCategory);
  return (
    <Accordion activeKey={activeCategory}>
      {categoriesByMainCategory[mainCategory].map((category,index) => (
        <Accordion.Item key={index} eventKey={category}>
          <Accordion.Header onClick={() => handleCategorySelect(category)}>
          <span style={{ fontWeight: 'bold',fontSize:14}}>{category}</span>
          </Accordion.Header>
          <Accordion.Body>
          {subcategoriesByCategory[category] && subcategoriesByCategory[category].map((subcategory, index) => (
              <Link key={index} style={{textDecoration:"none",color:"black"}} to={`/${mainCategory}/${category}/${subcategory}`}>
                <p
                  key={subcategory}
                  className={subcategory === activeSubCategory ? "active" : ""}
                >
                  {subcategory}
                </p>
              </Link>
            ))}
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default CategoryAccordions;