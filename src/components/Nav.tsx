// // components/Nav.tsx
// import React from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/router';

// interface NavLinkProps {
//   href: string;
//   label: string;
// }

// const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
//   const router = useRouter();
//   const isActive = router.pathname === href;

//   return (
//     <Link href={href} passHref>
//       <a
//         style={{
//           padding: '10px 15px',
//           textDecoration: 'none',
//           color: isActive ? 'blue' : 'black',
//           fontWeight: isActive ? 'bold' : 'normal',
//         }}
//       >
//         {label}
//       </a>
//     </Link>
//   );
// };

// const Nav: React.FC = () => {
//   return (
//     <nav
//       style={{
//         display: 'flex',
//         justifyContent: 'space-around',
//         padding: '20px',
//         backgroundColor: '#f5f5f5',
//       }}
//     >
//       <NavLink href="/" label="Home" />
//       <NavLink href="/about" label="About" />
//       {/* <NavLink href="/products" label="Products" /> */}
//       {/* <NavLink href="/contact" label="Contact" /> */}
//     </nav>
//   );
// };

// export default Nav;
