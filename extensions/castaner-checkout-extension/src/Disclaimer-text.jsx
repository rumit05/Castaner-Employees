import {
  reactExtension,
  Text,
  useApi,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {


  const {settings} = useApi()

  return (
    // <Text appearance='decorative' emphasis='bold'>BEFORE COMPLETING THE PURCHASE, CHECK THAT THE INFORMATION IS CORRECT</Text>
    <Text appearance='decorative' emphasis='bold'>{settings.current.disclaimer_text}</Text>

  );
  
}
