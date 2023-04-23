import { Button, ButtonGroup, Input, Media, Text } from '@particles/tailwind';
import { SiteLayout } from '../../components';

export default function LandingPagePage() {
  return (
    <SiteLayout>
      <section className="mx-auto my-12 max-w-6xl">
        <div className="grid grid-cols-2">
          <div>
            <span>Join our remote team</span>
            <Text as="h1" variant="display-xl">
              Smart business credit cards
            </Text>
            <Text as="p" variant="lead">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more.
            </Text>
            <div>
              <Input />
              <Button>Get started</Button>
              <Text>We care about your data in our privacy policy.</Text>
            </div>
          </div>
          <div>Image</div>
        </div>
      </section>

      <section className="mx-auto my-12 max-w-6xl">
        <Text>Features</Text>
        <Text as="h2" variant="display">
          Stop leaving money on the table
        </Text>
        <Text as="p" variant="lead">
          Spend smarter, lower your bills, get cashback on everything you buy,
          and unlock credit to grow your business.
        </Text>
        <div className="grid grid-cols-2">
          <div>
            <Media>
              <Media.Image>Icon</Media.Image>
              <Media.Body>
                <Text as="h3">Unlimited cards</Text>
                <Text as="p">
                  Give your team the autonomy they need with access to as many
                  cards as they need. Authorise purchases with a click. Simple.
                </Text>
                <Button>Learn more</Button>
              </Media.Body>
            </Media>
            <Media>
              <Media.Image>Icon</Media.Image>
              <Media.Body>
                <Text as="h3">Easy expense policies</Text>
                <Text as="p">
                  Every card comes with configurable spending limits, purchase
                  restrictions, and cancellations for each employee and team.
                </Text>
                <Button>Learn more</Button>
              </Media.Body>
            </Media>
            <Media>
              <Media.Image>Icon</Media.Image>
              <Media.Body>
                <Text as="h3">Advanced analytics</Text>
                <Text as="p">
                  An all-in-one platform that helps you balance everything your
                  team need to be happy and your finances in order.
                </Text>
                <Button>Learn more</Button>
              </Media.Body>
            </Media>
          </div>
          <div>Image</div>
        </div>
      </section>
      <section className="mx-auto my-12 max-w-6xl">
        <div className="grid grid-cols-2">
          <div>
            <Text as="h2" variant="display">
              No long-term contracts.
              <br />
              No catches.
            </Text>
            <Text as="p" variant="lead">
              Start your 30-day free trial today.
            </Text>
            <ButtonGroup>
              <Button palette="secondary">Learn more</Button>
              <Button>Get started</Button>
            </ButtonGroup>
          </div>
          <div>Image</div>
        </div>
      </section>
    </SiteLayout>
  );
}
