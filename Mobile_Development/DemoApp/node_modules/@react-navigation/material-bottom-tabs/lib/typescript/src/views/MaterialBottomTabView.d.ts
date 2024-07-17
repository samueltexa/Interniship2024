import { ParamListBase, TabNavigationState } from '@react-navigation/native';
import type { MaterialBottomTabDescriptorMap, MaterialBottomTabNavigationConfig, MaterialBottomTabNavigationHelpers } from '../types';
type Props = MaterialBottomTabNavigationConfig & {
    state: TabNavigationState<ParamListBase>;
    navigation: MaterialBottomTabNavigationHelpers;
    descriptors: MaterialBottomTabDescriptorMap;
};
export default function MaterialBottomTabView(props: Props): JSX.Element;
export {};
//# sourceMappingURL=MaterialBottomTabView.d.ts.map