import { domNodeToPDF } from "../utils/htmlToPDF";
import CommandPalette from "./CommandPalette";
import Header from "./Header";

export const siteTitle = "Devops Team";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="absolute flex space-x-2 justify-center top-64">
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={() => domNodeToPDF("#pdf-dom", "dashboard")}
        >
          download PDF
        </button>
      </div>
      <div className="px-20 mt-24" style={{ position: "absolute", top: 10000 }}>
        <main>{children}</main>
        <CommandPalette />
      </div>
    </div>
  );
}
