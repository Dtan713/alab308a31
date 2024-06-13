// Importing database functions. DO NOT MODIFY THIS LINE.

import { central, db1, db2, db3, vault } from "./databases.js";

function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3,
  };
}

async function getFirstHalfOfData(id) {
  const firstHalf = await vault(id);
  console.log(firstHalf.email);
}

getFirstHalfOfData(5);

async function findOut(id) {
  const findout = await central(id);
  console.log(findout);
}
findOut(5);
