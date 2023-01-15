/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
export { default } from "./src/components/ProductCard/ProductCard";

AppRegistry.registerComponent(appName, () => App);
