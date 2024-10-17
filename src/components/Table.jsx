import React, { useState } from "react";
import teams from "../const/teams";

const Table = () => {
  const [activeTab, setActiveTab] = useState(0); // Tab 1 is active initially
  const teamsPerTab = 5;

  // Calculate how many tabs we need
  const totalTabs = Math.ceil(teams.length / teamsPerTab);

  // Get the teams for the current tab
  const getTeamsForTab = (tabIndex) => {
    const startIndex = tabIndex * teamsPerTab;
    const endIndex = startIndex + teamsPerTab;
    return teams.slice(startIndex, endIndex);
  };

  return (
    <>
      <div role="tablist" className="tabs tabs-boxed">
        {[...Array(totalTabs)].map((_, index) => (
          <a
            key={index}
            role="tab"
            className={`tab ${activeTab === index ? "tab-active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            Pagina {index + 1}
          </a>
        ))}
      </div>
      <div className="overflow-x-auto flex flex-wrap gap-y-4">
        {getTeamsForTab(activeTab).map((team, index) => (
          <div key={index} className="stats shadow w-full bg-gray-800">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <div className="avatar">
                  <div className="w-16">
                    <img src={team.logo} alt={team.name} />
                  </div>
                </div>
              </div>
              <div className="stat-value">{team.posibility}%</div>
              <div className="stat-title">Tasks done</div>
              <div className="stat-desc text-secondary">31 tasks remaining</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Table;
