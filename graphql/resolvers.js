const nico = {
    name: "nicolas",
    age: 18,
    gender: "male"
};

const resolvers = {
    Query: {
        person:() => nico
    }
};

export default resolvers