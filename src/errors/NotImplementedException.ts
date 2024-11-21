export class NotImplementException extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NotImplementException";
  }
}
