import { StyleRules } from 'material-ui/styles';

export type HomeStyles = 'container' | 'text';
export const HomeStyles: StyleRules<HomeStyles> = {
  container: {
    height: '100%',
    minHeight: 'fit-content',
  },
  text: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: 100,
    margin: 0,
  },
};