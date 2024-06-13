// // Importing database functions. DO NOT MODIFY THIS LINE.

// import { central, db1, db2, db3, vault } from "./databases.js";

// function getUserData(id) {
//   const dbs = {
//     db1: db1,
//     db2: db2,
//     db3: db3,
//   };
// }

// async function getFirstHalfOfData(id) {
//   const firstHalf = await vault(id);
//   console.log(firstHalf.email);
// }

// getFirstHalfOfData(5);

// async function findOut(id) {
//   const findout = await central(id);
//   console.log(findout);
// }
// findOut(5);
// Importing database functions. DO NOT MODIFY THIS LINE.

import { central, db1, db2, db3, vault } from "./databases.js";

async function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3,
  };
  const dbNum = await findOut(id);
  const secondHalf = await dbs[dbNum](id);
  const firstHalf = await getFirstHalfOfData(id);

  const dataObject = { id: id, ...secondHalf, ...firstHalf };
  console.log(dataObject);
}
getUserData(5);

async function getFirstHalfOfData(id) {
  const firstHalf = await vault(id);
  return firstHalf;
}

getFirstHalfOfData(5);

async function findOut(id) {
  const findout = await central(id);
  return findout;
}
findOut(5);






