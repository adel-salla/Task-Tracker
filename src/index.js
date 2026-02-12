#!/usr/bin/env node
const { JsonTaskRepository } = require("./repository/jsonTaskRepository/jsonTaskRepository");
const { cli } = require("./adapters/cli/index");

const repository = new JsonTaskRepository();
cli(repository);