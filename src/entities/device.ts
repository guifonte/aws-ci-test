import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import { Category } from "./category";

@Entity()
export class Device {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", {length: 16})
    color: string;

    @Column({unsigned: true})
    partNumber: number;

    @ManyToOne(() => Category)
    @JoinColumn()
    category: Category;

}