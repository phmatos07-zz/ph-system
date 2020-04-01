import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { ErrorService } from './error.service';
import { LoggingService } from './logging.service';
import { NotificationService } from './notification.service';

/**
 * @description Serviço responsável por capturar todos os erros emitidos com o ‘ErrorHandler’ do Angular.
 * Dessa forma podemos personalizar como a aplicação gerencia cada log de erro.
 */
@Injectable(
  { providedIn: 'root' }
)
export class ErrorHandlerService implements ErrorHandler {

  /**
   * Como o tratamento de erros é essencial, ele é carregado primeiro.
   * Por esse motivo, não podemos usar injeção de dependência no construtor para os serviços.
   * Em vez disso, temos que injetá-los manualmente com o Injector.
   */
  constructor(
    private injector: Injector
  ) { }

  handleError(error: Error | HttpErrorResponse): void {

    const errorService = this.injector.get(ErrorService);
    const loggingService = this.injector.get(LoggingService);
    const notificationService = this.injector.get(NotificationService);

    if (error instanceof HttpErrorResponse) {
      const serverErrorObject = errorService.serverErrorObject(error);
      loggingService.logHttpError(serverErrorObject);
    } else {
      const clientErrorObject = errorService.clientErrorObject(error);
      loggingService.logClientSide(clientErrorObject);
    }
  }
}
