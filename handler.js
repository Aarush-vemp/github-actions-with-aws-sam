"use strict";

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "this is with github actions",
        input: event,
      },
      null,
      2
    ),
  };
};
