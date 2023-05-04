import React from "react";
import Layout from "../components/Layout/Layout";
import "../styles/Policy.css";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="privacy-policy ">
        <h3 className="text-center p-3 mt-5 ">Privacy policy</h3>
        <div className="row contactus  ">
          <div className="col-md-4 img-fluid">
            <img
              src="/images/cyber-data-protection.jpg"
              alt="contactus"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-4">
            <p>
              At ElectroBay, we take your privacy seriously. We value the trust
              you place in us and are committed to protecting your personal
              information. Our Privacy Policy outlines how we collect, use, and
              safeguard the information you provide us. We only collect
              information that is necessary to process your orders and to
              enhance your experience on our website. We do not share your
              personal information with third parties, except as required by law
              or as necessary to fulfill your orders. If you have any questions
              about our Privacy Policy or your personal information, please
              contact us.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
