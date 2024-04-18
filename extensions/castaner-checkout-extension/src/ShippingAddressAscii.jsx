import React, { useEffect, useState } from "react";
import {
  reactExtension,
  useBuyerJourneyIntercept,
  useShippingAddress,
} from "@shopify/ui-extensions-react/checkout";

export default reactExtension(
  "purchase.checkout.delivery-address.render-before",
  () => <Extension />
);

function Extension() {
  const address = useShippingAddress();
  const fieldMapping = {
    address1: "Dirección 1",
    address2: "Dirección 2",
    city: "Ciudad",
    phone: "Teléfono",
    firstName: "Nombre de Pila",
    lastName: "Apellido",
  };

  const containsEmoji = () => {
    for (const field of Object.keys(fieldMapping)) {
      let input = address[field];
      if (input) {
        for (let i = 0; i < input.length; i++) {
          if (input.charCodeAt(i) > 255) {
            return field;
          }
        }
      }
    }
    return null;
  };


  useBuyerJourneyIntercept(({ canBlockProgress }) => {
    if (canBlockProgress) {
      const invalidField = containsEmoji();

      if (invalidField) {
        const target = `$.cart.deliveryGroups[0].deliveryAddress.${invalidField}`;
        return {
          behavior: "block",
          reason: "Invalid address character",
          errors: [
            {
              message: `No se permiten caracteres que no sean ASCII en el campo ${fieldMapping[invalidField]}`,
              target: target,
            },
          ],
        };
      }
    }

    return {
      behavior: "allow",
      perform: () => {
        // clearValidationErrors();
      },
    };
  });



  return null;
}
