import gql from "graphql-tag";

export const GROUP_A = 'GROUP_A';
export const GROUP_B = 'GROUP_B';
export const GROUP_C = 'GROUP_C';
export const GROUP_D = 'GROUP_D';
export const GROUP_E = 'GROUP_E';
export const GROUP_F = 'GROUP_F';
export const GROUP_G = 'GROUP_G';
export const GROUP_H = 'GROUP_H';
export const ROUND_16 = 'ROUND_16';
export const QUARTER_FINALS = 'QUARTER_FINALS';
export const SEMI_FINALS = 'SEMI_FINALS';


const QUERY_GROUP_A = gql`
  query {
    worldcups(year: 2018) {
      year
      name
      matches(round: "First stage - Group A,") {
        id
        homeScore
        awayScore
        round
        date
        winner {
          id
          name
        }
        awayTeam {
          id
          name
          code
        }
        homeTeam {
          id
          name
          code
        }
      }
    }
  }
`;

const QUERY_GROUP_B = gql`
  query {
    worldcups(year: 2018) {
      year
      name
      matches(round: "First stage - Group B,") {
        id
        homeScore
        awayScore
        round
        date
        winner {
          id
          name
        }
        awayTeam {
          id
          name
          code
        }
        homeTeam {
          id
          name
          code
        }
      }
    }
  }
`;


const QUERY_GROUP_C = gql`
  query {
    worldcups(year: 2018) {
      year
      name
      matches(round: "First stage - Group C,") {
        id
        homeScore
        awayScore
        round
        date
        winner {
          id
          name
        }
        awayTeam {
          id
          name
          code
        }
        homeTeam {
          id
          name
          code
        }
      }
    }
  }
`;


const QUERY_GROUP_D = gql`
  query {
    worldcups(year: 2018) {
      year
      name
      matches(round: "First stage - Group D,") {
        id
        homeScore
        awayScore
        round
        date
        winner {
          id
          name
        }
        awayTeam {
          id
          name
          code
        }
        homeTeam {
          id
          name
          code
        }
      }
    }
  }
`;


const QUERY_GROUP_E = gql`
  query {
    worldcups(year: 2018) {
      year
      name
      matches(round: "First stage - Group E,") {
        id
        homeScore
        awayScore
        round
        date
        winner {
          id
          name
        }
        awayTeam {
          id
          name
          code
        }
        homeTeam {
          id
          name
          code
        }
      }
    }
  }
`;


const QUERY_GROUP_F = gql`
  query {
    worldcups(year: 2018) {
      year
      name
      matches(round: "First stage - Group F,") {
        id
        homeScore
        awayScore
        round
        date
        winner {
          id
          name
        }
        awayTeam {
          id
          name
          code
        }
        homeTeam {
          id
          name
          code
        }
      }
    }
  }
`;


const QUERY_GROUP_G = gql`
  query {
    worldcups(year: 2018) {
      year
      name
      matches(round: "First stage - Group G,") {
        id
        homeScore
        awayScore
        round
        date
        winner {
          id
          name
        }
        awayTeam {
          id
          name
          code
        }
        homeTeam {
          id
          name
          code
        }
      }
    }
  }
`;


const QUERY_GROUP_H = gql`
  query {
    worldcups(year: 2018) {
      year
      name
      matches(round: "First stage - Group H,") {
        id
        homeScore
        awayScore
        round
        date
        winner {
          id
          name
        }
        awayTeam {
          id
          name
          code
        }
        homeTeam {
          id
          name
          code
        }
      }
    }
  }
`;


const QUERY_ROUND_16 = gql`
  query {
    worldcups(year: 2018) {
      year
      name
      matches(round: "Round of 16,") {
        id
        homeScore
        awayScore
        round
        date
        winner {
          id
          name
        }
        awayTeam {
          id
          name
          code
        }
        homeTeam {
          id
          name
          code
        }
      }
    }
  }
`;

const QUERY_SEMI_FINALS = gql`
  query {
    worldcups(year: 2018) {
      year
      name
      matches(round: "Semi-finals,") {
        id
        homeScore
        awayScore
        round
        date
        winner {
          id
          name
        }
        awayTeam {
          id
          name
          code
        }
        homeTeam {
          id
          name
          code
        }
      }
    }
  }
`;

const QUERY_QUARTER_FINALS = gql`
  query {
    worldcups(year: 2018) {
      year
      name
      matches(round: "Quarter-finals,") {
        id
        homeScore
        awayScore
        round
        date
        winner {
          id
          name
        }
        awayTeam {
          id
          name
          code
        }
        homeTeam {
          id
          name
          code
        }
      }
    }
  }
`;
export const QUERIES = {
  [GROUP_A]: QUERY_GROUP_A,
  [GROUP_B]: QUERY_GROUP_B,
  [GROUP_C]: QUERY_GROUP_C,
  [GROUP_D]: QUERY_GROUP_D,
  [GROUP_E]: QUERY_GROUP_E,
  [GROUP_F]: QUERY_GROUP_F,
  [GROUP_G]: QUERY_GROUP_G,
  [GROUP_H]: QUERY_GROUP_H,
  [ROUND_16]: QUERY_ROUND_16,
  [QUARTER_FINALS]: QUERY_QUARTER_FINALS,
  [SEMI_FINALS]: QUERY_SEMI_FINALS,
};

export default {
  [GROUP_A]: 'First stage - Group A,',
  [GROUP_B]: 'First stage - Group B,',
  [GROUP_C]: 'First stage - Group C,',
  [GROUP_D]: 'First stage - Group D,',
  [GROUP_E]: 'First stage - Group E,',
  [GROUP_F]: 'First stage - Group F,',
  [GROUP_G]: 'First stage - Group G,',
  [GROUP_H]: 'First stage - Group H,',
  [ROUND_16]: 'Round of 16',
  [QUARTER_FINALS]: 'Quarter finals',
  [SEMI_FINALS]: 'Semi-finals,',
};