import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

export enum RoleType {
    'STUDENT' = 'students',
    'FACULTY' = 'faculties',
    'ADMIN' = 'admins'
}

@Entity({ name: 'role_map' })
export class RoleMap extends BaseEntity {

    @PrimaryGeneratedColumn({ name: 'id' })
    id: number;

    @Column({ name: 'role_type', enum: RoleType })
    roleType: string;

    @OneToOne(() => User)
    user: User;

    constructor(init: Partial<RoleMap>) {
        super();
        Object.assign(this, init)
    }
}