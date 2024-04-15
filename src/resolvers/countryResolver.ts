import { Arg, Args, Authorized, Ctx, ID, Mutation, Query, Resolver } from "type-graphql";
import {Country, CreateOrUpdateCountry} from "../entities/countrySchema";

@Resolver()
export class CountryResolver {
    @Mutation(() => Country)
    createCountry(@Args() args: CreateOrUpdateCountry) {
      return Country.createCountry({ ...args});
    }

    @Mutation(() => Country)
    deletecountry(@Arg("id", () => ID) id: string, code: string) {
        return Country.deleteCountry(id, code);
    }

    @Query(() => [Country])
    getCountries() {
        return Country.getCountries();
    }

   
    
    @Query(() => Country)
    getCountryByCode(@Arg("code") code: string) {
        return Country.getCountryByCode(code);
    }

   @Query(() => Country)
    getCountryByContinent(@Arg("continent") continent: string) {
        return Country.getCountryByContinent(continent);
    }
}