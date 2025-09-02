import bcrypt from 'bcrypt';
import { User } from '../modules/user/user.model';
import { envVars } from '../config/env';
import { Role } from '../modules/user/user.interface';

export const seedAdmin = async () => {
    try {
        const isExistUser = await User.findOne({ email: envVars.ADMIN_EMAIL });

        if (isExistUser) {
            console.log("Admin user already exists, skipping...");
            return;
        }

        // hash password
        const hasPassword = await bcrypt.hash(envVars.ADMIN_PASS, Number(envVars.BCRYPT_SLOT_ROUND))


        const payload = {
            name: " admin",
            role: Role.ADMIN,
            email: envVars.ADMIN_EMAIL,
            password: hasPassword,
            imageUrl: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }

        const admin = await User.create(payload);
        console.log(admin)
    } catch (error) {
        console.log(error);
    }
}