import { FiCalendar, FiDownload, FiFilter, FiSearch } from 'react-icons/fi';
import {
  Avatar,
  Badge,
  Box,
  Button,
  ButtonGroup,
  Card,
  Checkbox,
  Container,
  Heading,
  Input,
  Level,
  Media,
  Pagination,
  Table,
  Tabs,
  Text,
} from '@particles/emotion';
import { Layout } from './components/Layout';

export default function Application() {
  return (
    <Layout>
      <Container>
        <Level sx={{ mb: '$lg' }}>
          <Box>
            <Heading as="h1" variant="title">
              Trade history
            </Heading>
            <Heading as="h2" variant="subtitle">
              View your team&apos;s trades and transactions.
            </Heading>
          </Box>
          <ButtonGroup>
            <Button variant="outline" palette="neutral" icon={<FiDownload />}>
              Export
            </Button>
            <Button>Add trade</Button>
          </ButtonGroup>
        </Level>
        <Tabs activeTab="all-trades">
          <Tabs.List>
            <Tabs.Tab value="all-trades">All trades</Tabs.Tab>
            <Tabs.Tab value="buy">Buy</Tabs.Tab>
            <Tabs.Tab value="sell">Sell</Tabs.Tab>
          </Tabs.List>
          <Tabs.Pane value="all-trades">
            <Level sx={{ my: '$md' }}>
              <Input placeholder="Search for trades" icon={<FiSearch />} />
              <ButtonGroup>
                <Button
                  variant="outline"
                  palette="neutral"
                  icon={<FiCalendar />}
                >
                  Jan 6, 2022 - Jan 13, 2022
                </Button>
                <Button variant="outline" palette="neutral" icon={<FiFilter />}>
                  Filters
                </Button>
              </ButtonGroup>
            </Level>
            <Card>
              All trades
              <Table>
                <thead>
                  <Table.Row>
                    <Table.Heading>
                      <Checkbox />
                    </Table.Heading>
                    <Table.Heading>Trade</Table.Heading>
                    <Table.Heading>Order amount</Table.Heading>
                    <Table.Heading>Delivery date</Table.Heading>
                    <Table.Heading>Status</Table.Heading>
                    <Table.Heading>Executed by</Table.Heading>
                    <Table.Heading></Table.Heading>
                  </Table.Row>
                </thead>
                <tbody>
                  <Table.Row>
                    <Table.Cell>
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell>TSLA BUY</Table.Cell>
                    <Table.Cell>$30,021.23</Table.Cell>
                    <Table.Cell>Jan 13, 2022</Table.Cell>
                    <Table.Cell>
                      <Badge>Processing</Badge>
                    </Table.Cell>
                    <Table.Cell>
                      <Media>
                        <Media.Image>
                          <Avatar
                            src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=48&q=80"
                            alt="An avatar"
                          />
                        </Media.Image>
                        <Media.Content>
                          <Heading>Olivia Rhye</Heading>
                          <Text>olivia@untitledui.com</Text>
                        </Media.Content>
                      </Media>
                    </Table.Cell>
                    <Table.Cell>
                      <ButtonGroup>
                        <Button>Download</Button>
                        <Button>Delete</Button>
                      </ButtonGroup>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell>TSLA BUY</Table.Cell>
                    <Table.Cell>$30,021.23</Table.Cell>
                    <Table.Cell>Jan 13, 2022</Table.Cell>
                    <Table.Cell>
                      <Badge>Processing</Badge>
                    </Table.Cell>
                    <Table.Cell>
                      <Media>
                        <Media.Image>
                          <Avatar
                            src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=48&q=80"
                            alt="An avatar"
                          />
                        </Media.Image>
                        <Media.Content>
                          <Heading>Olivia Rhye</Heading>
                          <Text>olivia@untitledui.com</Text>
                        </Media.Content>
                      </Media>
                    </Table.Cell>
                    <Table.Cell>
                      <ButtonGroup>
                        <Button>Download</Button>
                        <Button>Delete</Button>
                      </ButtonGroup>
                    </Table.Cell>
                  </Table.Row>
                </tbody>
              </Table>
              <Pagination />
            </Card>
          </Tabs.Pane>
        </Tabs>
      </Container>
    </Layout>
  );
}
