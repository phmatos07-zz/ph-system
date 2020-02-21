import { Libs } from './libs.enum';

export class Event<T> {

  private _action?: string;
  origin: Libs;
  data: T;

  get action(): string {
    return `${this.origin}_${this._action}`;
  }

  set action(action: string) {
    this._action = action;
  }

  constructor(origin: Libs, action: string, data: T) {
    this.origin = origin;
    this.action = action;
    this.data = data;
  }
}
