import React, { useState, useEffect } from "react";
import "./Memos.css";

const Memos = ({ state }) => {
  const [memos, setMemos] = useState([]);
  const { contract } = state;

  useEffect(() => {
    const fetchMemos = async () => {
      if (contract) {
        const memos = await contract.getMemos();
        setMemos(memos);
      }
    };

    fetchMemos();
  }, [contract]);

  return (
    <>
      {memos.map((memo, index) => (
        <div key={index} className="memo-container">
          <p>{memo.name}</p>
          <p>{memo.message}</p>
          <p className="memo-info">
            {new Date(memo.timestamp * 1000).toLocaleString()}
          </p>
          <p className="memo-info">{memo.from}</p>
        </div>
      ))}
    </>
  );
};

export default Memos;
