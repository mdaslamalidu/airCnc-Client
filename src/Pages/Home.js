import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExpCard from "../Components/Card/ExpCard";
import SearchForm from "../Components/Form/SearchForm";
const Home = () => {
  const [loading, setLoadig] = useState(false);
  const [exAllData, setExAllData] = useState("");

  useEffect(() => {
    fetch("expdata.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setExAllData(data);
      });
  }, []);
  return (
    <div className="md:flex justify-center gap-10 px-6 md:px-10 lg:px-20">
      <div className="mt-4">
        <SearchForm></SearchForm>
      </div>
      <div className="flex-1">
        <div>
          <h1>Home</h1>
        </div>
        <div className="container pb-8 pt-2 mx-auto">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold">Experience</h2>
            <Link to="/coming-soon">
              <h2 className="text-xl font-bold">See All</h2>
            </Link>
          </div>
          <div className="flex flex-wrap">
            {exAllData.map((exp, index) => (
              <ExpCard key={index} exp={exp}></ExpCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
