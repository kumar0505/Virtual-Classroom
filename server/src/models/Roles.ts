import { BaseEntity, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'roles' })
export class Role extends BaseEntity {

    @PrimaryGeneratedColumn({ name: 'id' })
    id: number;


}