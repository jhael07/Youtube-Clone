import React from "react";

const SectionTitle = ({ text }) => {
  const nfasis = text.split(" ")[0];

  return (
    <h1 className="ml-11 sm:ml-3 text-3xl font-semibold">
      <span className="text-red-600">{nfasis}</span>
      {text.substring(nfasis.length, text.length)}
    </h1>
  );
};

export default SectionTitle;
