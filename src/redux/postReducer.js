export default (state = [], { type, payload }) => {
    switch (type) {
      case 'GET_POST':
        return payload;
      case "ADD_POST":
          return [...state, payload]
      default:
        return state;
    }
  };