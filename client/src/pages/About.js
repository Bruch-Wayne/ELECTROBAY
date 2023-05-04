import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="m-5">
        <div className="row contactus d-flex justify-content-center">
          <div className="col-md-4 mb-5">
            <img
              className="img-fluid"
              src="/images/about.jpg"
              alt="contactus"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-4">
            <p className="text-justify mt-2 w-auto">
              ElectroBay is an online store specializing in a wide range of
              electronic products. We strive to provide our customers with the
              latest and most innovative technology, from smartphones and
              laptops to home appliances and audio devices. Our mission is to
              make your shopping experience as seamless and hassle-free as
              possible, with fast shipping, secure payment options, and
              exceptional customer service. Shop with confidence at ElectroBay
              and join our growing community of satisfied customers today!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
