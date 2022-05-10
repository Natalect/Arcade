import React from "react";
import Header from "../components/Header";
import { getSession } from "next-auth/client";
import Head from "next/head";

export default function Games() {
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook</title>
      </Head>

      <Header />

      <main className="flex"></main>
    </div>
  );
}
