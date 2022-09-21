"use strict";

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "configured new keys for user_two",
        input: event,
      },
      null,
      2
    ),
  };
};
