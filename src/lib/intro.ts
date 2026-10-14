/**
 * Fired once the preloader's curtain starts lifting.
 *
 * The hero listens for this instead of guessing a delay, so the two animations
 * stay in sync no matter how long the count actually takes. Declared in its own
 * module so neither component has to import the other.
 */
export const INTRO_DONE = "aqualume:intro-done";
