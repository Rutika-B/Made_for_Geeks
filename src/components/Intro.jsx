import * as React from "react";

function Intro({children}) {
  return (
    <>
      <div class="p-4 w-full">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div class="grid grid-cols-3 gap-4 mb-4"></div>
          <div class="flex items-center justify-center h-96 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            {children}
          </div>
          <div class="grid grid-cols-2 gap-4 mb-4"></div>
        </div>
      </div>
    </>
  );
}

export default Intro;
