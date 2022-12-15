type Item = {
    botanicalName: string,
    commonName: string,
    category: string,
    description: string,
};

type Reducer<State, Action> = 
    (state: State, action: Action) => State;

type State = {
  value: number;
}

type Dispatch = {
  type: string,
  value: string,
  name: string,
  isValid?: boolean
}

export { Item, Reducer, State, Dispatch };
