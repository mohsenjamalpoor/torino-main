import { useQuery } from "@tanstack/react-query";

import api from "../config/api";
import QueryString from "qs";

export const useGetUserData = () => {
  const queryFn = () => api.get("/user/profile");
  const queryKey = ["user-data"];

  return useQuery({ queryFn, queryKey });
};

export const useGetTours = (query) => {
  const endpoint = "/tour?" + QueryString.stringify(query);

  const queryFn = () => api.get(endpoint);
  const queryKey = ["tour", query];

  return useQuery({ queryFn, queryKey, enabled: false });
};

export const useGetUserBasket = () => {
  const queryFn = () => api.get("/basket");
  const queryKey = ["user-basket"];

  return useQuery({ queryFn, queryKey });
};
export const useGetMyTours = () => {
  const queryFn = () => api.get("/user/tours");
  const queryKey = ["user-tours"];

  return useQuery({ queryFn, queryKey });
};
export const useGetTransactions = () => {
  const queryFn = () => api.get("/user/transactions");
  const queryKey = ["user-transactions"];

  return useQuery({ queryFn, queryKey });
};
