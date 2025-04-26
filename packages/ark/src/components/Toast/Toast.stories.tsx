import { Button, DismissButton } from '@particles/react';
import { createToaster, Toast, Toaster } from '.';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Overlays/Toast',
  component: Toast,

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof Toast>;

const toaster = createToaster({
  placement: 'bottom-end',
  overlap: true,
  gap: 24,
});

export const Base: Story = {
  render: () => (
    <>
      <Button
        onClick={() =>
          toaster.create({ title: 'Title', description: 'Description' })
        }
      >
        Add Toast
      </Button>
      <Toaster toaster={toaster}>
        {(toast) => (
          <Toast.Root key={toast.id}>
            <Toast.Title>{toast.title}</Toast.Title>
            <Toast.Description>{toast.description}</Toast.Description>
            <Toast.ActionTrigger>Do Action</Toast.ActionTrigger>
            <Toast.CloseTrigger asChild>
              <DismissButton />
            </Toast.CloseTrigger>
          </Toast.Root>
        )}
      </Toaster>
    </>
  ),
};

// export const Placements: Story = {
//   render: () => {
//     const [Toaster, toast] = createToaster({
//       placement: 'top-start',
//       render(toast) {
//         return (
//           <Toast.Root>
//             <Toast.Title>{toast.title}</Toast.Title>
//             <Toast.Description>{toast.description}</Toast.Description>
//             <Toast.CloseTrigger>Close</Toast.CloseTrigger>
//           </Toast.Root>
//         );
//       },
//     });

//     const placements: CreateToasterProps['placement'][] = [
//       'top-start',
//       'top',
//       'top-end',
//       'bottom-start',
//       'bottom',
//       'bottom-end',
//     ];

//     return (
//       <>
//         {placements.map((placement) => (
//           <Button
//             key={placement}
//             onClick={() =>
//               toast.create({
//                 title: 'Title',
//                 description: 'Description',
//                 placement,
//                 id: placement,
//               })
//             }
//           >
//             Add Toast {placement}
//           </Button>
//         ))}
//         <Toaster />
//       </>
//     );
//   },
// };
