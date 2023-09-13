import React from "react";
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const themeLangContext = createContext();

const ContextProvider = ({ children }) => {
  return (
    <themeLangContext.provider value={{}}>{children}</themeLangContext.provider>
  );
};

export default ContextProvider;
