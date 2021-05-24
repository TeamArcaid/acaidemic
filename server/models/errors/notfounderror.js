import { ApiError } from './apierror';

const NOT_FOUND_STATUS_CODE = 404;

export class NotFoundApiError extends ApiError {
  constructor(message) {
    super(message);
    this.name = 'NotFoundError';
    this.status_code = NOT_FOUND_STATUS_CODE;
  }
}
