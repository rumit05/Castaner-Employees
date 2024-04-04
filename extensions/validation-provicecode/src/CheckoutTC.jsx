import {
  reactExtension,
  Link,
  Text,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  return (
    <Text appearance='accent'>
  Si hace clic en Pagar ahora, afirma que ha leído y acepta nuestros <Link to='https://castaner.com/en-eu/pages/condiciones-de-compra?country=AT&mdApp_countryCodeDomain=AT'>términos y condiciones</Link> y <Link to='https://castaner.com/pages/politica-de-privacidad'>política de privacidad</Link>.
    </Text>
  );
}
