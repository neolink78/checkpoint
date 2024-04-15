import { Field, ID, ObjectType,ArgsType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@ArgsType()
 export class CreateOrUpdateCountry {
  @Field()
  code!: string;

  @Field()
  countryName!: string;

  @Field()
  emoji!: string;

  @Field()
  continent!: string
}


@Entity("Country")
@ObjectType()
export class Country extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  @Field(() => ID)
  id!: string;

  @Column({ unique: true })
  @Field()
  code!: string

  @Column({ unique: true })
  @Field()
  countryName!: string

  @Column({ unique: true })
  @Field()
  emoji!: string

  @Column()
  @Field()
  continent!: string

  constructor(country?: CreateOrUpdateCountry) {
    super();

    if (country) {
      this.code = country.code;
      this.countryName = country.countryName;
      this.emoji = country.emoji;
      this.continent = country.continent;
    }
  }

  static async createCountry(country: CreateOrUpdateCountry): Promise<Country> {
    const newCountry = new Country(country);
    
    return await Country.save(newCountry);
  }

  static async getCountries(): Promise<Country[]> {
    const countries = await Country.find();
    return countries;
    }

  static async getCountryByCode(code: string): Promise<Country> {
      const country = await Country.findOne({ where: { code } });
      if (!country) {
        throw new Error("COUNTRY_NOT_FOUND");
      }
      return country; }

      static async getCountryByContinent(continent: string): Promise<Country> {
        const country = await Country.findOne({ where: { continent } });
        if (!country) {
          throw new Error("COUNTRY_NOT_FOUND");
        }
        return country; }

        static async deleteCountry(id: string, code: string): Promise<Country> {
          const country = await Country.getCountryByCode(code);
          await Country.delete(id);
          return country;
        };
}