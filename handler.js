"use strict";

module.exports.hello = async (event) => {
  let randomNumber = Math.floor(Math.random() * 10)
  return randomNumber;
  // return {
    // statusCode: 200,
    // body: JSON.stringify(
    //   {
    //     message: "configured new keys for user_two",
    //     input: event,
    //   },
    //   null,
    //   2
    // ),
    
  // };
};
