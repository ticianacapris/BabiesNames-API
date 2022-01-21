interface IAppError {
  message: string;
  statusCode: number;
  tag?: string;
}

class AppError {
  message: string;
  statusCode: number;
  tag?: string;

  constructor({ message, statusCode, tag }: IAppError) {
    Object.assign(this, {
      message,
      statusCode: statusCode || 400,
      tag: tag || "api-error",
    });
  }
}

export default AppError;
