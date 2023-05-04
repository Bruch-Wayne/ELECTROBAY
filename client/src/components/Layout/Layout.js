import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "80vh", marginTop: "60px" }}>
        <Toaster
        // position="top-right"
        // reverseOrder={false}
        // toastOptions={{
        //   duration: 5000,
        //   className: "",
        //   style: {
        //     border: "1px solid #713200",
        //     padding: "16px",
        //     color: "#713200",
        //     marginTop: "55px",
        //   },
        // }}
        />
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "ELECTROBAY -- shop now",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "alif",
};

export default Layout;
