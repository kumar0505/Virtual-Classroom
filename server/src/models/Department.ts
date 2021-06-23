import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Institute } from "./Institute";

@Entity({ name: 'departments' })
export class Department extends BaseEntity {
    @PrimaryGeneratedColumn({ name: 'id' })
    id: number;

    @Column({ name: 'dept_name', nullable: false, length: 256 })
    deptName: string;

    @ManyToOne(() => Institute, { nullable: false })
    @JoinColumn({ name: 'inst_id' })
    institute: Institute;

    constructor(init?: Partial<Department>) {
        super();
        Object.assign(this, init);
    }

}