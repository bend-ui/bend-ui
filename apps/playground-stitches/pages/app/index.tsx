import {
  FiCalendar,
  FiDownload,
  FiFilter,
  FiMoreVertical,
  FiSearch,
} from 'react-icons/fi';
import {
  Avatar,
  Badge,
  Box,
  Button,
  ButtonGroup,
  Card,
  Checkbox,
  DropdownMenu,
  Heading,
  IconButton,
  Input,
  Level,
  Media,
  Table,
  Tabs,
  Text,
} from '@particles/stitches';
import Layout from './components';

export default function Application() {
  return (
    <Layout>
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
      <Tabs>
        <Tabs.List>
          <Tabs.Tab value="all">All trades</Tabs.Tab>
          <Tabs.Tab value="buy">Buy</Tabs.Tab>
          <Tabs.Tab value="sell">Sell</Tabs.Tab>
        </Tabs.List>
        <Tabs.Pane value="all">
          <Level sx={{ my: '$md' }}>
            <Input icon={<FiSearch />} />
            <ButtonGroup>
              <Button variant="outline" palette="neutral" icon={<FiCalendar />}>
                Jan 6, 2022 - Jan 13, 2022
              </Button>
              <Button variant="outline" palette="neutral" icon={<FiFilter />}>
                Filters
              </Button>
            </ButtonGroup>
          </Level>
          <Card>
            <Card.Header>
              <Level>
                <Heading>All trades</Heading>
                <DropdownMenu>
                  <DropdownMenu.Trigger>
                    <IconButton palette="neutral">
                      <FiMoreVertical />
                    </IconButton>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.List>
                    <DropdownMenu.Item>Item</DropdownMenu.Item>
                    <DropdownMenu.Item>Item</DropdownMenu.Item>
                  </DropdownMenu.List>
                </DropdownMenu>
              </Level>
            </Card.Header>
            <Table>
              <Table.Header>
                <Table.Column>
                  <Checkbox />
                </Table.Column>
                <Table.Column>Trade</Table.Column>
                <Table.Column>Order amount</Table.Column>
                <Table.Column>Delivery date</Table.Column>
                <Table.Column>Status</Table.Column>
                <Table.Column>Executed by</Table.Column>
                <Table.Column />
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <Checkbox />
                  </Table.Cell>
                  <Table.Cell>TSLA BUY</Table.Cell>
                  <Table.Cell>$30,021.23</Table.Cell>
                  <Table.Cell>Jan 13, 2022</Table.Cell>
                  <Table.Cell>
                    <Badge palette="warning">Processing</Badge>
                  </Table.Cell>
                  <Table.Cell>
                    <Media>
                      <Media.Image>
                        <Avatar src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=48&q=80" />
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
                    <Badge palette="warning">Processing</Badge>
                  </Table.Cell>
                  <Table.Cell>
                    <Media>
                      <Media.Image>
                        <Avatar src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=48&q=80" />
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
              </Table.Body>
            </Table>
            <Level>
              <span>Page 1 of 10</span>
              <ButtonGroup>
                <Button variant="outline" palette="neutral">
                  Previous
                </Button>
                <Button variant="outline" palette="neutral">
                  Next
                </Button>
              </ButtonGroup>
            </Level>
          </Card>
        </Tabs.Pane>
      </Tabs>
    </Layout>
  );
}
