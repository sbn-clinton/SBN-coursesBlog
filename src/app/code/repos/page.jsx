import React from "react";
import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepos() {
  const response = await fetch(
    "https://api.github.com/users/bradtraversy/repos",
    {
      next: {
        revalidate: 60,
      },
    }
  );

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const repos = await response.json();
  return repos;
}

const RepoPage = async () => {
  const repos = await fetchRepos();

  return (
    <div className="mb-5">
      <h2>Repositories</h2>
      <div className="">
        {repos.map((repo) => (
          <Link
            className="text-decoration-none"
            href={`/code/repos/${repo.name}`}
            key={repo.id}
          >
            <div className="card my-2 ">
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RepoPage;
