const Snowflake = require("../index");

const snowflake = new Snowflake();

const data = snowflake.deconstruct("756403198394237027");
console.log(data);