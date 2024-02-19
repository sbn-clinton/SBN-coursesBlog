import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";
import React from "react";

async function fetchRepo(name) {
  const response = await fetch(
    `https://api.github.com/repos/bradtraversy/${name}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  const repo = await response.json();
  return repo;
}
const Repo = async ({ name }) => {
  const repo = await fetchRepo(name);

  return (
    <div>
      <div className="card-body">
        <h3 className="card-title">{repo.name}</h3>
        <p className="card-text">{repo.description}</p>
      </div>
      <div className="card-footer">
        <span className="mx-2">
          <FaStar className="text-info" /> {repo.stargazers_count}
        </span>
        <span className="mx-2">
          <FaCodeBranch className="text-info" /> {repo.forks_count}
        </span>
        <span className="mx-2">
          <FaEye className="text-info" /> {repo.watchers_count}
        </span>
      </div>
    </div>
  );
};

export default Repo;
