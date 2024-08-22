import ButtonV1 from "@pixaui/button-v1";
import ButtonV2 from "@pixaui/button-v2";
import ButtonV3 from "@pixaui/button-v3";
import ButtonV5 from "@pixaui/button-v5";
import React from "react";

const Home = () => {
  return (
    <>
      Home
      <div className="flex h-full w-screen items-center justify-between bg-white p-12">
        <ButtonV1 title="ButtonV1" color="#212121" />
        <ButtonV2 title="ButtonV2" color="#212121" />
        <ButtonV3 title="ButtonV3" color="#212121" />
        <ButtonV5 title="ButtonV5" color="#212121" />
      </div>
    </>
  );
};

export default Home;
