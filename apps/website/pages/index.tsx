import Link from 'next/link';
import { Button, Card, Text } from '@particles/tailwind';
import Layout from '../components/Layout';

export function Index() {
  return (
    <Layout>
      <Text as="h1" variant="display-xl">
        Elevate your design system
      </Text>
      <Text as="p" variant="lead">
        Particles is a set of tools to create amazing design system. Never start
        from scratch again
      </Text>
      <Button as={Link} href="docs/installation">
        Get started
      </Button>
      <h2>Features</h2>
      <Card>
        <h3>Primitive components</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio magni
          necessitatibus assumenda numquam, quis ea officiis tenetur quo atque,
          nobis eveniet. Quisquam non error vero placeat earum eaque expedita.
          Optio.
        </p>
      </Card>
      <Card>
        <h3>Theme tokens</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio magni
          necessitatibus assumenda numquam, quis ea officiis tenetur quo atque,
          nobis eveniet. Quisquam non error vero placeat earum eaque expedita.
          Optio.
        </p>
      </Card>
      <Card>
        <h3>CLI</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio magni
          necessitatibus assumenda numquam, quis ea officiis tenetur quo atque,
          nobis eveniet. Quisquam non error vero placeat earum eaque expedita.
          Optio.
        </p>
      </Card>
      <h2>Blocks</h2>
      <h2>Examples</h2>
    </Layout>
  );
}

export default Index;
