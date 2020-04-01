import { Injectable } from '@angular/core';
import { ClientErrorObject } from './model/client-error-object.model';
import { HttpStatusCodeEnum } from './model/http-status-code.enum';
import { ServerErrorObject } from './model/server-error-object.model';

/**
 * @description Serviço responsável por registrar as mensagens no console.
 * @todo Esse serviço também deverá enviar os log's de erro para um sistema armazenar e gerencia-los (Ex.: Dynatrace Managed).
 */
@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  logHttpError(errorObject: ServerErrorObject): void {

    if (errorObject.status && errorObject.status >= HttpStatusCodeEnum.BAD_REQUEST && errorObject.status < HttpStatusCodeEnum.INTERNAL_SERVER_ERROR) {
      console.warn(`[${errorObject.typeError}]`, errorObject);
      return;
    }
    console.error(`[${errorObject.typeError}]`, errorObject);
  }

  logClientSide(errorObject: ClientErrorObject): void {
    console.error(`[${errorObject.typeError}/ERRO]:`, errorObject.name);
    console.error(`[${errorObject.typeError}/MENSAGEM]:`, errorObject.message);
    console.error(`[${errorObject.typeError}/RASTREIO DA PILHA]:`, errorObject.stack);
  }
}
