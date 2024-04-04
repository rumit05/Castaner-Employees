import {
    reactExtension,
    useBuyerJourneyIntercept,
    useShippingAddress,
  } from '@shopify/ui-extensions-react/checkout';
  
  export default reactExtension(
    'purchase.checkout.delivery-address.render-before',
    () => <Extension />,
  );
  
  function Extension() {
    const address = useShippingAddress();
  
    useBuyerJourneyIntercept(({ canBlockProgress }) => {
      return canBlockProgress &&
        address?.provinceCode &&
        (
        address.provinceCode === "CE" ||
        address.provinceCode === "GC" ||
        address.provinceCode === "ML" ||
        address.provinceCode === "TF" ||
        address.provinceCode === "ID" ||
        address.provinceCode === "PR")
        ? {
            behavior: 'block',
            reason: 'Invalid shipping province/state',
            errors: [
              {
                message:
                
                'Lo sentimos, actualmente no estamos disponibles en su provincia/estado.',
                  // 'Sorry, we are currently not available in your province/state',
                // Show an error underneath the country code field
                target:
                  '$.cart.deliveryGroups[0].deliveryAddress.provinceCode',
              }
            ],
          }
        : {
            behavior: 'allow',
          };
    });
  
    return null;
  }
  