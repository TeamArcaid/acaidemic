import { ApiError } from './apierror';

export class NotFoundError extends ApiError {
  constructor(status_code, message) {
    super(message);
    this.name = 'NotFoundError';
    this.status_code = status_code;
  }
}
