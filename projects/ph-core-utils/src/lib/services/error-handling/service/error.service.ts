import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientErrorObject } from './../model/client-error-object.model';
import { ServerErrorObject } from './../model/server-error-object.model';
import { TypeErrorEnum } from './../model/type-error.enum';

/**
 * @description Serviço respónsavel por analisar as mensagens de erro e rastrear a pilha do servidor (API) e do cliente (FRONT).
 */
@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  serverErrorObject(error: HttpErrorResponse): ServerErrorObject {
    const servertError = new ServerErrorObject();
    servertError.typeError = TypeErrorEnum.BACK_END;
    return servertError;
  }

  clientErrorObject(error: Error): ClientErrorObject {

    const clientError = new ClientErrorObject();
    clientError.typeError = TypeErrorEnum.FRONT_END;
    clientError.name = error.name;
    clientError.message = error.message;
    clientError.stack = error.stack;
    return clientError;
  }
}
