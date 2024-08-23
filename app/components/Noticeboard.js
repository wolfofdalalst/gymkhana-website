import React from 'react';
import { Bounce } from "react-awesome-reveal";

const NoticeBoard = () => {
  return (
    <Bounce>
    <div className="p-4 mt-12 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Notice Board</h2>
      <p>Important announcements and notices will be displayed here.</p>
      {/* Add more content or notices here */}
    </div>
    </Bounce>
  );
};

export default NoticeBoard;
