import { ObjectType, Field, ID, Int } from 'type-graphql'

@ObjectType({ description: 'Object representing an Activity' })
export class Activity {
  @Field(() => ID, { nullable: true })
  Id?: string

  @Field()
  Title: string

  @Field()
  Subtitle: string

  @Field()
  Material: string

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
