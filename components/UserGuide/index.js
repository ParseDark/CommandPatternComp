import React from "react";
import Link from "next/link";

export default function UserGuide() {
  return (
    <div className="py-10 px-10">
      <div className="p-6 shadow-lg rounded-lg bg-gray-100 text-gray-700 mb-10">
        <h2 className="font-semibold text-3xl mb-5">User Guide</h2>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-6 border-gray-300" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <button
          type="button"
          className="inline-block px-6 py-2.5 mt-4 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          Learn more
        </button>
      </div>
      <ol className="border-l-2 border-blue-600">
        <li>
          <div className="flex flex-start items-center">
            <div className="bg-blue-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
            <h4 className="text-gray-800 font-semibold text-xl -mt-2">
              Step 1: Create a pr on the Repo
            </h4>
          </div>
          <div className="ml-6 mb-6 pb-6">
            <Link
              href="#!"
              className="text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm"
            >
              12 January, 2022
            </Link>
            <p className="text-gray-700 mt-2 mb-4">
              Before you start Next. Need to create a PR. Before you start Next.
              Need to create a PR. Before you start Next. Need to create a PR.
            </p>
            <button
              type="button"
              className="inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              REPO Link
            </button>
          </div>
        </li>
        <li>
          <div className="flex flex-start items-center">
            <div className="bg-blue-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
            <h4 className="text-gray-800 font-semibold text-xl -mt-2">
              Title of section 2
            </h4>
          </div>
          <div className="ml-6 mb-6 pb-6">
            <Link
              href="#!"
              className="text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm"
            >
              12 January, 2022
            </Link>
            <p className="text-gray-700 mt-2 mb-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
            <button
              type="button"
              className="inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Read more
            </button>
          </div>
        </li>
        <li>
          <div className="flex flex-start items-center">
            <div className="bg-blue-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
            <h4 className="text-gray-800 font-semibold text-xl -mt-2">
              Title of section 3
            </h4>
          </div>
          <div className="ml-6 mb-6 pb-6">
            <Link
              href="#!"
              className="text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm"
            >
              27 December, 2021
            </Link>
            <p className="text-gray-700 mt-2 mb-4">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio.
            </p>
            <button
              type="button"
              className="inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Read more
            </button>
          </div>
        </li>
        <li>
          <div className="flex flex-start items-center">
            <div className="bg-blue-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
          </div>
        </li>
      </ol>
    </div>
  );
}
