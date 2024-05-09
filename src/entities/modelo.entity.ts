import { Column, Entity,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Modelo{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column ({type: 'int4'})
    marca_id: number;

    @Column({type: 'varchar', length: 60})
    modelo_asociado: string;

}