import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

/**
 * Get a generic hook-function to use with Action
 * Removes overhead of manually writing out hooks for actions.
 */
export function useConnectedAction<TAction extends (...args: any[]) => any>(action: TAction): TAction {
  const dispatch = useDispatch();

  return useCallback(((...args) => dispatch(action(...args))) as TAction, [dispatch, action]);
}
