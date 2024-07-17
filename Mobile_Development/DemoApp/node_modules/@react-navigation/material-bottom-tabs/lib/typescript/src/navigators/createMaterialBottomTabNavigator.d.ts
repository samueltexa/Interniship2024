import { DefaultNavigatorOptions, ParamListBase, TabNavigationState, TabRouterOptions } from '@react-navigation/native';
import type { MaterialBottomTabNavigationConfig, MaterialBottomTabNavigationEventMap, MaterialBottomTabNavigationOptions } from '../types';
type Props = DefaultNavigatorOptions<ParamListBase, TabNavigationState<ParamListBase>, MaterialBottomTabNavigationOptions, MaterialBottomTabNavigationEventMap> & TabRouterOptions & MaterialBottomTabNavigationConfig;
declare function MaterialBottomTabNavigator({ id, initialRouteName, backBehavior, children, screenListeners, screenOptions, ...rest }: Props): JSX.Element;
declare const _default: <ParamList extends ParamListBase>() => import("@react-navigation/native").TypedNavigator<ParamList, TabNavigationState<ParamListBase>, MaterialBottomTabNavigationOptions, MaterialBottomTabNavigationEventMap, typeof MaterialBottomTabNavigator>;
export default _default;
//# sourceMappingURL=createMaterialBottomTabNavigator.d.ts.map