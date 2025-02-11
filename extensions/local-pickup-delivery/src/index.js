// @ts-check

// Use JSDoc annotations for type safety.
/**
* @typedef {import("../generated/api").InputQuery} InputQuery
* @typedef {import("../generated/api").FunctionResult} FunctionResult
* @typedef {import("../generated/api").Operation} Operation
*/

// The @shopify/shopify_function package will use the default export as your function entrypoint.
export default /**
* @param {InputQuery} input
* @returns {FunctionResult}
*/
  (input) => {
    console.log("data", JSON.stringify(input))
      const hasBulkyVariant = input.cart.lines.some((line) => {
        switch (line.merchandise.__typename) {
          case 'ProductVariant':
            return line.merchandise.product.hasAnyTag;
            case 'CustomProduct':
            return false;
          default:
            return false;
        }
      });

      let cost;
      let pickupInstruction;
      if (hasBulkyVariant) {
        cost = 2.99;
        pickupInstruction = "Ready for pickup next business day.";
      } else {
        cost = 0.00;
        pickupInstruction = "Ready for pickup now!";
      }
      const operations = input.locations
      
        .map((location) => ({
  
          add: {
            title: location.name,
            cost: cost,
            pickupLocation: {
              locationHandle: location.handle,
              pickupInstruction: pickupInstruction,
            },
          },
        }));
      return { operations: operations };
  };
