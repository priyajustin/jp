import React from "react";
import Layout from '../components/layout/Layout'
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="https://www.newcent.org/wp-content/uploads/2016/12/Customer-Care-Course.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about product feel free to call anytime we 24X7
            available
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@jptrends.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

Layout.defaultProps = {
  title: "E-commerce app - shop now",
  description: "Mern-stack project",
  keywords: "Mern,react,node,mongodb",
  author: "priyaJustin",
};

export default Contact;