// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const typeDefs = `#graphql
  enum ItemType {
    PORTAL
    POTION
    CONTAINER
    SPECIAL
  }
  
  enum Resource {
    HEALTH
    MANA
    STAMINA
  }
  
  enum QuestStatus {
    STARTED
    FAILED
    COMPLETED
    KILLED
    READY
  }
  
  enum Continent {
    MESOLAR
    SOUTHERNOCEAN
    GELIDUS
    ABEND
    ALAGH
    UNCHARTEDOCEANS
    VIDBLAIN
  }
  
  enum Direction {
    UP
    DOWN
    NORTH
    SOUTH
    EAST
    WEST
  }
  
  interface Item {
    id: Int
    name: String
    longName: String
  }
  
  type Potion implements Item {
    id: Int
    name: String
    longName: String
    type: ItemType
    containedIn: Container
    resource: Resource
  }
  
  type Portal implements Item {
    id: Int!
    name: String
    longName: String
    type: ItemType
    containedIn: Container
    ####   to: Room
  }
  
  type Container  {
    id: Int!
    name: String
    longName: String
    type: ItemType
  }
  
  type DirectionalExit {
    from: Room
    to: Room
    command: Direction
  }
  
  type CustomExit {
    from: Room
    to: Room
    command: String
    delay: Int
  }
  
  union Exit = DirectionalExit | CustomExit
  
  type Quest {
    status: String
    target: Mob
    room: Room
    area: Area
    time: Int
  }
  
  type Mob {
    name: String!
    rooms: [Room]
    areas: [Area]
    alignment: Int
    levels: [Int]
  }
  
  type Coordinate {
    continent: Continent
    x: Int
    y: Int
    isContinent: Boolean
  }
  
  type Room {
    id: Int!
    name: String!
    zone: Area!
    terrain: String
    exits: [Exit]
    coordinates: Coordinate
  }
  
  type Area {
    name: String
    longName: String
    rooms: [Room]
    portal: Portal
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    potions: [Potion]
  }
`;
