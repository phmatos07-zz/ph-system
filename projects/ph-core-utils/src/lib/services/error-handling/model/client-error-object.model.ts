import { TypeErrorEnum } from './type-error.enum';

export class ClientErrorObject {
  typeError: TypeErrorEnum | null = null;
  name?: string;
  message?: string;
  stack?: string;
}
