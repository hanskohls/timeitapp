import  { InputType, Field } from "type-graphql";

@InputType()
export class CreateTimeItTaskInput{
    @Field()
    duration: number;

    @Field()
    every: number;
}

@InputType()
export class UpdateTimeitTaskInput{
    @Field({nullable: true})
    duration?: number;

    @Field({ nullable: true})
    every?: number;
}
