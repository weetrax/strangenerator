import * as React from "react";
import PropTypes from "prop-types";
import { NFT } from "../../types";

type NFTInfoProps = {
  nft: NFT;
};

const NFTInfo: React.FC<NFTInfoProps> = ({ nft }) => {
  return (
    <div className="grid grid-cols-12 gap-2 justify-center h-full p-2 items-center">
      <div className="col-span-6 flex items-center">
        <img
          className="rounded"
          src={nft.url}
          style={{ maxHeight: "350px" }}
        ></img>
      </div>
      <div className="col-span-6">
        <p className="mb-3">
          <span className="block font-bold text-3xl text-yellow-600">Name</span>
          <span className="text-lg font-bold">{nft.name}</span>
        </p>
        <p className="mb-3">
          <span className="block font-bold text-3xl text-yellow-600">
            Token
          </span>
          <span className="text-lg font-bold">{nft.identifier}</span>
        </p>
        <p className="mb-3">
          <span className="block font-bold text-3xl text-yellow-600">
            Owner
          </span>
          <a
            href={`https://explorer.elrond.com/accounts/${nft.owner}`}
            target={"_blank"}
            rel="noreferrer"
            className="text-lg font-bold block whitespace-nowrap text-ellipsis overflow-hidden"
          >
            {nft.owner}
          </a>
        </p>
        <p className="mb-3">
          <span className="leading-5 block font-bold text-3xl text-yellow-600">
            Blockchain
          </span>
          <a
            href="https://elrond.com/"
            target={"_blank"}
            rel="noreferrer"
            className="text-lg font-bold"
          >
            Elrond
          </a>
        </p>
        <p className="mb-3">
          <span className="leading-5 block font-bold text-3xl text-yellow-600">
            Collection
          </span>
          <span className="text-lg font-bold">{nft.collection}</span>
        </p>
      </div>
    </div>
  );
};

NFTInfo.propTypes = {
  //
};

export default NFTInfo;
