import * as Scoreboard from '../ngrx/scoreboard-page.actions';

export interface State {
    home: number;
    away: number;
}
export const initialState: State = {
    home: 0,
    away: 0,
};

export function reducer(
    state = initialState,
    action: Scoreboard.ActionsUnion
): State {
    switch (action.type) {
        case Scoreboard.ActionTypes.IncrementHome: {
            return {
                ...state,
                home: state.home + 1,
            };
        }

        case Scoreboard.ActionTypes.IncrementAway: {
            return {
                ...state,
                away: state.away + 1,
            };
        }

        case Scoreboard.ActionTypes.Reset: {
            return action.payload; // typed to { home: number, away: number }
        }

        default: {
            return state;
        }
    }
}