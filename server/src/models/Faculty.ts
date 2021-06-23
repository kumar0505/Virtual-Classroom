import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Department } from "./Department";
import { Institute } from "./Institute";
import { RoleMap } from "./RoleMap";

@Entity({ name: 'faculties' })
export class Faculty extends BaseEntity {

    @PrimaryGeneratedColumn({ name: 'id' })
    id: number;

    @OneToOne(() => RoleMap, { nullable: false })
    @JoinColumn({ name: 'role_map_id' })
    roleMap: RoleMap;

    @ManyToOne(() => Institute, { nullable: false })
    @JoinColumn({ name: 'inst_id' })
    institute: Institute;

    @ManyToOne(() => Department, { nullable: false })
    @JoinColumn({ name: 'dept_id' })
    department: Department;

    public constructor(init?: Partial<Faculty>) {
        super();
        Object.assign(this, init);
    }


}