import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_COUNTRY } from "@/graphql/queries";

const AddCountry = ({ refetchCountries }: { refetchCountries: () => void }) => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [emoji, setEmoji] = useState("");

  const [addCountry] = useMutation(ADD_COUNTRY, {
    onCompleted: () => {
      refetchCountries();
      setName("");
      setCode("");
      setEmoji("");
    },
    onError: (error) => {
      console.error("Error adding country:", error);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addCountry({ variables: { data: { name, code, emoji } } });
  };

  return (
    <div className="addCountryContainer">
      <form onSubmit={handleSubmit}>
        <div className="formRow">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nom du pays"
            required
          />
          <input
            type="text"
            value={emoji}
            onChange={(e) => setEmoji(e.target.value)}
            placeholder="Emoji"
            required
          />
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Code du pays"
            required
          />
          <button type="submit">Ajouter le pays</button>
        </div>
      </form>
    </div>
  );
};

export default AddCountry;
