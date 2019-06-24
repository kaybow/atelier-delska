import React from "react"

import { Link, graphql, StaticQuery } from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"
import form from "../images/form.svg";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="text-center">
     <img
       className="illustration-lrg"
       alt="illustration of a dress form"
       src={form}
     />
     <h2>Sorry!</h2>
     <h3>Page not found.</h3>
     <Link className="micro button pad-b" to="/index">
       BACK TO HOMEPAGE
     </Link>
    </div>
  </Layout>
)

export default NotFoundPage
