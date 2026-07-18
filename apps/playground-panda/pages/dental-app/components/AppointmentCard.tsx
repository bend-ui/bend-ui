import {
  Button,
  ButtonGroup,
  Card,
  Grid,
  Heading,
  Paragraph,
} from '@bend-ui/ark-ui';

interface AppointmentCardProps {
  data: any;
}

const AppointmentCard = (props: AppointmentCardProps) => {
  const { data } = props;

  return (
    <Card withBorder>
      <Card.Section>#{data.id}</Card.Section>
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
      <Card.Section>
        <ButtonGroup>
          <Button>Decline</Button>
          <Button>Approve</Button>
        </ButtonGroup>
      </Card.Section>
    </Card>
  );
};

export default AppointmentCard;
