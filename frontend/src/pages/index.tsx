import React from "react";
import { useQuery } from "@apollo/client";
import CountryList from "../components/CountryList";
import { GET_COUNTRIES } from "@/graphql/queries";

const Home = () => {
  const { loading, error, data, refetch } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <CountryList countries={data.countries} refetchCountries={refetch} />;
};

export default Home;
