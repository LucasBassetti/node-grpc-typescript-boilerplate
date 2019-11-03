export type VerifyModelInput = { model: string };
export type VerifyModelResult = Promise<{ reply: string }>;

export const verifyModel = async ({
  model,
}: VerifyModelInput): VerifyModelResult => {
  console.log(model);

  return { reply: 'success!' };
};
