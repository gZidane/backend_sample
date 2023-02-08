import { ObjectType, Field, ID, Int } from 'type-graphql'

@ObjectType({ description: 'Object representing an Activity' })

// Declaration of the Class and its propertie's data types
export class Activity {
  @Field(() => ID, { nullable: true })
  Id?: string

  @Field()
  Title: string

  @Field()
  Subtitle: string

  @Field()
  Material: string

// This property can be null 
  @Field({ nullable: true })
  Unit: string

  @Field()
  Activity: string

  @Field({ nullable: true })
  Cardback?: string

  @Field()
  Status: string
}

export default Activity
