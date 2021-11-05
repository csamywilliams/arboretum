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

export { Item, Reducer, State };
