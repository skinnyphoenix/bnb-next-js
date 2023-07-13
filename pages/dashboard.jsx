import React from "react";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="wrapper">
      <p>User</p>
      <p>Settings</p>
      <p>Privacy</p>

      <button>
        {" "}
        <Link href="/"> Back to home</Link>{" "}
      </button>
    </div>
  );
};

export default Dashboard;
