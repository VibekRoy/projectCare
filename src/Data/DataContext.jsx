/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import axios from "axios";

const username = import.meta.env.VITE_USERNAME;
const password = import.meta.env.VITE_PASSWORD;
const apiURL = import.meta.env.VITE_API_URL;

export const ContextAPI = createContext();

export const ContextProvider = ({ children }) => {
  const [res, setRes] = useState([]);
  const [patient, setPatient] = useState({});
  useEffect(() => {
    const handleRequest = async () => {
      const response = await axios

        .get(apiURL, {
          auth: {
            username: username,
            password: password,
          },
        })
        .then((resp) => {
          setRes(resp.data);
          setPatient(resp.data[3]);
        })
        .catch((e) => {
          console.log(e);
        });
      return response;
    };

    handleRequest();
  }, []);

  return (
    <ContextAPI.Provider value={{ res, patient, setPatient }}>
      {children}
    </ContextAPI.Provider>
  );
};
