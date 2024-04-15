"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Country_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Country = exports.CreateOrUpdateCountry = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
let CreateOrUpdateCountry = class CreateOrUpdateCountry {
    code;
    countryName;
    emoji;
    continent;
};
exports.CreateOrUpdateCountry = CreateOrUpdateCountry;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateOrUpdateCountry.prototype, "code", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateOrUpdateCountry.prototype, "countryName", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateOrUpdateCountry.prototype, "emoji", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateOrUpdateCountry.prototype, "continent", void 0);
exports.CreateOrUpdateCountry = CreateOrUpdateCountry = __decorate([
    (0, type_graphql_1.ArgsType)()
], CreateOrUpdateCountry);
let Country = Country_1 = class Country extends typeorm_1.BaseEntity {
    id;
    code;
    countryName;
    emoji;
    continent;
    constructor(country) {
        super();
        if (country) {
            this.code = country.code;
            this.countryName = country.countryName;
            this.emoji = country.emoji;
            this.continent = country.continent;
        }
    }
    static async createCountry(country) {
        const newCountry = new Country_1(country);
        return await Country_1.save(newCountry);
    }
    static async getCountries() {
        const countries = await Country_1.find();
        return countries;
    }
    static async getCountryByCode(code) {
        const country = await Country_1.findOne({ where: { code } });
        if (!country) {
            throw new Error("COUNTRY_NOT_FOUND");
        }
        return country;
    }
    static async getCountryByContinent(continent) {
        const country = await Country_1.findOne({ where: { continent } });
        if (!country) {
            throw new Error("COUNTRY_NOT_FOUND");
        }
        return country;
    }
    static async deleteCountry(id, code) {
        const country = await Country_1.getCountryByCode(code);
        await Country_1.delete(id);
        return country;
    }
    ;
};
exports.Country = Country;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    (0, type_graphql_1.Field)(() => type_graphql_1.ID),
    __metadata("design:type", String)
], Country.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Country.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Country.prototype, "countryName", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Country.prototype, "emoji", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Country.prototype, "continent", void 0);
exports.Country = Country = Country_1 = __decorate([
    (0, typeorm_1.Entity)("Country"),
    (0, type_graphql_1.ObjectType)(),
    __metadata("design:paramtypes", [CreateOrUpdateCountry])
], Country);
