import { DataSource } from "typeorm";
import Orphanage from "../models/Orphanage";
import Image from "../models/Image"

export const AppDataSource = new DataSource({
    type: "better-sqlite3",
    database: ".src/database/database.sqlite",
    entities: [Orphanage, Image],
    synchronize: true
});

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })