import { Column, Entity,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Marca{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', length: 50})
    marca: string;

    @Column ({type: 'int4'})
    user_id: number;
}