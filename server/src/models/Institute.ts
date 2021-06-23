import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export interface IInstitute {
    id?: number;
    instName: string;
    address: string;
    city: string;
    district: string;
    state: string;
    pincode: number;
}

@Entity({ name: 'intstitutes' })
export class Institute extends BaseEntity {

    @PrimaryGeneratedColumn({ name: 'id' })
    id: number;

    @Column({ name: 'inst_name', nullable: false, length: 256, unique: true })
    instName: string;

    @Column({ name: 'address', nullable: false, length: 256 })
    address: string;

    @Column({ name: 'city', nullable: false, length: 128 })
    city: string;

    @Column({ name: 'district', nullable: false, length: 128 })
    district: string;

    @Column({ name: 'state', nullable: false, length: 128 })
    state: string;

    @Column({ name: 'pincode', nullable: false })
    pincode: number;

    constructor(init?: Partial<Institute>) {
        super();
        Object.assign(this, init);
    }
}