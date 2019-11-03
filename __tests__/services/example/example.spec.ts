import { verifyModel } from '@services/example';

describe('Example verifyModel service', () => {
  it('Should return success', async () => {
    const result = await verifyModel({ model: 'test' });

    expect(result.reply).toBe('success!');
  });
});
