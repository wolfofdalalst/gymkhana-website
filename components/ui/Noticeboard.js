import React from 'react';
import { Bounce, Fade } from "react-awesome-reveal";

const NoticeBoard = () => {
  return (
    <Fade>
    <div className="p-5 mt-10 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Notice Board</h2>
      <p>Important announcements and notices will be displayed here.</p>
      {/* Add more content or notices here */}
    </div>
    </Fade>
  );
};

export default NoticeBoard;
