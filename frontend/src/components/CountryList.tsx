import React from "react";
import Link from "next/link";
import { Country, CountryListProps } from "@/types";
import AddCountry from "./AddCountry";

const CountryList = ({
  countries,
  refetchCountries,
}: CountryListProps & { refetchCountries: () => void }) => (
  <>
    <div className="headerCountry">
      <h1>Checkpoint: frontend</h1>
      <p>Countries</p>
    </div>
    <div>
      <AddCountry refetchCountries={refetchCountries} />
    </div>
    <div className="country-container">
      {countries.map((country: Country) => (
        <div className="country-card" key={country.code}>
          <Link href={`/country/${country.code}`}>
            <div className="country-content">
              <h3>{country.name}</h3>
              <span className="emoji">{country.emoji}</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </>
);

export default CountryList;
