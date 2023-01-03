import Link from "next/link";
var copyrightYear = new Date().getFullYear();

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-emerald-800 mb-8 py-4">
        <div className="container mx-auto flex justify-center">
          <Link href="/">
            <a>Home</a>
          </Link>
          <span className="mx-auto">Blog</span>{" "}
        </div>
      </header>
      <main className="container mx-auto flex-1">{children}</main>
      <footer className="bg-emerald-800 mt-8 py-4">
        <div className="container mx-auto flex justify-center">
          <a href="https://andrewgrube.com">
            &copy; {copyrightYear} Andrew Grube
          </a>
        </div>
      </footer>
    </div>
  );
}
