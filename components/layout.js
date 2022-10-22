import CommandPalette from "./CommandPalette";
import Header from "./Header";

export const siteTitle = "Devops Team";

export default function Layout({ children }) {
  return (
    <div>
      {/* <Header /> */}
      <div className="px-20 mt-24">
        <main>{children}</main>
        <CommandPalette />
      </div>
    </div>
  );
}
