import bcrypt from "bcryptjs";
import { HashProvider } from "./HashProvider";

class BcryptHashProvider implements HashProvider {
  public async generateHash(payload: string): Promise<string> {
    return bcrypt.hash(payload, 10);
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    return bcrypt.compare(payload, hashed);
  }
}

export { BcryptHashProvider };
