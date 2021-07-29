import React from "react";
import { useSelector } from "react-redux";
import ExpenseList from "../../components/expense-list";
import Footer from "../../components/footer";
import Header from "../../components/header";
import TopFold from "../../components/top-fold";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <Header />
      <TopFold />
      <ExpenseList />
      <Footer />
    </div>
  );
};

export default Home;