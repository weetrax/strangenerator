import Container from '../components/_Layout/Container';
import Head from 'next/head';
import NFTInfo from '../components/NFTInfo';
import React, { createRef, useEffect, useState } from 'react';
import Screenshotable from '../components/Screenshotable';
import { NFT } from '../types';
import { useEditor } from '../hooks/useEditor';
import type { NextPage } from "next";

const Home: NextPage = () => {
  const { backgroundColor, setBackgroundColor, primaryColor, setPrimaryColor, secondaryColor, setSecondaryColor } = useEditor()

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

  const handleSubmitStrangers = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    fetchDaApez();
  };

  return (
    <>
      <Head>
        <title>Strangers - Strangenerator</title>
        <meta name="description" content="Strangers Badge Generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        {selectedApez ? (
          <div className='my-8'>
            <p className='block text-3xl sm:text-4xl leading-none font-extrabold tracking-tight mb-10 text-white'>Generate your <span className='text-yellow-500'>Strangers</span> Badge !</p>
            <div className="grid grid-cols-1">
              <div className="col-span-1">
                <div className="my-2">
                  <div className="flex flex-col items-start gap-4">
                    <form onSubmit={handleSubmitStrangers}>
                      <label className="block text-white">Search by Id</label>
                      <input
                        className="px-2 py-1 rounded-l outline-none disabled:bg-gray-300"
                        type={"text"}
                        value={selectedApezId}
                        readOnly
                        disabled
                        onChange={(e) => setSelectedApezId(e.target.value)}
                      ></input>
                      <button
                        className="px-2 py-1 rounded-r bg-yellow-500 text-white"
                        type="submit"
                      >
                        {loading ? "Loading..." : "OK"}
                      </button>
                    </form>
                    <div className="flex flex-wrap gap-y-2 gap-x-6">
                      <div>
                        <label className="block text-white">Background color</label>
                        <input type={"color"} className="rounded" value={backgroundColor} onChange={(e) => setBackgroundColor(e.target.value)} />
                      </div>
                      <div>
                        <label className="block text-white">Primary color</label>
                        <input type={"color"} className="rounded" value={primaryColor} onChange={(e) => setPrimaryColor(e.target.value)} />
                      </div>
                      <div>
                        <label className="block text-white">Secondary color</label>
                        <input type={"color"} className="rounded" value={secondaryColor} onChange={(e) => setSecondaryColor(e.target.value)} />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Screenshotable>
                    <NFTInfo nft={selectedApez} />
                  </Screenshotable>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-white py-4">Loading...</p>
        )}
      </Container>
    </>
  );
};

export default Home;
