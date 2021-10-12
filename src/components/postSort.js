export const postSort = (firstEl, secondEl) => {
  if (
    firstEl.props.children.props.postDate >
    secondEl.props.children.props.postDate
  ) {
    return -1;
  }
  if (
    firstEl.props.children.props.postDate <
    secondEl.props.children.props.postDate
  ) {
    return 1;
  }

  return 0;
};
