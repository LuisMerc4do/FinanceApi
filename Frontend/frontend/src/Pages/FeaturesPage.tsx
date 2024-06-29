import React from "react";

type Props = {};

const FeaturesPage = (props: Props) => {
  return (
    <div className="rounded-sm border my-10 mx-10 border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="text-center px-30 py-10">
        <h1 className="text-3xl font-bold mb-4">Penguin FinanceApp</h1>
        <p className="mb-6">
          A modern, responsive finance application that allows users to search
          stocks using{" "}
          <a
            href="https://site.financialmodelingprep.com/"
            className="text-blue-500 underline"
          >
            Financial Modeling Prep API
          </a>
          . It stores viewed stocks in the database when added to a portfolio or
          commented on, allows viewing of stock information directly from the
          API, company profiles, posting comments, dynamically creating new
          stocks, user creation, login, and authorization.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Overview</h2>
        <p className="mb-6">
          The Finance App is designed to provide users with a comprehensive
          platform for managing and discussing stock information. Users can view
          stock details, post comments, and dynamically create new stocks if
          they don't already exist in the system.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Features</h2>
        <ul className="list-disc list-inside mb-6 text-balance inline-block">
          <li>View stock information</li>
          <li>Post and view comments on stocks</li>
          <li>Dynamic stock creation via finance API</li>
          <li>User authentication and authorization</li>
          <li>Identity Framework user creation and login</li>
          <li>Create portfolios</li>
          <li>
            Store the stock viewed in the API inside the database when added to
            portfolio or comment
          </li>
          <li>Relational databases</li>
          <li>Entity Framework usage</li>
          <li>Token usage</li>
          <li>Middleware</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">Technologies Used</h2>
        <ul className="list-disc list-inside mb-6 text-balance inline-block">
          <li>
            <strong>API:</strong> Financial Modeling Prep API
          </li>
          <li>
            <strong>Backend:</strong> ASP.NET Core, Entity Framework
          </li>
          <li>
            <strong>Database:</strong> Microsoft SQL Server
          </li>
          <li>
            <strong>Authentication:</strong> Identity Framework, JWT Tokens
          </li>
          <li>
            <strong>Frontend:</strong> Tailwind CSS, React.js, Typescript
          </li>
          <li>
            <strong>CI/CD:</strong> GitHub Actions
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">Acknowledgments</h2>
        <p>Special thanks to Financial Modeling Prep for providing the API.</p>
        <p></p>
        <h2 className="text-2xl font-semibold mb-3">
          Past Versions Screenshots
        </h2>
        <div className="screenshots">
          <img
            src="https://github.com/LuisMerc4do/FinanceApi/assets/163725779/2a2980bb-f560-4f3c-a377-2289c23795ed"
            alt="Screenshot 1"
          />
          <img
            src="https://github.com/LuisMerc4do/FinanceApi/assets/163725779/c5867fff-28a3-4139-a5d1-d8be23bad620"
            alt="Screenshot 2"
          />
          <img
            src="https://github.com/LuisMerc4do/FinanceApi/assets/163725779/d006b55b-c30c-4978-855b-25811298dfdf"
            alt="Screenshot 3"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
