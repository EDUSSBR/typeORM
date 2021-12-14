import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { Banker } from "./Banker";
import { Transaction } from "./Transaction";
import { Person } from "./utils/Person";

@Entity('client')
export class Client extends Person{
  
    @Column({
        unique: true,
        length: 10
    })
    card_number: string

    @Column({
        default: true,
        name: 'active'
    })
    is_active: boolean

    @Column({
        type: 'simple-json',
        nullable: true
    })
    additional_info: {
        age: number,
        hair_color: string
    }

    @Column({
        type: 'simple-array',
        default: []
    })
    family_members:string[]

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @OneToMany(
        () => Transaction,
        transaction => transaction.client
    )
    transaction: Transaction[]

    @ManyToMany(
        ()=> Banker,
    )
    bankers: Banker[]
}