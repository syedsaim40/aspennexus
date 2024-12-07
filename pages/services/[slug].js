// pages/services/[slug].js
import fs from 'fs';
import path from 'path';
import { useRouter } from 'next/router';

const ServicePage = ({ content, slug }) => {
  const router = useRouter();

  // Show loading state for fallback pages
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Service: {slug}</h1>
      <p>{content}</p>
    </div>
  );
};

// Generate paths based on files in the services folder
export async function getStaticPaths() {
  const servicesDir = path.join(process.cwd(), 'pages/services');
  const files = fs.readdirSync(servicesDir);

  const paths = files
    .filter((file) => file.endsWith('.js') && file !== '[slug].js') // Exclude dynamic route file
    .map((file) => ({
      params: { slug: file.replace('.js', '') },
    }));

  return {
    paths,
    fallback: true, // Allows dynamically adding new files
  };
}

// Generate content for each page
export async function getStaticProps({ params }) {
  const { slug } = params;

  // You can dynamically fetch content here, e.g., from a CMS
  const content = `This is the content for ${slug}`;

  return {
    props: { content, slug },
  };
}

export default ServicePage;
