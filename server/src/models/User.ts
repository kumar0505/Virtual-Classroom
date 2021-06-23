import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Institute } from "./Institute";
import { RoleMap } from "./RoleMap";

export interface IUser {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    contact: string;
    password: string;
}

@Entity({ name: 'users' })
export class User extends BaseEntity {

    @PrimaryGeneratedColumn({ name: 'id' })
    id: number;

    @Column({ name: 'first_name', nullable: false, length: 256 })
    firstName: string;

    @Column({ name: 'last_name', nullable: false, length: 256 })
    lastName: string;

    @Column({ name: 'email', nullable: false, unique: true })
    email: string;

    @Column({ name: 'contact', nullable: false, unique: true })
    contact: string;

    @Column({ name: 'password', nullable: false, select: false })
    password: string;

    @OneToOne(() => RoleMap, { nullable: false })
    @JoinColumn({ name: 'role_map_id' })
    role: RoleMap;

    @ManyToOne(() => Institute, { nullable: false })
    institute: Institute;

    constructor(init?: Partial<User>) {
        super();
        Object.assign(this, init);
    }
}