import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { createRef, useEffect, useRef, useState } from "react";
import NFTInfo from "../components/NFTInfo";
import Container from "../components/_Layout/Container";
import { NFT } from "../types";
import Screenshot from "../components/Screenshot";

const Home: NextPage = () => {
  const [selectedApezId, setSelectedApezId] = useState<string>("337");
  const [selectedApez, setSelectedApez] = useState<NFT | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const ref = createRef();

  const fetchDaApez = () => {
    fetch(
      `https://api.elrond.com/collections/DAPEZ-c88658/nfts?name=${selectedApezId}&withOwner=true`,
      {
        method: "GET",
      }
    )
      .then((response) => {
        response.json().then((json) => {
          console.log(json);
          if (json && Array.isArray(json) && Array.from(json).length > 0) {
            setSelectedApez(json[0]);
          } else {
            setSelectedApez(null);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchDaApez();
  }, []);

  const handleSubmitApez = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    fetchDaApez();
  };

  return (
    <>
      <Head>
        <title>DaApez - DaApezator</title>
        <meta name="description" content="Generate DaApez badge info" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        {selectedApez ? (
          <div className="grid grid-cols-1 my-8">
            <div className="col-span-1">
              <div className="my-2">
                <div className="flex justify-between items-end">
                  <form onSubmit={handleSubmitApez}>
                    <label className="block text-white">Search by Id</label>
                    <input
                      className="px-2 py-1 rounded-l outline-none"
                      type={"text"}
                      value={selectedApezId}
                      onChange={(e) => setSelectedApezId(e.target.value)}
                    ></input>
                    <button
                      className="px-2 py-1 rounded-r bg-yellow-400 text-white"
                      type="submit"
                    >
                      {loading ? "Loading..." : "OK"}
                    </button>
                  </form>
                </div>
              </div>
              <div className="bg-yellow-400 rounded">
                <NFTInfo nft={selectedApez} />
              </div>
            </div>
          </div>
        ) : (
          <p className="text-white">Loading...</p>
        )}
      </Container>
    </>
  );
};

export default Home;
