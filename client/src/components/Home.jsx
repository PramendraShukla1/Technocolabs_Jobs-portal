import React, { useEffect, useState } from "react";
import "../styles/home.css";
import Card from "./Card";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5002/getAllJobs", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "jobs");
        setData(data.data);
      });
  }, []);

  return (
    <div className="home">
      {data.map((e) => {
        return <Card title={e.title} minsal={e.minsal} maxsal={e.maxsal} description={e.description} hiringcompany={e.hiringcompany} email={e.email} phnumber={e.phnumber} address={e.address} image={e.image}/>;
      })}
    </div>
  );
};

export default Home;
