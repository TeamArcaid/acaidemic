export class ApiError extends Error {
  constructor(status_code, message) {
    super(message);
    this.name = 'ApiError';
    this.status_code = status_code;
  }
}
