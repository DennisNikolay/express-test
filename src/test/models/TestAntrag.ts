import {Model, Column, Table, CreatedAt, UpdatedAt, HasMany, PrimaryKey, Default} from "sequelize-typescript";
import TestPosition from "./TestPosition";

@Table(
  {tableName: 'test_antrag'}
)
export default class TestAntrag extends Model {

  @PrimaryKey
  @Column
  public id!: number;

  @Column
  public erntejahr!: string;

  @Column
  betrieb_nr!: string;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt?: Date;

  @HasMany(() => TestPosition)
  positions?: TestPosition[];

}