// pages/services/[slug].js
import fs from 'fs';
import path from 'path'; // Add this line
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';


const ServicePage = ({ slug }) => {
  const router = useRouter();

  // Show loading state for fallback pages
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // Dynamically import the service component
  const ServiceComponent = dynamic(() =>
    import(`../../services/${slug}`).catch(() => null)
  );

  if (!ServiceComponent) {
    return <div>Service not found</div>;
  }

  return (
    <div>
      {/* <h1>Service: {slug}</h1> */}
      <ServiceComponent />
    </div>
  );
};

// Generate paths based on files in the services folder
export async function getStaticPaths() {
  const servicesDir = path.join(process.cwd(), 'services'); // Adjust to the correct folder path
  const files = fs.readdirSync(servicesDir);

  // Filter to only .js files
  const paths = files
    .filter((file) => file.endsWith('.js'))
    .map((file) => ({
      params: { slug: file.replace('.js', '') },
    }));

  return {
    paths,
    fallback: true, // Allows dynamically adding new files
  };
}

// Generate props for each page
export async function getStaticProps({ params }) {
  const { slug } = params;

  return {
    props: { slug },
  };
}

export default ServicePage;
