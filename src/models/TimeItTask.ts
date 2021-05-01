import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, ID} from 'type-graphql';


@Entity()
@ObjectType()
export class TimeItTask extends BaseEntity{

    @Field(()=> ID)
    @PrimaryGeneratedColumn("uuid")
    id: string; 

    @Field(()=> Number)
    @Column({type: "int"})
    duration: number

    @Field(()=> Number)
    @Column({type: "int", default: 60})
    every: number
     
}