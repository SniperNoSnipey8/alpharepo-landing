import React from "react";
import AlpharepScreenshot from "../../../../assets/repo.svg"
const Hero3 = () => {
  const data = {
    title: "A System of Record for your Process",
    description:
      "Know how your thesis evolves over time with a single source of truth for your investment process.",
    features: [
      "The first Excel plugin to pull hard-coded numbers directly into your existing models.",
      "Update for the latest quarter in a single click",
      "Keep your existing models and formatting, including units and signs",
      "Get notified regarding any newly disclosed line items",
    ],
  };
  const renderCell = (value, prevValue) => {
    const isIncrease = value > prevValue;
    const color = isIncrease ? "text-green-500" : "text-red-500";
    const arrow = isIncrease ? "↑" : "↓";

    return (
      <td className={`py-2 px-3 text-left ${color}`}>
        ${value} {arrow}
      </td>
    );
  };

  return (
    <div className="bg-slate-50 mt-20 p-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="">
              <div>
                <table className="w-fit text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2 px-3 text-left text-slate-600">
                        Version
                      </th>
                      <th className="py-2 px-3 text-left text-slate-600">
                        Calendar
                      </th>
                      <th className="py-2 px-3 text-left text-slate-600">
                        2024Q3
                      </th>
                      <th className="py-2 px-3 text-left text-slate-600">
                        2024Q4
                      </th>
                      <th className="py-2 px-3 text-left text-slate-600">
                        2025Q1
                      </th>
                      <th className="py-2 px-3 text-left text-slate-600">
                        2025Q2
                      </th>
                      <th className="py-2 px-3 text-left text-slate-600">
                        2025Q3
                      </th>
                      <th className="py-2 px-3 text-left text-slate-600">
                        2025Q4
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className = "text-left items-start table-row">
                      <td className="py-2 px-3 text-left">v1</td>
                      <td className="py-2 px-3 text-left">Revenue</td>
                      <td className="py-2 px-3 text-left">$100</td>
                      <td className="py-2 px-3 text-left">$110</td>
                      <td className="py-2 px-3 text-left">$120</td>
                      <td className="py-2 px-3 text-left">$130</td>
                      <td className="py-2 px-3 text-left">$140</td>
                      <td className="py-2 px-3 text-left">$150</td>
                    </tr>
                    <tr className = "text-left items-start table-row">
                      <td className="py-2 px-3 text-left">v2</td>
                      <td className="py-2 px-3 text-left">Revenue</td>
                      {renderCell(105, 100)}
                      {renderCell(115, 110)}
                      {renderCell(125, 120)}
                      {renderCell(135, 130)}
                      {renderCell(145, 140)}
                      {renderCell(155, 150)}
                    </tr>
                    <tr className = "text-left items-start table-row">
                      <td className="py-2 px-3 text-left">v1</td>
                      <td className="py-2 px-3 text-left">Expenses</td>
                      <td className="py-2 px-3 text-left">$80</td>
                      <td className="py-2 px-3 text-left">$85</td>
                      <td className="py-2 px-3 text-left">$90</td>
                      <td className="py-2 px-3 text-left">$95</td>
                      <td className="py-2 px-3 text-left">$100</td>
                      <td className="py-2 px-3 text-left">$105</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-3 text-left">v2</td>
                      <td className="py-2 px-3 text-left">Expenses</td>
                      {renderCell(78, 80)}
                      {renderCell(82, 85)}
                      {renderCell(88, 90)}
                      {renderCell(93, 95)}
                      {renderCell(98, 100)}
                      {renderCell(103, 105)}
                    </tr>
                    <tr className = "text-left items-start table-row">
                      <td className="py-2 px-3 text-left">v1</td>
                      <td className="py-2 px-3 text-left">Profit</td>
                      <td className="py-2 px-3 text-left">$20</td>
                      <td className="py-2 px-3 text-left">$25</td>
                      <td className="py-2 px-3 text-left">$30</td>
                      <td className="py-2 px-3 text-left">$35</td>
                      <td className="py-2 px-3 text-left">$40</td>
                      <td className="py-2 px-3 text-left">$45</td>
                    </tr>
                    <tr className = "text-left items-start table-row">
                      <td className="py-2 px-3 text-left">v2</td>
                      <td className="py-2 px-3 text-left">Profit</td>
                      {renderCell(27, 20)}
                      {renderCell(33, 25)}
                      {renderCell(37, 30)}
                      {renderCell(42, 35)}
                      {renderCell(47, 40)}
                      {renderCell(52, 45)}
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-center">
                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                  Update
                </button>
              </div>
            </div>

          
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-12">
          <h2 className="text-4xl font-medium text-sky-950 mb-4">
            {data.title}
          </h2>
          <p className="text-lg text-slate-700 mb-8">{data.description}</p>
          <ul className="space-y-4 mb-8">
            {data.features.map((feature, index) => (
              <li key={index} className="flex items-center text-slate-700">
                <svg
                  className="w-6 h-6 text-green-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          <button className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-full flex items-center">
            Request a demo
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div>
 
  <div className="text-zinc-600 text-sm sticky rounded-xl p-10" id="div-1">
    <div className="items-stretch auto-cols-fr grid-cols-[1fr_1fr] grid-rows-[auto] grid min-h-[30.00rem] gap-10" id="div-2">
      <div className="self-center col-span-1 row-span-1" id="div-3">
        <h3 className="text-sky-950 text-4xl mt-5 mb-6">Future-proof your Modeling Capability</h3>
        <p className="text-neutral-600 mb-3">Daloopa's offering of the deepest set of historical data available allows you to bring your A-game to an increasingly efficient market. Determine your hypothesis before the tides turn.</p>
        <div className="flex-col flex mt-8 gap-[0.63rem]">
          <div>
            <div className="items-start flex">
              <div className="bg-slate-100 items-center self-start justify-center flex w-6 h-6 rounded-full">
                <img className="align-middle inline-block w-3 h-3 max-w-full" src="https://cdn.prod.website-files.com/64faf7af7272982ba5250006/652b972129f6f7d9d2bc6c24_check.svg" />
              </div>
              Ten times more data than any other solution, neatly organized in a single Excel file
            </div>
          </div>
          <div>
            <div className="items-start flex">
              <div className="bg-slate-100 items-center self-start justify-center flex w-6 h-6 rounded-full">
                <img className="align-middle inline-block w-3 h-3 max-w-full" src="https://cdn.prod.website-files.com/64faf7af7272982ba5250006/652b972129f6f7d9d2bc6c24_check.svg" />
              </div>
              Build and seamlessly update an industry model with key players
            </div>
          </div>
          <div>
            <div className="items-start flex">
              <div className="bg-slate-100 items-center self-start justify-center flex w-6 h-6 rounded-full">
                <img className="align-middle inline-block w-3 h-3 max-w-full" src="https://cdn.prod.website-files.com/64faf7af7272982ba5250006/652b972129f6f7d9d2bc6c24_check.svg" />
              </div>
              Use Daloopa for data discovery, even if the metric stopped reporting a year ago
            </div>
          </div>
        </div>
        <div className="flex mt-3 text-white" id="div-4">
          <a className="bg-zinc-600 items-center justify-center py-5 px-6 flex max-w-full rounded-full" href="https://daloopa.com/demo" id="a-1">
            <div className="cursor-pointer">Request a demo</div>
            <img className="cursor-pointer align-middle inline-block w-5 h-2.5 max-w-full ml-3" src="https://cdn.prod.website-files.com/64faf7af7272982ba5250006/64feea728c6659c39e55fbe9_Arrow.svg" />
          </a>
        </div>
      </div>
      <img className="align-middle inline-block w-[33.75rem] h-96 max-w-full col-span-1 row-span-1 bg-white" id="img-1" src ={AlpharepScreenshot} />
    </div>
  </div>
</div>

    </div>
  );
};

export default Hero3;
