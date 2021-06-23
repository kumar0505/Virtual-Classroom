import { genSalt, hash, compare } from 'bcryptjs';

export default class UtilityService {

    async generatePasswordHash(password: string): Promise<string> {
        try {
            const salt = await genSalt(12);
            const hashedPassword = await hash(password, salt);
            return hashedPassword;
        } catch (error) {
            throw new Error(`Unable to generate hash: ${error}`);
        }
    }

    async comparePassword(password: string, passwordHash: string): Promise<boolean> {
        let result = await compare(password, passwordHash);
        return result;
    }

}