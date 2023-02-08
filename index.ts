import { Resolver, Query, Root, Mutation, Subscription, ObjectType, Args, Field, ArgsType, ID, Int } from 'type-graphql'
import { Activity } from './Activity'
import { ResponseData } from '../ResponseData/ResponseData'

import getActivities from '../../mapping-templates/getActivities/resolver'
import getActivityById from '../../mapping-templates/getActivityById/resolver'
import addActivity from '../../mapping-templates/addActivity/resolver'
import updateActivity from '../../mapping-templates/updateActivity/resolver'
import getActivityDetailById from '../../mapping-templates/getActivityDetailById/resolver'
import getActivityByUnit from '../../mapping-templates/getActivityByUnit/resolver'

export { Activity }
export { ResponseData }

@ArgsType()
export class addActivityArgs {
  @Field(() => ID)
  Id: string

  @Field()
  Title: string

  @Field()
  Subtitle: string

  @Field()
  Material: string

  @Field()
  Unit: string

  @Field()
  Activity: string

  @Field()
  Cardback?: string

  @Field()
  Status: string
}

@ArgsType()
export class getActivityDetailByIdArgs {
  @Field(() => ID)
  ActivityID: string

  @Field({ nullable: true })
  activity: string
}

@ArgsType()
export class getActivityByIdArgs {
  @Field(() => ID)
  Id: string
}

@ArgsType()
export class getActivityByUnitArgs {
  @Field()
  Material: string

  @Field()
  Unit: string
}

@ArgsType()
export class updateActivityArgs {
  @Field()
  Id: string

  @Field()
  attrName: string

  @Field()
  attrValue: string
}

@ObjectType({ description: 'Object representing an object to response a request' })
export class ActivityResponse {
  @Field()
  status: number

  @Field()
  message: string

  @Field(() => Activity)
  data: Activity
}

@Resolver(Activity)
export class ActivityResolver {
  @Query(() => ResponseData)
  getActivities() {
    return getActivities()
  }

  @Query(() => ResponseData)
  getActivityById(@Args() { Id }: getActivityByIdArgs) {
    return getActivityById({ Id })
  }

  @Query(() => ResponseData)
  getActivityDetailById(@Args() data: getActivityDetailByIdArgs) {
    return getActivityDetailById(data)
  }

  @Query(() => ResponseData)
  getActivityByUnit(@Args() data: getActivityByUnitArgs) {
    return getActivityByUnit(data)
  }

  @Mutation(() => ActivityResponse)
  addActivity(@Args() data: addActivityArgs) {
    return addActivity(data)
  }

  @Mutation(() => ActivityResponse)
  updateActivity(@Args() data: addActivityArgs) {
    return updateActivity(data)
  }
}
