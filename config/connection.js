require("dotenv").config();
const mongoose = require("mongoose");


async function getConnectionInfo() {
  if (!process.env.DATABASE_URL) {


    // still don't have a database url?
    if(!process.env.DATABASE_URL){
      throw new Error("No value in DATABASE_URL in env var");
    }
  }

  // To override the database name, set the DATABASE_NAME environment variable in the .env file
  const DATABASE_NAME = process.env.DATABASE_NAME || "azure-todo-app";

  return {
    DATABASE_URL: process.env.DATABASE_URL,
    DATABASE_NAME: process.env.DATABASE_NAME
  }
}


module.exports = {
  getConnectionInfo
}