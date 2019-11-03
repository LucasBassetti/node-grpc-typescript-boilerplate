import { mongo } from '@database/mongo';

describe('ModelRecord schema', () => {
  beforeAll(async () => {
    await mongo.connect();
  });

  afterAll(async () => {
    await mongo.close();
  });

  it('Should throw validation errors', () => {
    const modelRecord = new mongo.ModelRecord();

    expect(modelRecord.validate).toThrow();
  });

  it('Should save a model record', async () => {
    const modelRecord = new mongo.ModelRecord<IModelRecord>({
      model: 'Test',
      uri: 'test-uri',
    });

    const spy = jest.spyOn(modelRecord, 'save');

    modelRecord.save();

    expect(spy).toHaveBeenCalled();

    expect(modelRecord).toMatchObject({
      model: expect.any(String),
      updated: expect.any(Date),
      uri: expect.any(String),
    });

    expect(modelRecord.uri).toBe('test-uri');
  });
});
