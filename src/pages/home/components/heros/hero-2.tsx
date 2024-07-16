import React from "react";

function Hero2() {
  return (
    <div
      className="text-zinc-900 text-sm max-w-[90.75rem] mx-auto  xl:max-w-[75.00rem] mt-20"
      id="div-1"
    >
      <div className="items-center flex-col text-center flex max-w-[36.25rem] mx-auto mb-8">
        <div className="bg-white items-center font-medium justify-center py-1.5 px-4 uppercase inline-block w-auto rounded-3xl">
          <div className="items-center flex space-x-2 border-md border rounded-lg p-1 px-2">
            <div className="bg-emerald-200 w-1.5  h-1.5 rounded-xl" />
            <span>What Alpharepo Does</span>
          </div>
        </div>
        <h2 className="text-slate-900 text-[3rem] leading-none mt-5 mb-8">
            Bring your entire investment process under one roof. 
        </h2>
      </div>
      <div
        className="items-start auto-cols-fr grid-cols-[1fr_1fr_1fr] grid-rows-[auto] grid gap-10"
        id="div-2"
      >
        <div className="col-span-1 row-span-1">
          <div
            className="bg-white items-center self-center justify-center flex min-h-[15.00rem] rounded-xl p-10 xl:min-h-[16.25rem]"
            id="div-3"
          >
            <img
              className="align-middle inline-block w-72 h-44 max-w-full"
              src="https://cdn.prod.website-files.com/64faf7af7272982ba5250006/650c1a91fc961030e33057ac_Frame%20302.svg"
            />
          </div>
          <h6 className="text-xl mt-8 mb-5 font-medium font-medium">Use the Best Data Available</h6>
          <p className="text-slate-600 mb-3">
            We won’t argue about whether modeling is a science or an art, but we
            know it matters that you use the best data to start with. Daloopa
            extracts and organizes data from millions of financial reports,
            investor presentations, and supplemental data files to jump start
            your process.
          </p>
        </div>
        <div className="col-span-1 row-span-1">
          <div
            className="bg-white items-center self-center justify-center flex min-h-[15.00rem] rounded-xl p-10 xl:min-h-[16.25rem]"
            id="div-4"
          >
            <img
              className="align-middle inline-block w-64 h-44 max-w-full"
              src="https://cdn.prod.website-files.com/64faf7af7272982ba5250006/650c1b08def29145cd299355_Frame%20304.svg"
            />
          </div>
          <h6 className="text-xl mt-8 mb-5 font-medium">
            Turn Stale Models Into New Ideas
          </h6>
          <p className="text-slate-600 mb-3">
            Stale models weighing you down? Whether you use our data sheets,
            your own models, or someone else’s, take a load off of your plate
            with Daloopa’s one-click updating to fill in any and all missing
            quarters in your existing formatting as hard-coded numbers.
          </p>
        </div>
        <div className="col-span-1 row-span-1">
          <div
            className="bg-white items-center self-center justify-center flex min-h-[15.00rem] rounded-xl p-10 xl:min-h-[16.25rem]"
            id="div-5"
          >
            <img
              className="align-middle inline-block w-64 h-36 max-w-full"
              src="https://cdn.prod.website-files.com/64faf7af7272982ba5250006/650c1b1988a961c5c34dad48_Frame%20248.svg"
            />
          </div>
          <h6 className="text-xl mt-8 mb-5 font-medium">Build the Ultimate Screener</h6>
          <p className="text-slate-600 mb-3">
            We know you’ve got a lot on your mind. It’s hard enough maintaining
            just your portfolio companies during earnings season, much less
            tracking the entire industry. With Daloopa's KPI builder, step back
            and get an easy bird’s eye view with automatic updates each quarter.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
