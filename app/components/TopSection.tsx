import React from "react";

const TopSection = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 p-6 bg-slate-200">
        <div className="bg-gray-200 p-4">
          <div className="flex  flex-col justify-start text-zinc-950">
            <div className="logo mb-4">
              {" "}
              <p>MigrationJunction</p>
            </div>

            <div className="quotes">
              {" "}
              <span>migration unlocks endless possibilities</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-300 p-4">
          <div className=" flex justify-end">connet us with social media</div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
