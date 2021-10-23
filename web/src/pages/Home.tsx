import React from "react";
import { useHelloQuery } from "../generated/graphql";
import { NavBar, Nutrition } from "../components";

export const HomePage: React.FC = () => {
  const { loading, data } = useHelloQuery();

  if (loading) return <>loading...</>;
  return (
    <>
      <NavBar />
      <Nutrition />
      {data?.hello}
    </>
  );
};
