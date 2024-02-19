import Repo from "@/app/components/Repo";
import React from "react";
import Link from "next/link";
import RepoDirs from "@/app/components/RepoDirs";
import { Suspense } from "react";

const RepoPage = ({ params: { name } }) => {
  return (
    <div>
      <div className="card">
        <Link className="mx-3 mt-2" href="/code/repos">
          Back To Respositories
        </Link>
        <Suspense fallback={<div className="mx-3">Loading repo...</div>}>
          <Repo name={name} />
        </Suspense>
        <Suspense fallback={<div className="mx-3">Loading directories...</div>}>
          <RepoDirs name={name} />
        </Suspense>
      </div>
    </div>
  );
};

export default RepoPage;
