import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { createRestaurantDto } from "./dtos/create-restaurant";
import { Restaurant } from "./entities/restaurants.entity";
import { RestaurantService } from "./restaurants.service";

@Resolver(of => Restaurant)
export class RestaurantResolver {
    constructor(private readonly restaurantService: RestaurantService) { }
    @Query(returns => [Restaurant])
    restaurants(): Promise<Restaurant[]> {
        return this.restaurantService.getAll();
    }
    @Mutation(returns => Boolean)
    createRestaurant(
        @Args() createRestaurantDto: createRestaurantDto,
    ): boolean {
        console.log(createRestaurantDto)
        return true;
    }
}

