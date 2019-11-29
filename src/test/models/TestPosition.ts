import {Model, Column, Table, CreatedAt, UpdatedAt, BelongsTo, PrimaryKey, ForeignKey, Default} from "sequelize-typescript";
import TestAntrag from "./TestAntrag";

@Table(
    {tableName: 'test_position'}
  )
  export default class TestPosition extends Model {

    @PrimaryKey
    @Column
    public id!: number;

    @ForeignKey(() => TestAntrag)
    @Column
    public antrag_id!: number;

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt?: Date;

    @BelongsTo(() => TestAntrag, 'antrag_id')
    antrag!: TestAntrag;

}