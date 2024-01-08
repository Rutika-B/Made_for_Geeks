import * as React from "react";

function Intro({children}) {
  return (
    <>
      <div class="p-2 w-full">
        <div class="p-2 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div class="items-center justify-center mb-4 rounded">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
