import React from "react";

const HomeCard = () => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
      <div className="h-[13rem] w-[10rem]" >
        <img className="object-cover object-top h-full w-full" src="https://imgs.search.brave.com/Eh_YJxRC9-zo3hko-lG2XoSA3z-l92pTqCU63neeyyA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wZW9w/bGUuY29tL3RobWIv/T2NHODR6S3p5SXdJ/SC10REY4ZTBQaG5X/Q2NrPS80MDAweDAv/ZmlsdGVyczpub191/cHNjYWxlKCk6bWF4/X2J5dGVzKDE1MDAw/MCk6c3RyaXBfaWNj/KCk6Zm9jYWwoNjQ3/eDI1Mjo2NDl4MjU0/KS9BdWd1c3QtTW9v/bi0wNDI1MjQtMS03/MDRkNDVmMTNjNWI0/ZTU1YjVkMzgwMjNj/YzRhZTczZS5qcGc" />
      </div>
      <div className="p-4">
        <h2 className=" text-xl font-medium text-gray-900 mt-5">Item 1</h2>
        <p className="text-gray-400">black tee with hot inked model</p>
      </div>
    </div>
  );
};

export default HomeCard;
