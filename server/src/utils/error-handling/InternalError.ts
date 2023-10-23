import ApiError from './ApiError';

export default class InternalError extends ApiError {
  constructor() {
    super(500, 'ERR_INTERNAL', 'Internal server error.');
  }
}
