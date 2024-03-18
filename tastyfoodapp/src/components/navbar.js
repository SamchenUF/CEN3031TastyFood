import Link from 'next/link';
const Navbar = () => {
  return (
    <>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
            <ul className="hidden md:flex gap-x-6 text-white">
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