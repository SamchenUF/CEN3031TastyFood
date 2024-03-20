import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="w-full h-20 sticky mt-4 md:mt-8">
      <div className="w-full flex justify-between items-center px-8">
        {/* Left-aligned navigation links */}
        <ul className="flex gap-x-6">
          <li>
            <Link href="/">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <p>About</p>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <p>Contact</p>
            </Link>
          </li>
        </ul>
        {/* Right-aligned login button */}
        <div>
          <Link href="/login">
            <p className="bg-sky-500 hover:bg-sky-700 py-2 px-4 rounded">
              Login
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
