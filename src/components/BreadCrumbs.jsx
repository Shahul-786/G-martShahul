import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";


const BreadCrumbs = ({mainTitle,mainUrl,catTitle,catUrl,subcatTitle,subcatUrl}) => {
    console.log("main",mainTitle);
    console.log("main",mainUrl);
    console.log("catTitle",catTitle);
    console.log("catUrl",catUrl);
    console.log("subcatTitle",subcatTitle);
    console.log("subcatUrl",subcatUrl);

  return (

    <Breadcrumb className="mt-3">
      <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }} className="custom-breadcrumb-item">
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/allcategory" }} className="custom-breadcrumb-item">
        All Categories
      </Breadcrumb.Item>
      {mainTitle&& <Breadcrumb.Item linkAs={Link} linkProps={{ to: `${mainUrl}` }} className="custom-breadcrumb-item">
        <span className={`${ catTitle? '' : 'text-black'}`}>{mainTitle}</span>
      </Breadcrumb.Item>}
      {catTitle&& <Breadcrumb.Item linkAs={Link} linkProps={{ to: `${catUrl}` }} className="custom-breadcrumb-item">
      <span className={`${ subcatTitle? '' : 'text-black'}`}>{catTitle}</span>
      </Breadcrumb.Item>}
      {subcatTitle&& <Breadcrumb.Item linkAs={Link} linkProps={{ to: `${subcatUrl}` }} className="custom-breadcrumb-item">
      <span className={`${ subcatTitle? 'text-black' :"" }`}>{subcatTitle}</span>

      </Breadcrumb.Item>}
    </Breadcrumb>
  );
};

export default BreadCrumbs;