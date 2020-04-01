import { ErrorHandler, NgModule } from '@angular/core';
import { ErrorHandlingService } from './error-handling.service';
import { ErrorService } from './service/error.service';
import { LoggingService } from './service/logging.service';
import { NotificationService } from './service/notification.service';

@NgModule({
  providers: [
    {
      provide: ErrorHandler,
      useClass: ErrorHandlingService,
    },
    ErrorService,
    LoggingService,
    NotificationService
  ],
})
export class ErrorHandlingModule { }
