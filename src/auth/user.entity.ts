import { Column, Entity,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class auth{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', length: 100})
    name: string;

    @Column({type: 'varchar', length: 25})
    username: string;

    @Column({type: 'varchar', length: 40})
    password: string;

}