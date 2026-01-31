import { AddCommand } from './add';

describe('AddCommand', () => {
  it('should be defined', () => {
    expect(AddCommand).toBeDefined();
    expect(AddCommand.name()).toBe('add');
  });
});
