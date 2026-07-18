"use client";

import { useGetMyTours } from "@/core/services/queries";
import React from "react";

function MyToursPage() {
  const { data } = useGetMyTours();
  console.log(data, "2525");
  return <div>MyTours</div>;
}

export default MyToursPage;
