import { Example } from '../../domain/entity/Example';

export type ExampleModel = {
  text: string;
  uppercase?: string;
};

export const exampleEntityToModel = (entity: Example): ExampleModel => {
  return {
    text: entity.text,
    uppercase: entity.uppercase,
  };
};
