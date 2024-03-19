import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64 mt-0.5 md:mt-2">
          <ul className="hidden md:flex gap-x-6 text-white">
            <li>
              <Link href="/">
                <p>Home</p> {/* Changed <p> to <a> for proper semantic HTML and accessibility */}
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p>About</p> {/* Changed <p> to <a> */}
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <p>Contact</p> {/* Changed <p> to <a> */}
              </Link>
            </li>
          </ul>
        </div>
        {/* Right-aligned login button container */}
        <div className="hidden md:flex justify-end w-full pr-8">
          <Link href="/login">
            <p className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Login
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};




// const Navbar = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link href="/">
//             <p>Home</p>
//           </Link>
//         </li>
//         <li>
//           <Link href="/about">
//             <p>About</p>
//           </Link>
//         </li>
//         <li>
//           <Link href="/contact">
//             <p>Contact</p>
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

export default Navbar;