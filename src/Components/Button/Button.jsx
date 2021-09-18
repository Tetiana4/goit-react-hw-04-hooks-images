import { Loadbutton } from './Button.styled';

export function Button({ onClick }) {
  return (
    <Loadbutton type="button" onClick={onClick}>
      Load more
    </Loadbutton>
  );
}
