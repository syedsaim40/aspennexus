// // pages/services/index.js
// import fs from 'fs';
// import path from 'path';
// import Link from 'next/link';

// const ServicesIndex = ({ services }) => {
//   return (
//     <div>
//       <h1>All Services</h1>
//       <ul>
//         {services.map((service) => (
//           <li key={service}>
//             <Link href={`/services/${service}`}>
//               <Link>{service}</Link>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export async function getStaticProps() {
//   const servicesDir = path.join(process.cwd(), 'pages/services');
//   const files = fs.readdirSync(servicesDir);

//   const services = files
//     .filter((file) => file.endsWith('.js') && file !== 'index.js' && file !== '[slug].js')
//     .map((file) => file.replace('.js', ''));

//   return {
//     props: { services },
//   };
// }

// export default ServicesIndex;
