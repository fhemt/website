export class ApiError extends Error {
  code: string;
  status: number;

  constructor(code: string, status: number, message?: string) {
    super(message ?? code);
    this.code = code;
    this.status = status;
    this.name = "ApiError";
  }
}

/** Thrown when the web-premium token is missing/invalid/expired — callers
 * should redirect to /abonnement/login. */
export class SessionExpiredError extends Error {
  constructor() {
    super("Session expired");
    this.name = "SessionExpiredError";
  }
}
