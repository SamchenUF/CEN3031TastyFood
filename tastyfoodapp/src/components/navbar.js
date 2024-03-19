import Link from 'next/link';
const Navbar = () => {
  return (
      <div className="w-full h-20 sticky top-0">
        <div className="w-full container mx-auto px-4 h-full">
            <ul className="flex justify-between items-center h-full"> 
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