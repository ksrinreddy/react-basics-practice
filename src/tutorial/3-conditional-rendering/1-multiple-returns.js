import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => {
  //       if (response.status >= 200 && response.status <= 299) {
  //         return response.json();
  //       } else {
  //         setIsLoading(false);
  //         setIsError(true);
  //         throw new Error(response.statusText);
  //       }
  //     })
  //     .then((user) => {
  //       const { login } = user;
  //       setUser(login);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  const getUser = async () => {
    const response = await fetch(url);
    if (response.status >= 200 && response.status <= 299) {
    } else {
      setIsLoading(false);
      setIsError(true);
      // write code to catch error
    }
    const user = await response.json();
    console.log(user);
    const { login } = user;
    setUser(login);
    setIsLoading(false);
  };

  useEffect(() => {
    getUser();
  });

  if (isLoading) {
    return (
      <>
        <h2>Loading...</h2>
      </>
    );
  } else if (isError) {
    return (
      <>
        <h2>Error...</h2>
      </>
    );
  } else {
    return (
      <>
        <h2>{user}</h2>
      </>
    );
  }
};
export default MultipleReturns;
