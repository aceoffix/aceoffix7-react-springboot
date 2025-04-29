import React, { useRef } from "react";
import { useEffect } from 'react';
import service from './api';
import Table1Component from "./components/table1";
import Table2Component from "./components/table2";
import Table3Component from "./components/table3";
import Table4Component from "./components/table4";
import Table5Component from "./components/table5";

const App = () => {

  useEffect(() => {
    const fetchData = async () => {
        try {
            // Simulate sending a GET request to the backend's /index interface to return data. This is not required in an actual application.
            const response = await service.get("/index");
            console.log("result=" + response);
        } catch (error) {
            console.error("The request has gone wrong:", error);
        }
    };

    fetchData();
}, []);


  const navLinks = [
    "Basic Features",
    "Advanced Features",
    "Comprehensive Demonstration",
    "Other Tips",
    "New Features",
  ];


  const basicFeaturesRef = useRef(null);
  const advancedFeaturesRef = useRef(null);
  const completeWalkthroughRef = useRef(null);
  const otherTipsRef = useRef(null);
  const newFeaturesRef = useRef(null);

  const handleNavLinkClick = (link) => {
    let ref = null;
    switch (link) {
      case "Basic Features":
        ref = basicFeaturesRef;
        break;
      case "Advanced Features":
        ref = advancedFeaturesRef;
        break;
      case "Comprehensive Demonstration":
        ref = completeWalkthroughRef;
        break;
      case "Other Tips":
        ref = otherTipsRef;
        break;
      case "New Features":
        ref = newFeaturesRef;
        break;
      default:
        break;
    }
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div style={{ fontSize: "16px", lineHeight: "2.0" }}>
      {/* Top Navigation */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px 20px",
          backgroundColor: "#f8f9fa",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://www.aceoffix.com/wp-content/uploads/2020/01/logo.svg"
            alt="aceoffix"
            style={{ height: "30px", marginRight: "10px" }}
          />
        </div>
        <div style={{ marginLeft: "auto", display: "flex" }}>
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              style={{
                margin: "0 15px",
                textDecoration: "none",
                color: "#333",
              }}
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick(link);
              }}
            >
              {link}
            </a>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <div
        style={{
          backgroundColor: "#1890ff",
          color: "white",
          padding: "50px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>
          ACEOFFIX V7.0
        </h1>
        <p style={{ fontSize: "18px", marginBottom: "30px" }}>
          Aceoffix offers over 100 features based on online Office, making
          document collaboration easier and more efficient for users.
        </p>
        <button
          style={{
            padding: "8px 20px",
            backgroundColor: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Contact Us
        </button>
      </div>

      {/* Function Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          padding: "40px 20px",
        }}
      >
        <div
          style={{
            border: "1px solid #e8e8e8",
            borderRadius: "8px",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <h3 style={{ fontSize: "20px", marginBottom: "15px" }}>
            BASIC FEATURES
          </h3>
          <p style={{ fontSize: "14px", color: "#666" }}>
            Demonstration of Basic Functions: Opening, Editing, and Saving
            Office Documents Online...
          </p>
        </div>
        <div
          style={{
            border: "1px solid #e8e8e8",
            borderRadius: "8px",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <h3 style={{ fontSize: "20px", marginBottom: "15px" }}>
            ADVANCED FEATURES
          </h3>
          <p style={{ fontSize: "14px", color: "#666" }}>
            Demonstration of invoking Aceoffix-provided interfaces to populate
            data into Word...
          </p>
        </div>
        <div
          style={{
            border: "1px solid #e8e8e8",
            borderRadius: "8px",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <h3 style={{ fontSize: "20px", marginBottom: "15px" }}>
            COMPLETE WALKTHROUGH
          </h3>
          <p style={{ fontSize: "14px", color: "#666" }}>
            Demonstrate the effectiveness of Aceoffix in various application
            scenarios through several model examples...
          </p>
        </div>
        <div
          style={{
            border: "1px solid #e8e8e8",
            borderRadius: "8px",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <h3 style={{ fontSize: "20px", marginBottom: "15px" }}>OTHER TIPS</h3>
          <p style={{ fontSize: "14px", color: "#666" }}>
            Demonstrate the direct invocation of some commonly used JS
            methods...
          </p>
        </div>
      </div>

      {/*  NewFeaturesRef H3 */}
      <h3
        ref={newFeaturesRef}
        style={{ textAlign: "center", marginTop: "30px" }}
      >
        5.New Features of Aceoffix V7.0
      </h3>
      <Table5Component />

      <h3
        ref={basicFeaturesRef}
        style={{ textAlign: "center", marginTop: "30px" }}
      >
        1.Basic Features
      </h3>
      <Table1Component />

      <h3
        ref={advancedFeaturesRef}
        style={{ textAlign: "center", marginTop: "30px" }}
      >
        2.ADVANCED FEATURES
      </h3>
      <Table2Component />

      <h3
        ref={completeWalkthroughRef}
        style={{ textAlign: "center", marginTop: "30px" }}
      >
        3.COMPLETE WALKTHROUGH
      </h3>
      <Table3Component />

      <h3
        ref={otherTipsRef}
        style={{ textAlign: "center", marginTop: "30px" }}
      >
        4.OTHER TIPS
      </h3>
      <Table4Component />

      {/* Buttom Copyright Information  */}
      <div id="gtco-subscribe">
        <div
          style={{ width: "100%", margin: "0 auto", backgroundColor: "#666" }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "66.666667%", textAlign: "center" }}>
              <h2>Aceoffix V7.0</h2>
              <p>Copyright 2025 Acesoftcorp.</p>
              <p>
                (This page is an Aceoffix example, for programming reference by
                programmers only and shall not be published as an independent
                website.)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Always visible scroll-to-top button  */}
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "10px 20px",
          backgroundColor: "#1890ff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        ↑ Top
      </button>
    </div>
  );
};

export default App;