import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="w-full sticky top-0 bg-sky-500" style={{ height: '60px' }}>
      <div className="w-full flex justify-between items-center px-8">
        {/* Navigation links with bottom margin */}
        <ul className="flex gap-x-6 mb-11">
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
            <p>Login</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
