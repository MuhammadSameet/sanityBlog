// 'use client'
// import React, { useState, useEffect } from 'react';

// const CommentBox = () => {
//   const [comment, setComment] = useState('');
//   const [comments, setComments] = useState<string[]>([]);

//   // Load comments from localStorage on initial render
//   useEffect(() => {
//     const storedComments = localStorage.getItem('comments');
//     if (storedComments) {
//       setComments(JSON.parse(storedComments));
//     }
//   }, []);

//   // Function to add a new comment
//   const addComments = () => {
//     if (comment.trim() !== '') {
//       const updatedComments = [...comments, comment];
//       setComments(updatedComments);
//       setComment('');
//       localStorage.setItem('comments', JSON.stringify(updatedComments)); // Save to localStorage
//     }
//   };

//   return (
//     <div>
//       <h1 className="text-3x1font-bold mt-4 text-purple-500">Comment Box</h1>
//       <input
//         type="text"
//         value={comment}
//         onChange={(e) => setComment(e.target.value)}
//         placeholder="Write your comment"
//         className="border border-purple-500 mt-3 w-80 p-2"
//       />
//       <br />
//       <button
//         className="bg-purple-400 text-white w-36 mt-3"
//         onClick={addComments}
//       >
//         Add Comment
//       </button>
//       <div className="mt-2">
//         <h2>All Comments:</h2>
//         {comments.length === 0 ? (
//           <p>No comments yet. Add your comment!</p>
//         ) : (
//           <ul>
//             {comments.map((data, index) => (
//               <li key={index}>{data}</li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CommentBox;


'use client'
import React, { useState, useEffect } from 'react';

const CommentBox = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);

  useEffect(() => {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  const addComments = () => {
    if (comment.trim() !== '') {
      const updatedComments = [...comments, comment];
      setComments(updatedComments);
      setComment('');
      localStorage.setItem('comments', JSON.stringify(updatedComments));
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md dark:bg-gray-800">
      <h1 className="text-2xl font-semibold text-amber-500 mb-4 text-center">Comment Box</h1>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your comment..."
        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
        rows = {3}
      ></textarea>
      <button
        onClick={addComments}
        className="w-full mt-4 bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 rounded-lg transition duration-300"
      >
        Add Comment
      </button>
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">All Comments:</h2>
        {comments.length === 0 ? (
          <p className="text-gray-500 mt-2">No comments yet. Be the first to comment!</p>
        ) : (
          <ul className="mt-3 space-y-2">
            {comments.map((data, index) => (
              <li
                key={index}
                className="p-3 bg-gray-100 rounded-lg shadow-sm dark:bg-gray-700 text-gray-900 dark:text-gray-200"
              >
                {data}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CommentBox;
