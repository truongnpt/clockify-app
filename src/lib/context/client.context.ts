export class ClientContext {
  protected clientCode: string | null | undefined;

  get() {
    return this.clientCode;
  }

  set(clientCode: string | null | undefined) {
    this.clientCode = clientCode;
  }

  check() {
    return (
      this.clientCode !== null &&
      this.clientCode !== undefined &&
      this.clientCode !== '' &&
      this.clientCode !== 'all'
    );
  }
}

export default new ClientContext();
