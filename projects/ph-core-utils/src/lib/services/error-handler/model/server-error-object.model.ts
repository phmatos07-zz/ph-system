import { HttpHeaders } from '@angular/common/http';
import { TypeErrorEnum } from './type-error.enum';

export class ServerErrorObject {
  typeError: TypeErrorEnum | null = null;
  error?: any;
  headers?: HttpHeaders;
  status?: number;
  statusText?: string;
  url?: string;
}
