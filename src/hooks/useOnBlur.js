const useOnBlur = (e, stateValue, setSateValue) => {
  const field = e.target.name;
  const value = e.target.value;
  const newInfo = { ...stateValue };
  newInfo[field] = value;
  return setSateValue(newInfo);
};
export default useOnBlur;
