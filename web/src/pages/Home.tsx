import React from "react";
import { useHelloQuery } from "../generated/graphql";
import { NavBar } from "../components";

export const HomePage: React.FC = () => {
  const { loading, data } = useHelloQuery();

  if (loading) return <>loading...</>;
  return (
    <>
      <NavBar />
      {data?.hello}
    </>
  );
};
