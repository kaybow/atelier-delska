import React from "react"

import { Link } from "gatsby";
import SEO from "../components/seo"
import formnude from "../images/formnude.svg";

const NotFoundPage = () => (

  <>
    <SEO title="404: Not found" />
    <div className="text-center notfound">
     <img
       className="illustration-lrg pad-b"
       alt="illustration of a dress form"
       src={formnude}
     />
     <h2>Oops!</h2>
     <h3 className="pad-b-1-2">Nothing to see here.</h3>
     <Link className="micro button" to="/">
       RETURN TO HOMEPAGE
     </Link>
    </div>
  </>

)

export default NotFoundPage
