import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config()

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

export const sql = neon( //Creates a SQL connection using our .env variables
    `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`
) //This function is used as a tagged literal which allows us to safely write SQL queries