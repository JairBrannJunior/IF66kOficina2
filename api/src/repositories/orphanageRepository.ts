import { AppDataSource } from "../database/connection";
import Orphanage from "../models/Orphanage";

export const OrphanageRepository = AppDataSource.getRepository(Orphanage);