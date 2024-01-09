import  { useState } from "react";

import CartIcon from "./CartIcon";

import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

import { Link } from "react-router-dom";

const Header = () => {
  const [showPremiumFruitsDropdown, setshowPremiumFruitsDropdown] =
    useState(false);
  const [showApplePearsDropdown, setShowApplePearsDropdown] = useState(false);
  const [showAvacadoPeachPlumDropdown, setShowAvacadoPeachPlumDropdown] =
    useState(false);
  const [showBananaMelonCoconutDropdown, setShowBananaMelonCoconutDropdown] =
    useState(false);
  const [
    showCherriesBerriesExoticDropdown,
    setShowCherriesBerriesExoticDropdown,
  ] = useState(false);
  const [showCitrusMangoGrapeDropdown, setShowCitrusMangoGrapeDropdown] =
    useState(false);
  const [showWetDatesDropdown, setShowWetDatesDropdown] = useState(false);
  const [showGiftPackDropdown, setShowGiftPackDropdown] = useState(false);
  const [
    showPomegranatePapayaPineappleDropdown,
    setShowPomegranatePapayaPineappleDropdown,
  ] = useState(false);
  const [showSeasonalMinorFruitsDropdown, setShowSeasonalMinorFruitsDropdown] =
    useState(false);
  //beauty state
  const [showBeautyDropdown, setshowBeautyDropdown] = useState(false);
  const [showMakeUpDropdown, setShowMakeUpDropdown] = useState(false);
  //SportsToysLuggage
  const [showSportsToysLuggagesDropdown, setshowSportsToysLuggagesDropdown] =
    useState(false);
  const [
    showBagsAndTravelLuggagesDropdown,
    setShowBagsAndTravelLuggagesDropdown,
  ] = useState(false);

  const handlePremiumFruitsMouseEnter = () => {
    setshowPremiumFruitsDropdown(true);
  };

  const handlePremiumFruitsMouseLeave = () => {
    setshowPremiumFruitsDropdown(false);
  };
  //for apples-pears
  const handleApplePearsMouseEnter = () => {
    setShowApplePearsDropdown(true);
  };

  const handleApplePearsMouseLeave = () => {
    setShowApplePearsDropdown(false);
  };
  //for avacado-peach-plum
  const handleAvacadoPeachPlumMouseEnter = () => {
    setShowAvacadoPeachPlumDropdown(true);
  };

  const handleAvacadoPeachPlumMouseLeave = () => {
    setShowAvacadoPeachPlumDropdown(false);
  };
  //for bananas-melons-coconut
  const handleBananaMelonCoconutMouseEnter = () => {
    setShowBananaMelonCoconutDropdown(true);
  };

  const handleBananaMelonCoconutMouseLeave = () => {
    setShowBananaMelonCoconutDropdown(false);
  };

  //for cherries-berries-dragonfruits
  const handleCherriesBerriesExoticMouseEnter = () => {
    setShowCherriesBerriesExoticDropdown(true);
  };

  const handleCherriesBerriesExoticMouseLeave = () => {
    setShowCherriesBerriesExoticDropdown(false);
  };

  //for citrus-mangos-grapes
  const handleCitrusMangoGrapeMouseEnter = () => {
    setShowCitrusMangoGrapeDropdown(true);
  };

  const handleCitrusMangoGrapeMouseLeave = () => {
    setShowCitrusMangoGrapeDropdown(false);
  };

  //for dates
  const handleWetDatesMouseEnter = () => {
    setShowWetDatesDropdown(true);
  };

  const handleWetDatesMouseLeave = () => {
    setShowWetDatesDropdown(false);
  };

  //for gift packs
  const handleGiftPackMouseEnter = () => {
    setShowGiftPackDropdown(true);
  };

  const handleGiftPackMouseLeave = () => {
    setShowGiftPackDropdown(false);
  };

  //for pomegranate-papayas-pineapple
  const handlePomegranatePapayaPineappleMouseEnter = () => {
    setShowPomegranatePapayaPineappleDropdown(true);
  };

  const handlePomegranatePapayaPineappleMouseLeave = () => {
    setShowPomegranatePapayaPineappleDropdown(false);
  };

  //for seasonal-minor-fruits
  const handleSeasonalMinorFruitsMouseEnter = () => {
    setShowSeasonalMinorFruitsDropdown(true);
  };

  const handleSeasonalMinorFruitsMouseLeave = () => {
    setShowSeasonalMinorFruitsDropdown(false);
  };

  //beauty
  const handleBeautyMouseEnter = () => {
    setshowBeautyDropdown(true);
  };
  const handleBeautyMouseLeave = () => {
    setshowBeautyDropdown(false);
  };
  //for Makeup
  const handleMakeUpMouseEnter = () => {
    setShowMakeUpDropdown(true);
  };
  const handleMakeUpMouseLeave = () => {
    setShowMakeUpDropdown(false);
  };
  //SportsToysLuggages
  const handleSportsToysLuggagesMouseEnter = () => {
    setshowSportsToysLuggagesDropdown(true);
  };
  const handleSportsToysLuggagesMouseLeave = () => {
    setshowSportsToysLuggagesDropdown(false);
  };
  //for BagsAndTravleLuggages
  const handleBagsAndTravelLuggagesMouseEnter = () => {
    setShowBagsAndTravelLuggagesDropdown(true);
  };
  const handleBagsAndTravelLuggagesMouseLeave = () => {
    setShowBagsAndTravelLuggagesDropdown(false);
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" navbarScroll>
            <NavDropdown
              show={showPremiumFruitsDropdown}
              onMouseEnter={handlePremiumFruitsMouseEnter}
              onMouseLeave={handlePremiumFruitsMouseLeave}
            >
              <NavDropdown.Item
                as={Link}
                to={"/premiumfruits/ApplePears"}
                onMouseEnter={handleApplePearsMouseEnter}
                onMouseLeave={handleApplePearsMouseLeave}
              >
                Apple & Pears
              </NavDropdown.Item>
              {showApplePearsDropdown && (
                <>
                  <Container
                    show={showApplePearsDropdown}
                    onMouseEnter={handleApplePearsMouseEnter}
                    onMouseLeave={handleApplePearsMouseLeave}
                  >
                    <NavDropdown.Item href="/premiumfruits/ApplePears/apples">
                      Apples
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/premiumfruits/ApplePears/pears">
                      Pears
                    </NavDropdown.Item>
                  </Container>
                </>
              )}

              <NavDropdown.Item
                as={Link}
                to={"/premiumfruits/AvacadoPeachPlum"}
                onMouseEnter={handleAvacadoPeachPlumMouseEnter}
                onMouseLeave={handleAvacadoPeachPlumMouseLeave}
              >
                Avacados-Peaches-Plum
              </NavDropdown.Item>
              {showAvacadoPeachPlumDropdown && (
                <>
                  <Container
                    show={showAvacadoPeachPlumDropdown}
                    onMouseEnter={handleAvacadoPeachPlumMouseEnter}
                    onMouseLeave={handleAvacadoPeachPlumMouseLeave}
                  >
                    <NavDropdown.Item href="/premiumfruits/AvacadoPeachPlum/avacados">
                      Avacados
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/premiumfruits/AvacadoPeachPlum/peaches">
                      Peaches
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/premiumfruits/AvacadoPeachPlum/nectarines">
                      Nectarines
                    </NavDropdown.Item>
                  </Container>
                </>
              )}
              <NavDropdown.Item
                as={Link}
                to={"/premiumfruits/BananaMelonCoconut"}
                onMouseEnter={handleBananaMelonCoconutMouseEnter}
                onMouseLeave={handleBananaMelonCoconutMouseLeave}
              >
                banana-melons-coconut
              </NavDropdown.Item>
              {showBananaMelonCoconutDropdown && (
                <>
                  <Container
                    show={showBananaMelonCoconutDropdown}
                    onMouseEnter={handleBananaMelonCoconutMouseEnter}
                    onMouseLeave={handleBananaMelonCoconutMouseLeave}
                  >
                    <NavDropdown.Item href="/premiumfruits/BananaMelonCoconut/bananas">
                      Bananas
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/premiumfruits/BananaMelonCoconut/melons">
                      Melons
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/premiumfruits/BananaMelonCoconut/coconuts">
                      Coconuts
                    </NavDropdown.Item>
                  </Container>
                </>
              )}
              <NavDropdown.Item
                as={Link}
                to={"/premiumfruits/CherriesBerriesDragonfruit"}
                onMouseEnter={handleCherriesBerriesExoticMouseEnter}
                onMouseLeave={handleCherriesBerriesExoticMouseLeave}
              >
                cherries-berries-exotic-fruits
              </NavDropdown.Item>
              {showCherriesBerriesExoticDropdown && (
                <>
                  <Container
                    show={showCherriesBerriesExoticDropdown}
                    onMouseEnter={handleCherriesBerriesExoticMouseEnter}
                    onMouseLeave={handleCherriesBerriesExoticMouseLeave}
                  >
                    <NavDropdown.Item href="/premiumfruits/CherriesBerriesDragonfruit/cherries">
                      Cherries
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/premiumfruits/CherriesBerriesDragonfruit/berries">
                      Berries
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/premiumfruits/CherriesBerriesDragonfruit/dragonfruits">
                      Dragon Fruits
                    </NavDropdown.Item>
                  </Container>
                </>
              )}
              <NavDropdown.Item
                as={Link}
                to={"/premiumfruits/CitrusMangosGrapes"}
                onMouseEnter={handleCitrusMangoGrapeMouseEnter}
                onMouseLeave={handleCitrusMangoGrapeMouseLeave}
              >
                citrus-mango-grapes
              </NavDropdown.Item>
              {showCitrusMangoGrapeDropdown && (
                <>
                  <Container
                    show={showCitrusMangoGrapeDropdown}
                    onMouseEnter={handleCitrusMangoGrapeMouseEnter}
                    onMouseLeave={handleCitrusMangoGrapeMouseLeave}
                  >
                    <NavDropdown.Item href="/premiumfruits/CitrusMangosGrapes/citrus">
                      Citrus
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/premiumfruits/CitrusMangosGrapes/mangos">
                      Mangos
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/premiumfruits/CitrusMangosGrapes/grapes">
                      Grapes
                    </NavDropdown.Item>
                  </Container>
                </>
              )}
              <NavDropdown.Item
                as={Link}
                to={"/premiumfruits/Dates"}
                onMouseEnter={handleWetDatesMouseEnter}
                onMouseLeave={handleWetDatesMouseLeave}
              >
                dates
              </NavDropdown.Item>
              {showWetDatesDropdown && (
                <>
                  <Container
                    show={showWetDatesDropdown}
                    onMouseEnter={handleWetDatesMouseEnter}
                    onMouseLeave={handleWetDatesMouseLeave}
                  >
                    <NavDropdown.Item href="/premiumfruits/Dates/wetdates">
                      Wet Dates
                    </NavDropdown.Item>
                  </Container>
                </>
              )}
              <NavDropdown.Item
                as={Link}
                to={"/premiumfruits/GiftAssortedXlPacks"}
                onMouseEnter={handleGiftPackMouseEnter}
                onMouseLeave={handleGiftPackMouseLeave}
              >
                gift-assorted-xl-packs
              </NavDropdown.Item>
              {showGiftPackDropdown && (
                <>
                  <Container
                    show={showGiftPackDropdown}
                    onMouseEnter={handleGiftPackMouseEnter}
                    onMouseLeave={handleGiftPackMouseLeave}
                  >
                    <NavDropdown.Item href="/premiumfruits/GiftAssortedXlPacks/giftpacks">
                      Gifts Pack
                    </NavDropdown.Item>
                  </Container>
                </>
              )}
              <NavDropdown.Item
                as={Link}
                to={"/premiumfruits/PomegranatePapayaPineapple"}
                onMouseEnter={handlePomegranatePapayaPineappleMouseEnter}
                onMouseLeave={handlePomegranatePapayaPineappleMouseLeave}
              >
                pomegranate-papaya-pineapple
              </NavDropdown.Item>
              {showPomegranatePapayaPineappleDropdown && (
                <>
                  <Container
                    show={showPomegranatePapayaPineappleDropdown}
                    onMouseEnter={handlePomegranatePapayaPineappleMouseEnter}
                    onMouseLeave={handlePomegranatePapayaPineappleMouseLeave}
                  >
                    <NavDropdown.Item href="/premiumfruits/PomegranatePapayaPineapple/pomegranates">
                      Pomegranates
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/premiumfruits/PomegranatePapayaPineapple/papayas">
                      Papayas
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/premiumfruits/PomegranatePapayaPineapple/pineapples">
                      Pineapples
                    </NavDropdown.Item>
                  </Container>
                </>
              )}
              <NavDropdown.Item
                as={Link}
                to={"/premiumfruits/SeasonalMinorFruits"}
                onMouseEnter={handleSeasonalMinorFruitsMouseEnter}
                onMouseLeave={handleSeasonalMinorFruitsMouseLeave}
              >
                seasonal-minor-fruits
              </NavDropdown.Item>
              {showSeasonalMinorFruitsDropdown && (
                <>
                  <Container
                    show={showSeasonalMinorFruitsDropdown}
                    onMouseEnter={handleSeasonalMinorFruitsMouseEnter}
                    onMouseLeave={handleSeasonalMinorFruitsMouseLeave}
                  >
                    <NavDropdown.Item href="/premiumfruits/SeasonalMinorFruits/guavas">
                      Guava
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/premiumfruits/SeasonalMinorFruits/custardapples">
                      Custard Apples
                    </NavDropdown.Item>
                  </Container>
                </>
              )}
            </NavDropdown>
            <Nav.Link
              as={Link}
              to={"/premiumfruits"}
              onMouseEnter={handlePremiumFruitsMouseEnter}
              onMouseLeave={handlePremiumFruitsMouseLeave}
            >
              Premium Fruits
            </Nav.Link>
            {/* beauty dropdown */}
            <NavDropdown
              show={showBeautyDropdown}
              onMouseEnter={handleBeautyMouseEnter}
              onMouseLeave={handleBeautyMouseLeave}
            >
              <NavDropdown.Item
                as={Link}
                to={"/Beauty/makeup"}
                onMouseEnter={handleMakeUpMouseEnter}
                onMouseLeave={handleMakeUpMouseLeave}
              >
                Make-Up
              </NavDropdown.Item>
              {showMakeUpDropdown && (
                <>
                  <Container
                    show={showMakeUpDropdown}
                    onMouseEnter={handleMakeUpMouseEnter}
                    onMouseLeave={handleMakeUpMouseLeave}
                  >
                    <NavDropdown.Item href="/Beauty/makeup/Lips">
                      Lips
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/Beauty/makeup/Nails">
                      Nails
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/Beauty/makeup/Eyes">
                      Eyes
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/Beauty/makeup/FaceMakeUp">
                      FaceMakeUp
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/Beauty/makeup/MakeupToolsBrushes">
                      MakeupToolsBrushes
                    </NavDropdown.Item>
                  </Container>
                </>
              )}
            </NavDropdown>
            <Nav.Link
              as={Link}
              to={"/Beauty"}
              onMouseEnter={handleBeautyMouseEnter}
              onMouseLeave={handleBeautyMouseLeave}
            >
              Beauty
            </Nav.Link>
            {/* bagsandluggages */}
            <NavDropdown
              show={showSportsToysLuggagesDropdown}
              onMouseEnter={handleSportsToysLuggagesMouseEnter}
              onMouseLeave={handleSportsToysLuggagesMouseLeave}
            >
              <NavDropdown.Item
                as={Link}
                to={"/SportsToysLuggages/BagsTravelLuggages"}
                onMouseEnter={handleBagsAndTravelLuggagesMouseEnter}
                onMouseLeave={handleBagsAndTravelLuggagesMouseLeave}
              >
                Bags & Travel Luggages
              </NavDropdown.Item>
              {showBagsAndTravelLuggagesDropdown && (
                <>
                  <Container
                    show={showBagsAndTravelLuggagesDropdown}
                    onMouseEnter={handleBagsAndTravelLuggagesMouseEnter}
                    onMouseLeave={handleBagsAndTravelLuggagesMouseLeave}
                  >
                    <NavDropdown.Item href="/SportsToysLuggages/BagsTravelLuggages/BagsAndBackpacks">
                      Bags & Backpacks
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/SportsToysLuggages/BagsTravelLuggages/DuffleBags">
                      Duffle Bags
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/SportsToysLuggages/BagsTravelLuggages/ShoppingAndOtherbags">
                      Shopping & Other Bags
                    </NavDropdown.Item>
                    {/* <NavDropdown.Item href="/SportsToysLuggages/BagsTravelLuggages/TravelAccessories">
                      Travel Accessories
                    </NavDropdown.Item> */}
                    <NavDropdown.Item href="/SportsToysLuggages/BagsTravelLuggages/TrolleysAndSuitcases">
                      Trolleys & Suitcases
                    </NavDropdown.Item>
                  </Container>
                </>
              )}
            </NavDropdown>
            <Nav.Link
              as={Link}
              to={"/SportsToysLuggages"}
              onMouseEnter={handleSportsToysLuggagesMouseEnter}
              onMouseLeave={handleSportsToysLuggagesMouseLeave}
            >
              SportsToys&Luggages
            </Nav.Link>

            
            <Nav.Link href="/Fashion">Fashion</Nav.Link>
            <Nav.Link href="/Electronics">Electronics</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <CartIcon/>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;