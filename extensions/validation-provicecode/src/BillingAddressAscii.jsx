// import React, { useEffect, useState } from 'react';
// import {
//   reactExtension,
//   useBillingAddress,
//   useBuyerJourneyIntercept,

// } from '@shopify/ui-extensions-react/checkout';

// export default reactExtension(
//   'purchase.checkout.block.render',
//   () => <Extension />
// );

// function Extension() {
//   const address = useBillingAddress();
//   const [addressString, setAddressString] = useState('');

//   useEffect(() => {
//     const addressStr = JSON.stringify(address);
//     let data = JSON.parse(addressStr);
//     setAddressString(data);
//   }, [address]);

//   const fieldMapping = {
//     address1: 'Dirección 1',
//     address2: 'Dirección 2',
//     city: 'Ciudad',
//     phone: 'Teléfono',
//     firstName: 'Nombre de Pila',
//     lastName: 'Apellido',
//   };

//   const containsEmoji = () => {
//     const emojiRegex = /[^\x00-\x7F]/;
    
//     const invalidField = Object.keys(fieldMapping).find(
//       field => emojiRegex.test(addressString[field])
//       );
      
//       if (invalidField) {
//         // Dynamically generate the target based on the invalid field
//         console.log(invalidField)
//       const target = `$.cart.deliveryGroups[0].deliveryAddress.${invalidField}`;

      

//       return {
//         target,
//         field: fieldMapping[invalidField],
//       };
//     }

//     return null;
//   };

//   useBuyerJourneyIntercept(({ canBlockProgress }) => {
//     if (canBlockProgress) {
//       const errorInfo = containsEmoji();

//       if (errorInfo) {
//         return {
//           behavior: 'block',
//           reason: 'Invalid address character',
//           errors: [
//             {
//               // Updated error message to dynamically show Spanish field name
//               message: `No se permiten caracteres que no sean ASCII en el campo Dirección de facturación ${errorInfo.field}`,
//               target: errorInfo.target,
//             },
//           ],
//         };
//       }
//     }

//     return {
//       behavior: 'allow',
//       perform: () => {
//         // Ensure any errors from the previous validation are hidden
//         clearValidationErrors();
//       },
//     };
//   });

//   function clearValidationErrors() {
//     // Implement any logic to clear validation errors if needed
//   }

//   return null;
// }
