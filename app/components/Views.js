import axios from "axios";
import React, { useEffect, useState } from "react";

const Views = () => {
  const [views, setViews] = useState(null);

  useEffect(() => {
    const getViews = async () => {
      try {
        const response = await axios.get(
          "https://port-backend-new.onrender.com/get-views"
        );
        setViews(response?.data?.views?.view);
      } catch (error) {
        console.error("Error fetching views:", error);
      }
    };
    getViews();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-4 text-center text-gray-600 dark:text-gray-400 text-sm">
      <p>© {new Date().getFullYear()} Sarang Padulkar</p>
      <p>Portfolio viewed by {views ?? "--"} people</p>
    </div>
  );
};

export default Views;
