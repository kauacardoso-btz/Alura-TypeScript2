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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Endereco_1 = __importDefault(require("./Endereco"));
var PetEntity_1 = __importDefault(require("./PetEntity"));
var AdotanteEntity = /** @class */ (function () {
    function AdotanteEntity(nome, senha, celular, foto, endereco) {
        this.nome = nome;
        this.senha = senha;
        this.foto = foto;
        this.celular = celular;
        this.endereco = endereco;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], AdotanteEntity.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], AdotanteEntity.prototype, "nome", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], AdotanteEntity.prototype, "senha", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], AdotanteEntity.prototype, "celular", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], AdotanteEntity.prototype, "foto", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return Endereco_1.default; }, {
            nullable: true,
            cascade: true,
            eager: true,
        }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", Endereco_1.default)
    ], AdotanteEntity.prototype, "endereco", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return PetEntity_1.default; }, function (pet) { return pet.adotante; }),
        __metadata("design:type", Array)
    ], AdotanteEntity.prototype, "pets", void 0);
    AdotanteEntity = __decorate([
        (0, typeorm_1.Entity)(),
        __metadata("design:paramtypes", [String, String, String, String, Endereco_1.default])
    ], AdotanteEntity);
    return AdotanteEntity;
}());
exports.default = AdotanteEntity;
