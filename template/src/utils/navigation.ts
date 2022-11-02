import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name: string, params: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(
      name as unknown as never,
      params as unknown as never,
    );
  }
}

export function push(name: string, params: any) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(name, params));
  }
}
