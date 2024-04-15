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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryResolver = void 0;
const type_graphql_1 = require("type-graphql");
const countrySchema_1 = require("../entities/countrySchema");
let CountryResolver = class CountryResolver {
    createCountry(args) {
        return countrySchema_1.Country.createCountry({ ...args });
    }
    deletecountry(id, code) {
        return countrySchema_1.Country.deleteCountry(id, code);
    }
    getCountries() {
        return countrySchema_1.Country.getCountries();
    }
    getCountryByCode(code) {
        return countrySchema_1.Country.getCountryByCode(code);
    }
    getCountryByContinent(continent) {
        return countrySchema_1.Country.getCountryByContinent(continent);
    }
};
exports.CountryResolver = CountryResolver;
__decorate([
    (0, type_graphql_1.Mutation)(() => countrySchema_1.Country),
    __param(0, (0, type_graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [countrySchema_1.CreateOrUpdateCountry]),
    __metadata("design:returntype", void 0)
], CountryResolver.prototype, "createCountry", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => countrySchema_1.Country),
    __param(0, (0, type_graphql_1.Arg)("id", () => type_graphql_1.ID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CountryResolver.prototype, "deletecountry", null);
__decorate([
    (0, type_graphql_1.Query)(() => [countrySchema_1.Country]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CountryResolver.prototype, "getCountries", null);
__decorate([
    (0, type_graphql_1.Query)(() => countrySchema_1.Country),
    __param(0, (0, type_graphql_1.Arg)("code")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CountryResolver.prototype, "getCountryByCode", null);
__decorate([
    (0, type_graphql_1.Query)(() => countrySchema_1.Country),
    __param(0, (0, type_graphql_1.Arg)("continent")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CountryResolver.prototype, "getCountryByContinent", null);
exports.CountryResolver = CountryResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], CountryResolver);
