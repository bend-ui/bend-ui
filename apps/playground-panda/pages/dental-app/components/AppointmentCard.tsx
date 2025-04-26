import {
  Button,
  ButtonGroup,
  Card,
  Grid,
  Heading,
  Paragraph,
  Text,
} from '@particles/ark';

interface AppointmentCardProps {
  data: any;
}

const AppointmentCard = (props: AppointmentCardProps) => {
  const { data } = props;

  return (
    <Card withBorder>
      <Card.Header>#{data.id}</Card.Header>
      <Card.Section>
        <Grid columns={2}>
          <Grid.Item>
            <Heading>Patient name: </Heading>
            <Paragraph>{data.patientId}</Paragraph>
          </Grid.Item>
          <Grid.Item>
            <Heading>Date:</Heading>
            <Paragraph>{data.date}</Paragraph>
          </Grid.Item>
          <Grid.Item>
            <Heading>Phone number:</Heading>
            <Paragraph>{data.phone}</Paragraph>
          </Grid.Item>
          <Grid.Item>
            <Heading>Email:</Heading>
            <Paragraph>{data.email}</Paragraph>
          </Grid.Item>
        </Grid>
      </Card.Section>
      <Card.Section>
        <Grid columns={2}>
          <Grid.Item>
            <Heading>Doctor name:</Heading>
            <Paragraph>{data.doctorId}</Paragraph>
          </Grid.Item>
          <Grid.Item>
            <Heading>Time:</Heading>
            <Paragraph>{data.time}</Paragraph>
          </Grid.Item>
        </Grid>
      </Card.Section>
      <Card.Footer>
        <ButtonGroup>
          <Button>Decline</Button>
          <Button>Approve</Button>
        </ButtonGroup>
      </Card.Footer>
    </Card>
  );
};

export default AppointmentCard;
