import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Department } from "./Department";
import { Institute } from "./Institute";
import { RoleMap } from "./RoleMap";

@Entity({ name: 'students' })
export class Student extends BaseEntity {
    @PrimaryGeneratedColumn({ name: 'id' })
    id: number;

    @Column({ name: 'roll_id', nullable: false, length: 20 })
    rollId: string;

    @OneToOne(() => RoleMap, { nullable: false })
    @JoinColumn({ name: 'role_map_id' })
    roleMap: RoleMap;

    @ManyToOne(() => Institute, { nullable: false })
    @JoinColumn({ name: 'inst_id' })
    institute: Institute;

    @ManyToOne(() => Department, { nullable: false })
    @JoinColumn({ name: 'dept_id' })
    department: Department;

    public constructor(init?: Partial<Student>) {
        super();
        Object.assign(this, init);
    }
}