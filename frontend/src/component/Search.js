import React, { Fragment, useState } from "react";

const Search = () => {
  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      //   history.pushState(`/products/${keyword}`);
    }
  };
  return (
    <Fragment>
      <form action="seachBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a Product ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
      </form>
    </Fragment>
  );
};

export default Search;
