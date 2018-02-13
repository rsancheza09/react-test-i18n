import { defineAction } from '../utils/defineAction';

export const COUNTER = defineAction(
  'COUNTER',
  ['INCREMENT_REQUESTED', 'INCREMENT', 'DECREMENT_REQUESTED', 'DECREMENT']
);

/*
 * It is the same as:
 */

// export const COUNTER_INCREMENT_REQUESTED = 'COUNTER::INCREMENT_REQUESTED';
// export const COUNTER_INCREMENT = 'COUNTER::INCREMENT';
// export const COUNTER_DECREMENT_REQUESTED = 'COUNTER::DECREMENT_REQUESTED';
// export const COUNTER_DECREMENT = 'COUNTER::DECREMENT';
