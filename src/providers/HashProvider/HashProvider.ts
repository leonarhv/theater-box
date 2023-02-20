export interface HashProvider {
  /**
   * Takes a payload and returns a hashed string
   * @param payload string to be hashed
   */
  generateHash(payload: string): Promise<string>;
  compareHash(payload: string, hashed: string): Promise<boolean>;
}
